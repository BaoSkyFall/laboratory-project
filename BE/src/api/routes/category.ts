import { Router, Request, Response, NextFunction } from 'express';
import middlewares from '../middlewares';
import mongoose from 'mongoose';
import { Container } from 'typedi';
import { Logger } from 'winston';
import { celebrate, Joi } from 'celebrate';
import CategoryService from '../../services/category';
import { ICategory, ICategoryInputDTO } from '../../interfaces/ICategory';
import { join } from 'path';
import { Helpers } from '../../config/helpers';
import { DEFINED_CODE } from '../../config/enum';


const route = Router();
export default (app: Router) => {
  app.use('/category', route);
  //Get Category List
  route.post('/list', middlewares.isAuth, middlewares.attachCurrentUser, async (req: Request, res: Response) => {
    const Logger: Logger = Container.get('logger');
    const categoryServiceInstance = Container.get(CategoryService);
    const category = await categoryServiceInstance.GetListCategory() as any
    if (!category) {
      return res.sendStatus(401);
    }
    return Helpers.response(res, DEFINED_CODE.GET_DATA_SUCCESS, category, { total: category?.length || 0, pageSize: 10, pageIndex: 1 })
  });
  route.post(
    '/create',
    celebrate({
      body: Joi.object({
        name: Joi.string().required(),
        code: Joi.string().required(),
      }),
    }),
    async (req: Request, res: Response, next: NextFunction) => {
      const logger: Logger = Container.get('logger');
      logger.debug('Calling Create Category endpoint with body: %o', req.body);
      try {
        const categoryServiceInstance = Container.get(CategoryService);
        const { category } = await categoryServiceInstance.CreateCategory(req.body as ICategoryInputDTO);
        return Helpers.response(res, DEFINED_CODE.CREATED_DATA_SUCCESS, category)
      } catch (e) {
        logger.error('🔥 error: %o', e);
        return next(e);
      }
    },
  );
  route.post(
    '/edit',
    celebrate({
      body: Joi.object({
        _id: Joi.string().required(),
        name: Joi.string().required(),
        code: Joi.string().required(),
      }),
    }),
    async (req: Request, res: Response, next: NextFunction) => {
      const logger: Logger = Container.get('logger');
      logger.debug('Calling Edit Category endpoint with body: %o', req.body);
      try {
        const categoryServiceInstance = Container.get(CategoryService);
        const { category } = await categoryServiceInstance.EditCategory(req.body as ICategoryInputDTO);
        return Helpers.response(res, DEFINED_CODE.INTERACT_DATA_SUCCESS, category)
      } catch (e) {
        logger.error('🔥 error: %o', e);
        return next(e);
      }
    },
  );
  route.post(
    '/delete',
    celebrate({
      body: Joi.object({
        _id: Joi.string().required()
      }),
    }),
    async (req: Request, res: Response, next: NextFunction) => {
      const logger: Logger = Container.get('logger');
      logger.debug('Calling Edit Category endpoint with body: %o', req.body);
      try {
        const categoryServiceInstance = Container.get(CategoryService);
        const { category } = await categoryServiceInstance.DeleteCategory(req.body);
        return Helpers.response(res, DEFINED_CODE.INTERACT_DATA_SUCCESS, category)
      } catch (e) {
        logger.error('🔥 error: %o', e);
        return next(e);
      }
    },
  );
};
