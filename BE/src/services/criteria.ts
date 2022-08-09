import { Service, Inject } from 'typedi';
import jwt from 'jsonwebtoken';
import MailerService from './mailer';
import argon2 from 'argon2';
import { randomBytes } from 'crypto';
import { ICriteria, ICriteriaInputDTO } from '../interfaces/ICriteria';
import { EventDispatcher, EventDispatcherInterface } from '../decorators/eventDispatcher';
import events from '../subscribers/events';

@Service()
export default class CriteriaService {
  constructor(
    @Inject('criteriaModel') private criteriaModel: Models.CriteriaModel,
    private mailer: MailerService,
    @Inject('logger') private logger,
    @EventDispatcher() private eventDispatcher: EventDispatcherInterface,
  ) {
  }
  public async GetListCriteria(): Promise<{ criteria: any[] }> {
    try {
      this.logger.silly('Get list criteria DB Record');
      const sort = [["name"]];
      const criteriaList = await this.criteriaModel.find().populate('category').sort(sort)

      // const criteriaList = await this.criteriaModel.find();
      return criteriaList as any;
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
