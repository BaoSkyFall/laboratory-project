import { Service, Inject } from 'typedi';
import jwt from 'jsonwebtoken';
import MailerService from './mailer';
import config from '@/config';
import argon2 from 'argon2';
import { randomBytes } from 'crypto';
import { ISpecialist, ISpecialistInputDTO } from '@/interfaces/ISpecialist';
import { EventDispatcher, EventDispatcherInterface } from '@/decorators/eventDispatcher';
import events from '@/subscribers/events';

@Service()
export default class SpecialistService {
  constructor(
    @Inject('specialistModel') private specialistModel: Models.SpecialistModel,
    private mailer: MailerService,
    @Inject('logger') private logger,
    @EventDispatcher() private eventDispatcher: EventDispatcherInterface,
  ) {
  }
  public async GetListSpecialist(): Promise<{ specialist: any[] }> {
    try {
      this.logger.silly('Get list specialist DB Record');

      const specialistList = await this.specialistModel.find()
      // const specialistList = await this.specialistModel.find();
      return specialistList;
    }

    catch (e) {
      this.logger.error(e);
      throw e;
    }
  }
  public async CreateSpecialist(specialistInputDTO: ISpecialistInputDTO): Promise<{ specialist: ISpecialist }> {
    try {
      this.logger.silly('Creating specialist db record');
      const specialistRecord = await this.specialistModel.create({
        ...specialistInputDTO,

      });

      if (!specialistRecord) {
        throw new Error('Specialist cannot be created');
      }
      this.eventDispatcher.dispatch(events.specialist.create, { specialist: specialistRecord });

      /**
       * @TODO This is not the best way to deal with this
       * There should exist a 'Mapper' layer
       * that transforms data from layer to layer
       * but that's too over-engineering for now
       */
      const specialist = specialistRecord.toObject();
      return { specialist };
    } catch (e) {
      this.logger.error(e);
      throw e;
    }
  }
  public async EditSpecialist(specialistInputDTO: ISpecialistInputDTO): Promise<{ specialist: ISpecialist }> {
    try {
      this.logger.silly('Edit specialist db record');
      const { _id } = specialistInputDTO;
      if (_id) {
        const specialistRecord = await this.specialistModel.updateOne({
          _id
        }, {
          $set: {
            ...specialistInputDTO
          }
        })
        if (!specialistRecord) {
          throw new Error('Specialist cannot be update');
        }
        console.log('specialistRecord:', specialistRecord)
        this.eventDispatcher.dispatch(events.specialist.edit, { specialist: specialistRecord });
        const specialist = specialistRecord;
        return { specialist };
      }

    } catch (e) {
      this.logger.error(e);
      throw e;
    }
  }
  public async DeleteSpecialist(_id: string): Promise<{ specialist: ISpecialist }> {
    try {
      this.logger.silly('Delete specialist db record');
      if (_id) {
        const specialistRecord = await this.specialistModel.deleteOne({
          _id
        })
        if (!specialistRecord) {
          throw new Error('Specialist cannot be deleted');
        }
        console.log('specialistRecord:', specialistRecord)
        this.eventDispatcher.dispatch(events.specialist.edit, { specialist: specialistRecord });
        const specialist = specialistRecord;
        return { specialist };
      }

    } catch (e) {
      this.logger.error(e);
      throw e;
    }
  }
}
