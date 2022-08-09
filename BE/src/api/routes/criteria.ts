import { Router, Request, Response, NextFunction } from 'express';
import middlewares from '../middlewares';
import mongoose from 'mongoose';
import { Container } from 'typedi';
import { Logger } from 'winston';
import { celebrate, Joi } from 'celebrate';
import CriteriaService from '../../services/criteria';
import { ICriteria, ICriteriaInputDTO } from '../../interfaces/ICriteria';
import { join } from 'path';
import { Helpers } from '../../config/helpers';
import { DEFINED_CODE } from '../../config/enum';


const route = Router();
export default (app: Router) => {
  app.use('/criteria', route);
  //Get Criteria List
  route.post('/list', middlewares.isAuth, middlewares.attachCurrentUser, async (req: Request, res: Response) => {
    const Logger: Logger = Container.get('logger');
    const criteriaServiceInstance = Container.get(CriteriaService);
    const criteria = await criteriaServiceInstance.GetListCriteria() as any
    if (!criteria) {
      return res.sendStatus(401);
    }
    return Helpers.response(res, DEFINED_CODE.GET_DATA_SUCCESS, criteria, { total: criteria?.length || 0, pageSize: 10, pageIndex: 1 })
  });
  route.post(
    '/create',
    celebrate({
      body: Joi.object({
        name: Joi.string().required(),
        category: Joi.string().required(),
        priceMaster: Joi.number().required()
      }),
    }),
    async (req: Request, res: Response, next: NextFunction) => {
      const logger: Logger = Container.get('logger');
      logger.debug('Calling Create Criteria endpoint with body: %o', req.body);
      try {
        const criteriaServiceInstance = Container.get(CriteriaService);
        const { criteria } = await criteriaServiceInstance.CreateCriteria(req.body as ICriteriaInputDTO);
        return Helpers.response(res, DEFINED_CODE.CREATED_DATA_SUCCESS, criteria)
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
        category: Joi.string().required(),
        priceMaster: Joi.number().required()
      }),
    }),
    async (req: Request, res: Response, next: NextFunction) => {
      const logger: Logger = Container.get('logger');
      logger.debug('Calling Edit Criteria endpoint with body: %o', req.body);
      try {
        const criteriaServiceInstance = Container.get(CriteriaService);
        const { criteria } = await criteriaServiceInstance.EditCriteria(req.body as ICriteriaInputDTO);
        return Helpers.response(res, DEFINED_CODE.INTERACT_DATA_SUCCESS, criteria)
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
      logger.debug('Calling Edit Criteria endpoint with body: %o', req.body);
      try {
        const criteriaServiceInstance = Container.get(CriteriaService);
        const { criteria } = await criteriaServiceInstance.DeleteCriteria(req.body);
        return Helpers.response(res, DEFINED_CODE.INTERACT_DATA_SUCCESS, criteria)
      } catch (e) {
        logger.error('🔥 error: %o', e);
        return next(e);
      }
    },
  );
};
