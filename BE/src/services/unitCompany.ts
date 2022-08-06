import { Service, Inject } from 'typedi';
import jwt from 'jsonwebtoken';
import MailerService from './mailer';
import config from '@/config';
import argon2 from 'argon2';
import { randomBytes } from 'crypto';
import { IUnitCompany, IUnitCompanyInputDTO } from '@/interfaces/IUnitCompany';
import { EventDispatcher, EventDispatcherInterface } from '@/decorators/eventDispatcher';
import events from '@/subscribers/events';

@Service()
export default class UnitCompanyService {
  constructor(
    @Inject('unitCompanyModel') private unitCompanyModel: Models.UnitCompanyModel,
    private mailer: MailerService,
    @Inject('logger') private logger,
    @EventDispatcher() private eventDispatcher: EventDispatcherInterface,
  ) {
  }
  public async GetListUnitCompany(): Promise<{ unitCompany: any[] }> {
    try {
      this.logger.silly('Get list unitCompany DB Record');

      const unitCompanyList = await this.unitCompanyModel.find()
      // const unitCompanyList = await this.unitCompanyModel.find();
      return unitCompanyList;
    }

    catch (e) {
      this.logger.error(e);
      throw e;
    }
  }
  public async CreateUnitCompany(unitCompanyInputDTO: IUnitCompanyInputDTO): Promise<{ unitCompany: IUnitCompany }> {
    try {
      this.logger.silly('Creating unitCompany db record');
      const unitCompanyRecord = await this.unitCompanyModel.create({
        ...unitCompanyInputDTO,

      });

      if (!unitCompanyRecord) {
        throw new Error('UnitCompany cannot be created');
      }
      this.eventDispatcher.dispatch(events.unitCompany.create, { unitCompany: unitCompanyRecord });

      /**
       * @TODO This is not the best way to deal with this
       * There should exist a 'Mapper' layer
       * that transforms data from layer to layer
       * but that's too over-engineering for now
       */
      const unitCompany = unitCompanyRecord.toObject();
      return { unitCompany };
    } catch (e) {
      this.logger.error(e);
      throw e;
    }
  }
  public async EditUnitCompany(unitCompanyInputDTO: IUnitCompanyInputDTO): Promise<{ unitCompany: IUnitCompany }> {
    try {
      this.logger.silly('Edit unitCompany db record');
      const { _id } = unitCompanyInputDTO;
      if (_id) {
        const unitCompanyRecord = await this.unitCompanyModel.updateOne({
          _id
        }, {
          $set: {
            ...unitCompanyInputDTO
          }
        })
        if (!unitCompanyRecord) {
          throw new Error('UnitCompany cannot be update');
        }
        console.log('unitCompanyRecord:', unitCompanyRecord)
        this.eventDispatcher.dispatch(events.unitCompany.edit, { unitCompany: unitCompanyRecord });
        const unitCompany = unitCompanyRecord;
        return { unitCompany };
      }

    } catch (e) {
      this.logger.error(e);
      throw e;
    }
  }
  public async DeleteUnitCompany(_id: string): Promise<{ unitCompany: IUnitCompany }> {
    try {
      this.logger.silly('Delete unitCompany db record');
      if (_id) {
        const unitCompanyRecord = await this.unitCompanyModel.deleteOne({
          _id
        })
        if (!unitCompanyRecord) {
          throw new Error('UnitCompany cannot be deleted');
        }
        console.log('unitCompanyRecord:', unitCompanyRecord)
        this.eventDispatcher.dispatch(events.unitCompany.edit, { unitCompany: unitCompanyRecord });
        const unitCompany = unitCompanyRecord;
        return { unitCompany };
      }

    } catch (e) {
      this.logger.error(e);
      throw e;
    }
  }
}
