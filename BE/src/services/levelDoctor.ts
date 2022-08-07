import { Service, Inject } from 'typedi';
import jwt from 'jsonwebtoken';
import MailerService from './mailer';
import argon2 from 'argon2';
import { randomBytes } from 'crypto';
import { ILevelDoctor, ILevelDoctorInputDTO } from '../interfaces/ILevelDoctor';
import { EventDispatcher, EventDispatcherInterface } from '../decorators/eventDispatcher';
import events from '../subscribers/events';

@Service()
export default class LevelDoctorService {
  constructor(
    @Inject('levelDoctorModel') private levelDoctorModel: Models.LevelDoctorModel,
    private mailer: MailerService,
    @Inject('logger') private logger,
    @EventDispatcher() private eventDispatcher: EventDispatcherInterface,
  ) {
  }
  public async GetListLevelDoctor(): Promise<{ levelDoctor: any[] }> {
    try {
      this.logger.silly('Get list levelDoctor DB Record');

      const levelDoctorList = await this.levelDoctorModel.find()
      // const levelDoctorList = await this.levelDoctorModel.find();
      return levelDoctorList as any;
    }

    catch (e) {
      this.logger.error(e);
      throw e;
    }
  }
  public async CreateLevelDoctor(levelDoctorInputDTO: ILevelDoctorInputDTO): Promise<{ levelDoctor: ILevelDoctor }> {
    try {
      this.logger.silly('Creating levelDoctor db record');
      const levelDoctorRecord = await this.levelDoctorModel.create({
        ...levelDoctorInputDTO,

      });

      if (!levelDoctorRecord) {
        throw new Error('LevelDoctor cannot be created');
      }
      this.eventDispatcher.dispatch(events.levelDoctor.create, { levelDoctor: levelDoctorRecord });

      /**
       * @TODO This is not the best way to deal with this
       * There should exist a 'Mapper' layer
       * that transforms data from layer to layer
       * but that's too over-engineering for now
       */
      const levelDoctor = levelDoctorRecord.toObject();
      return { levelDoctor } as any;
    } catch (e) {
      this.logger.error(e);
      throw e;
    }
  }
  public async EditLevelDoctor(levelDoctorInputDTO: ILevelDoctorInputDTO): Promise<{ levelDoctor: ILevelDoctor }> {
    try {
      this.logger.silly('Edit levelDoctor db record');
      const { _id } = levelDoctorInputDTO;
      if (_id) {
        const levelDoctorRecord = await this.levelDoctorModel.updateOne({
          _id
        }, {
          $set: {
            ...levelDoctorInputDTO
          }
        })
        if (!levelDoctorRecord) {
          throw new Error('LevelDoctor cannot be update');
        }
        console.log('levelDoctorRecord:', levelDoctorRecord)
        this.eventDispatcher.dispatch(events.levelDoctor.edit, { levelDoctor: levelDoctorRecord });
        const levelDoctor = levelDoctorRecord;
        return { levelDoctor } as any;
      }

    } catch (e) {
      this.logger.error(e);
      throw e;
    }
  }
  public async DeleteLevelDoctor(_id: string): Promise<{ levelDoctor: ILevelDoctor }> {
    try {
      this.logger.silly('Delete levelDoctor db record');
      if (_id) {
        const levelDoctorRecord = await this.levelDoctorModel.deleteOne({
          _id
        })
        if (!levelDoctorRecord) {
          throw new Error('LevelDoctor cannot be deleted');
        }
        console.log('levelDoctorRecord:', levelDoctorRecord)
        this.eventDispatcher.dispatch(events.levelDoctor.edit, { levelDoctor: levelDoctorRecord });
        const levelDoctor = levelDoctorRecord;
        return { levelDoctor } as any;
      }

    } catch (e) {
      this.logger.error(e);
      throw e;
    }
  }
}
