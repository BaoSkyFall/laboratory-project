import { Service, Inject } from 'typedi';
import jwt from 'jsonwebtoken';
import MailerService from './mailer';
import argon2 from 'argon2';
import { randomBytes } from 'crypto';
import { ICriteria, ICriteriaInputDTO } from '../interfaces/ICriteria';
import { EventDispatcher, EventDispatcherInterface } from '../decorators/eventDispatcher';
import events from '../subscribers/events';
import { BSONRegExp } from 'mongodb';

@Service()
export default class CriteriaService {
  constructor(
    @Inject('criteriaModel') private criteriaModel: Models.CriteriaModel,
    private mailer: MailerService,
    @Inject('logger') private logger,
    @EventDispatcher() private eventDispatcher: EventDispatcherInterface,
  ) {
  }
  public async GetListCriteria(params: { searchKey?: string, category?: string, pageSize?: number, pageIndex?: number }): Promise<{ criteria: any[] }> {
    try {
      this.logger.silly('Get list criteria DB Record');
      console.log('params:', params)
      const query = {
        // category: new BSONRegExp(`.*${params.category || ''}.*`, "i"),
        // name: new BSONRegExp(`.*${params.searchKey || ''}.*`, "i"),
      };

      const limit = params.pageSize;
      const skip = params.pageIndex - 1;
      const sort = [["name"]];
      console.log('query:', query)
      console.log('limit:', limit)
      console.log('skip:', skip)
      const criteriaList = await this.criteriaModel.find(query).skip(skip).limit(limit).populate('category').sort(sort)
      const total = await this.criteriaModel.count();


      // const criteriaList = await this.criteriaModel.find();
      return { criteriaList, total } as any;
    }

    catch (e) {
      this.logger.error(e);
      throw e;
    }
  }
  public async CreateCriteria(criteriaInputDTO: ICriteriaInputDTO): Promise<{ criteria: ICriteria }> {
    try {
      this.logger.silly('Creating criteria db record');
      const criteriaRecord = await this.criteriaModel.create({
        ...criteriaInputDTO,

      });

      if (!criteriaRecord) {
        throw new Error('Criteria cannot be created');
      }
      this.eventDispatcher.dispatch(events.criteria.create, { criteria: criteriaRecord });

      /**
       * @TODO This is not the best way to deal with this
       * There should exist a 'Mapper' layer
       * that transforms data from layer to layer
       * but that's too over-engineering for now
       */
      const criteria = criteriaRecord.toObject();
      return { criteria } as any;
    } catch (e) {
      this.logger.error(e);
      throw e;
    }
  }
  public async EditCriteria(criteriaInputDTO: ICriteriaInputDTO): Promise<{ criteria: ICriteria }> {
    try {
      this.logger.silly('Edit criteria db record');
      const { _id } = criteriaInputDTO;
      if (_id) {
        const criteriaRecord = await this.criteriaModel.updateOne({
          _id
        }, {
          $set: {
            ...criteriaInputDTO
          }
        })
        if (!criteriaRecord) {
          throw new Error('Criteria cannot be update');
        }
        console.log('criteriaRecord:', criteriaRecord)
        this.eventDispatcher.dispatch(events.criteria.edit, { criteria: criteriaRecord });
        const criteria = criteriaRecord;
        return { criteria } as any;
      }

    } catch (e) {
      this.logger.error(e);
      throw e;
    }
  }
  public async DeleteCriteria(_id: string): Promise<{ criteria: ICriteria }> {
    try {
      this.logger.silly('Delete criteria db record');
      if (_id) {
        const criteriaRecord = await this.criteriaModel.deleteOne({
          _id
        })
        if (!criteriaRecord) {
          throw new Error('Criteria cannot be deleted');
        }
        console.log('criteriaRecord:', criteriaRecord)
        this.eventDispatcher.dispatch(events.criteria.edit, { criteria: criteriaRecord });
        const criteria = criteriaRecord;
        return { criteria } as any;
      }

    } catch (e) {
      this.logger.error(e);
      throw e;
    }
  }
}
