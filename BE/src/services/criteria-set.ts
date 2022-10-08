import { Service, Inject } from 'typedi';
import jwt from 'jsonwebtoken';
import MailerService from './mailer';
import argon2 from 'argon2';
import { randomBytes } from 'crypto';
import { ICriteriaSet, ICriteriaSetInputDTO } from '../interfaces/ICriteriaSet';
import { EventDispatcher, EventDispatcherInterface } from '../decorators/eventDispatcher';
import events from '../subscribers/events';
import { BSONRegExp } from 'mongodb';

@Service()
export default class CriteriaSetService {
  constructor(
    @Inject('criteriaSetModel') private criteriaSetModel: Models.CriteriaSetModel,
    private mailer: MailerService,
    @Inject('logger') private logger,
    @EventDispatcher() private eventDispatcher: EventDispatcherInterface,
  ) {
  }
  public async GetListCriteriaSet(params: { searchKey?: string, category?: string, pageSize?: number, pageIndex?: number }): Promise<{ criteriaSet: any[] }> {
    try {
      this.logger.silly('Get list criteriaSet DB Record');
      console.log('params:', params)
      const query = {
        // category: new RegExp(`.*${params.category || ''}.*`, "i"),
        name: new RegExp(`.*${params.searchKey || ''}.*`, "i"),
      };

      const limit = params.pageSize;
      const skip = params.pageIndex - 1;
      const sort = [["name"]];
      const criteriaSetList = await this.criteriaSetModel.find(query).skip(skip).limit(limit).populate(
        {
          path: 'criteriaList',
          populate: {
            path: 'category'
          }
        }).sort(sort)
      const total = await this.criteriaSetModel.find(query).count();


      // const criteriaSetList = await this.criteriaSetModel.find();
      return { criteriaSetList, total } as any;
    }

    catch (e) {
      this.logger.error(e);
      throw e;
    }
  }
  public async CreateCriteriaSet(criteriaSetInputDTO: ICriteriaSetInputDTO): Promise<{ criteriaSet: ICriteriaSet }> {
    try {
      this.logger.silly('Creating criteriaSet db record');
      const criteriaSetRecord = await this.criteriaSetModel.create({
        ...criteriaSetInputDTO,

      });

      if (!criteriaSetRecord) {
        throw new Error('CriteriaSet cannot be created');
      }
      this.eventDispatcher.dispatch(events.criteriaSet.create, { criteriaSet: criteriaSetRecord });

      /**
       * @TODO This is not the best way to deal with this
       * There should exist a 'Mapper' layer
       * that transforms data from layer to layer
       * but that's too over-engineering for now
       */
      const criteriaSet = criteriaSetRecord.toObject();
      return { criteriaSet } as any;
    } catch (e) {
      this.logger.error(e);
      throw e;
    }
  }
  public async EditCriteriaSet(criteriaSetInputDTO: ICriteriaSetInputDTO): Promise<{ criteriaSet: ICriteriaSet }> {
    try {
      this.logger.silly('Edit criteriaSet db record');
      const { _id } = criteriaSetInputDTO;
      if (_id) {
        const criteriaSetRecord = await this.criteriaSetModel.updateOne({
          _id
        }, {
          $set: {
            ...criteriaSetInputDTO
          }
        })
        if (!criteriaSetRecord) {
          throw new Error('CriteriaSet cannot be update');
        }
        console.log('criteriaSetRecord:', criteriaSetRecord)
        this.eventDispatcher.dispatch(events.criteriaSet.edit, { criteriaSet: criteriaSetRecord });
        const criteriaSet = criteriaSetRecord;
        return { criteriaSet } as any;
      }

    } catch (e) {
      this.logger.error(e);
      throw e;
    }
  }
  public async DeleteCriteriaSet(_id: string): Promise<{ criteriaSet: ICriteriaSet }> {
    try {
      this.logger.silly('Delete criteriaSet db record');
      if (_id) {
        const criteriaSetRecord = await this.criteriaSetModel.deleteOne({
          _id
        })
        if (!criteriaSetRecord) {
          throw new Error('CriteriaSet cannot be deleted');
        }
        console.log('criteriaSetRecord:', criteriaSetRecord)
        this.eventDispatcher.dispatch(events.criteriaSet.edit, { criteriaSet: criteriaSetRecord });
        const criteriaSet = criteriaSetRecord;
        return { criteriaSet } as any;
      }

    } catch (e) {
      this.logger.error(e);
      throw e;
    }
  }
}
