import { Service, Inject } from 'typedi';
import jwt from 'jsonwebtoken';
import MailerService from './mailer';
import argon2 from 'argon2';
import { randomBytes } from 'crypto';
import { ICategory, ICategoryInputDTO } from '../interfaces/ICategory';
import { EventDispatcher, EventDispatcherInterface } from '../decorators/eventDispatcher';
import events from '../subscribers/events';

@Service()
export default class CategoryService {
  constructor(
    @Inject('categoryModel') private categoryModel: Models.CategoryModel,
    private mailer: MailerService,
    @Inject('logger') private logger,
    @EventDispatcher() private eventDispatcher: EventDispatcherInterface,
  ) {
  }
  public async GetListCategory(): Promise<{ category: any[] }> {
    try {
      this.logger.silly('Get list category DB Record');
      const sort = [["name"]];
      const categoryList = await this.categoryModel.find().populate('category').sort(sort)

      // const categoryList = await this.categoryModel.find();
      return categoryList as any;
    }

    catch (e) {
      this.logger.error(e);
      throw e;
    }
  }
  public async CreateCategory(categoryInputDTO: ICategoryInputDTO): Promise<{ category: ICategory }> {
    try {
      this.logger.silly('Creating category db record');
      const categoryRecord = await this.categoryModel.create({
        ...categoryInputDTO,

      });

      if (!categoryRecord) {
        throw new Error('Category cannot be created');
      }
      this.eventDispatcher.dispatch(events.category.create, { category: categoryRecord });

      /**
       * @TODO This is not the best way to deal with this
       * There should exist a 'Mapper' layer
       * that transforms data from layer to layer
       * but that's too over-engineering for now
       */
      const category = categoryRecord.toObject();
      return { category } as any;
    } catch (e) {
      this.logger.error(e);
      throw e;
    }
  }
  public async EditCategory(categoryInputDTO: ICategoryInputDTO): Promise<{ category: ICategory }> {
    try {
      this.logger.silly('Edit category db record');
      const { _id } = categoryInputDTO;
      if (_id) {
        const categoryRecord = await this.categoryModel.updateOne({
          _id
        }, {
          $set: {
            ...categoryInputDTO
          }
        })
        if (!categoryRecord) {
          throw new Error('Category cannot be update');
        }
        console.log('categoryRecord:', categoryRecord)
        this.eventDispatcher.dispatch(events.category.edit, { category: categoryRecord });
        const category = categoryRecord;
        return { category } as any;
      }

    } catch (e) {
      this.logger.error(e);
      throw e;
    }
  }
  public async DeleteCategory(_id: string): Promise<{ category: ICategory }> {
    try {
      this.logger.silly('Delete category db record');
      if (_id) {
        const categoryRecord = await this.categoryModel.deleteOne({
          _id
        })
        if (!categoryRecord) {
          throw new Error('Category cannot be deleted');
        }
        console.log('categoryRecord:', categoryRecord)
        this.eventDispatcher.dispatch(events.category.edit, { category: categoryRecord });
        const category = categoryRecord;
        return { category } as any;
      }

    } catch (e) {
      this.logger.error(e);
      throw e;
    }
  }
}
