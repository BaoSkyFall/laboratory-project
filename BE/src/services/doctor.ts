import { Service, Inject } from 'typedi';
import jwt from 'jsonwebtoken';
import MailerService from './mailer';
import argon2 from 'argon2';
import { randomBytes } from 'crypto';
import { IDoctor, IDoctorInputDTO } from '../interfaces/IDoctor';
import { EventDispatcher, EventDispatcherInterface } from '../decorators/eventDispatcher';
import events from '../subscribers/events';

@Service()
export default class DoctorService {
  constructor(
    @Inject('doctorModel') private doctorModel: Models.DoctorModel,
    private mailer: MailerService,
    @Inject('logger') private logger,
    @EventDispatcher() private eventDispatcher: EventDispatcherInterface,
  ) {
  }
  public async GetListDoctor(): Promise<{ doctor: any[] }> {
    try {
      this.logger.silly('Get list doctor DB Record');

      const doctorList = await this.doctorModel.find().populate('specialist').populate('levelDoctor')
        .populate('unitCompany')
      // const doctorList = await this.specialistModel.find();

      return doctorList as any
    }

    catch (e) {
      this.logger.error(e);
      throw e;
    }
  }
  public async CreateDoctor(doctorInputDTO: IDoctorInputDTO): Promise<{ doctor: IDoctor }> {
    try {
      this.logger.silly('Creating doctor db record');
      const doctorRecord = await this.doctorModel.create({
        ...doctorInputDTO,

      });

      if (!doctorRecord) {
        throw new Error('Doctor cannot be created');
      }
      this.eventDispatcher.dispatch(events.doctor.create, { doctor: doctorRecord });

      /**
       * @TODO This is not the best way to deal with this
       * There should exist a 'Mapper' layer
       * that transforms data from layer to layer
       * but that's too over-engineering for now
       */
      const doctor = doctorRecord.toObject();
      return { doctor };
    } catch (e) {
      this.logger.error(e);
      throw e;
    }
  }
  public async EditDoctor(doctorInputDTO: IDoctorInputDTO): Promise<{ doctor: IDoctor }> {
    try {
      this.logger.silly('Edit doctor db record');
      const { _id } = doctorInputDTO;
      if (_id) {
        const doctorRecord = await this.doctorModel.updateOne({
          _id
        }, {
          $set: {
            ...doctorInputDTO
          }
        })
        if (!doctorRecord) {
          throw new Error('Doctor cannot be update');
        }
        console.log('doctorRecord:', doctorRecord)
        this.eventDispatcher.dispatch(events.doctor.edit, { doctor: doctorRecord });
        const doctor = doctorRecord;
        return { doctor } as any;
      }

    } catch (e) {
      this.logger.error(e);
      throw e;
    }
  }
  public async DeleteDoctor(_id: string): Promise<{ doctor: IDoctor }> {
    try {
      this.logger.silly('Delete doctor db record');
      if (_id) {
        const doctorRecord = await this.doctorModel.deleteOne({
          _id
        })
        if (!doctorRecord) {
          throw new Error('Doctor cannot be deleted');
        }
        console.log('doctorRecord:', doctorRecord)
        this.eventDispatcher.dispatch(events.doctor.edit, { doctor: doctorRecord });
        const doctor = doctorRecord;
        return { doctor } as any;
      }

    } catch (e) {
      this.logger.error(e);
      throw e;
    }
  }
}
