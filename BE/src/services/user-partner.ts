import { Service, Inject } from 'typedi';
import jwt from 'jsonwebtoken';
import MailerService from './mailer';
import argon2 from 'argon2';
import { randomBytes } from 'crypto';
import { IUserPartner, IUserPartnerInputDTO } from '../interfaces/IUserPartner';
import { EventDispatcher, EventDispatcherInterface } from '../decorators/eventDispatcher';
import events from '../subscribers/events';
import { BSONRegExp } from 'mongodb';

@Service()
export default class UserPartnerService {
  constructor(
    @Inject('userPartnerModel') private userPartnerModel: Models.UserPartnerModel,
    private mailer: MailerService,
    @Inject('logger') private logger,
    @EventDispatcher() private eventDispatcher: EventDispatcherInterface,
  ) { }
  public async GetListUserPartner(params: { searchKey?: string, category?: string, pageSize?: number, pageIndex?: number }): Promise<{ userPartner: any[] }> {
    try {
      this.logger.silly('Get list userPartner DB Record');
      const query = {
        // category: new RegExp(`.*${params.category || ''}.*`, "i"),
        // name: new RegExp(`.*${params.searchKey || ''}.*`, "i"),
      };

      const limit = params.pageSize;
      const skip = params.pageIndex - 1;
      // const sort = [["name"]];
      const userPartnerList = await this.userPartnerModel
        .find(query)
        .skip(skip)
        .limit(limit)
        .populate({
          path: 'ownerUser',
          populate: {
            path: 'users',
          },
          select: 'name email'
        })
        .populate({
          path: 'partnerUser',
          populate: {
            path: 'users',
          },
          select: 'name email'
        })
        .sort({});

      // Rest of your code...

      const total = await this.userPartnerModel.find(query).count();


      // const userPartnerList = await this.userPartnerModel.find();
      return { userPartnerList, total } as any;
    }

    catch (e) {
      this.logger.error(e);
      throw e;
    }
  }
  public async CreateUserPartner(userPartnerInputDTO: IUserPartnerInputDTO): Promise<{ userPartner: IUserPartner }> {
    try {
      this.logger.silly('Creating userPartner db record');
      const userPartnerRecord = await this.userPartnerModel.create({
        ...userPartnerInputDTO,

      });

      if (!userPartnerRecord) {
        throw new Error('UserPartner cannot be created');
      }
      this.eventDispatcher.dispatch(events.userPartner.create, { userPartner: userPartnerRecord });

      /**
       * @TODO This is not the best way to deal with this
       * There should exist a 'Mapper' layer
       * that transforms data from layer to layer
       * but that's too over-engineering for now
       */
      const userPartner = userPartnerRecord.toObject();
      return { userPartner } as any;
    } catch (e) {
      this.logger.error(e);
      throw e;
    }
  }
  public async EditUserPartner(userPartnerInputDTO: IUserPartnerInputDTO): Promise<{ userPartner: IUserPartner }> {
    try {
      this.logger.silly('Edit userPartner db record');
      const { _id } = userPartnerInputDTO;
      if (_id) {
        const userPartnerRecord = await this.userPartnerModel.updateOne({
          _id
        }, {
          $set: {
            ...userPartnerInputDTO
          }
        })
        if (!userPartnerRecord) {
          throw new Error('UserPartner cannot be update');
        }
        console.log('userPartnerRecord:', userPartnerRecord)
        this.eventDispatcher.dispatch(events.userPartner.edit, { userPartner: userPartnerRecord });
        const userPartner = userPartnerRecord;
        return { userPartner } as any;
      }

    } catch (e) {
      this.logger.error(e);
      throw e;
    }
  }
  public async DeleteUserPartner(_id: string): Promise<{ userPartner: IUserPartner }> {
    try {
      this.logger.silly('Delete userPartner db record');
      if (_id) {
        const userPartnerRecord = await this.userPartnerModel.deleteOne({
          _id
        })
        if (!userPartnerRecord) {
          throw new Error('UserPartner cannot be deleted');
        }
        console.log('userPartnerRecord:', userPartnerRecord)
        this.eventDispatcher.dispatch(events.userPartner.edit, { userPartner: userPartnerRecord });
        const userPartner = userPartnerRecord;
        return { userPartner } as any;
      }

    } catch (e) {
      this.logger.error(e);
      throw e;
    }
  }
}
