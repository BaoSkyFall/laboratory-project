import { Service, Inject } from 'typedi';
import jwt from 'jsonwebtoken';
import MailerService from './mailer';
import config from '@/config';
import argon2 from 'argon2';
import { randomBytes } from 'crypto';
import { IDoctor, IDoctorInputDTO } from '@/interfaces/IDoctor';
import { EventDispatcher, EventDispatcherInterface } from '@/decorators/eventDispatcher';
import events from '@/subscribers/events';

@Service()
export default class DoctorService {
  constructor(
    @Inject('doctorModel') private doctorModel: Models.DoctorModel,
    private mailer: MailerService,
    @Inject('logger') private logger,
    @EventDispatcher() private eventDispatcher: EventDispatcherInterface,
  ) {
  }

  public async CreateDoctor(doctorInputDTO: IDoctorInputDTO): Promise<{ doctor: IDoctor }> {
    try {
      this.logger.silly('Creating user db record');
      const doctorRecord = await this.doctorModel.create({
        ...doctorInputDTO,

      });
      this.logger.silly('Generating JWT');
      const token = this.generateToken(doctorRecord);

      if (!doctorRecord) {
        throw new Error('User cannot be created');
      }
      this.logger.silly('Sending welcome email');
      await this.mailer.SendWelcomeEmail(doctorRecord);

      this.eventDispatcher.dispatch(events.user.signUp, { user: doctorRecord });

      /**
       * @TODO This is not the best way to deal with this
       * There should exist a 'Mapper' layer
       * that transforms data from layer to layer
       * but that's too over-engineering for now
       */
      const user = doctorRecord.toObject();
      return { doctor };
    } catch (e) {
      this.logger.error(e);
      throw e;
    }
  }



  private generateToken(user) {
    const today = new Date();
    const exp = new Date(today);
    exp.setDate(today.getDate() + 60);

    /**
     * A JWT means JSON Web Token, so basically it's a json that is _hashed_ into a string
     * The cool thing is that you can add custom properties a.k.a metadata
     * Here we are adding the userId, role and name
     * Beware that the metadata is public and can be decoded without _the secret_
     * but the client cannot craft a JWT to fake a userId
     * because it doesn't have _the secret_ to sign it
     * more information here: https://softwareontheroad.com/you-dont-need-passport
     */
    this.logger.silly(`Sign JWT for userId: ${user._id}`);
    return jwt.sign(
      {
        _id: user._id, // We are gonna use this in the middleware 'isAuth'
        role: user.role,
        name: user.name,
        exp: exp.getTime() / 1000,
      },
      config.jwtSecret
    );
  }
}
