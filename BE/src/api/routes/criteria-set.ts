import { Router, Request, Response, NextFunction } from 'express';
import middlewares from '../middlewares';
import mongoose from 'mongoose';
import { Container } from 'typedi';
import { Logger } from 'winston';
import { celebrate, Joi } from 'celebrate';
import { ICriteriaSet, ICriteriaSetInputDTO } from '../../interfaces/ICriteriaSet';
import { join } from 'path';
import { Helpers } from '../../config/helpers';
import { DEFINED_CODE } from '../../config/enum';
import CriteriaSetService from '../../services/criteria-set';


const route = Router();
export default (app: Router) => {
  app.use('/criteriaSet', route);
  //Get CriteriaSet List
  route.post('/list', celebrate({
    body: Joi.object({
      searchKey: Joi.allow(),
      pageSize: Joi.number().required(),
      pageIndex: Joi.number().required(),
    }),
  }), middlewares.isAuth, middlewares.attachCurrentUser, async (req: Request, res: Response) => {
    const Logger: Logger = Container.get('logger');
    const criteriaSetServiceInstance = Container.get(CriteriaSetService);
    const criteriaSet = await criteriaSetServiceInstance.GetListCriteriaSet(req.body) as any
    if (!criteriaSet) {
      return res.sendStatus(401);
    }
    return Helpers.response(res, DEFINED_CODE.GET_DATA_SUCCESS, criteriaSet.criteriaSetList, { total: criteriaSet.total, pageSize: 10, pageIndex: 1 })
  });
  route.post(
    '/create',
    celebrate({
      body: Joi.object({
        name: Joi.string().required(),
        category: Joi.string().required(),
        priceMaster: Joi.number().required(),
        referenceIndex: Joi.string()
      }),
    }),
    async (req: Request, res: Response, next: NextFunction) => {
      const logger: Logger = Container.get('logger');
      logger.debug('Calling Create CriteriaSet endpoint with body: %o', req.body);
      try {
        const criteriaSetServiceInstance = Container.get(CriteriaSetService);
        const { criteriaSet } = await criteriaSetServiceInstance.CreateCriteriaSet(req.body as ICriteriaSetInputDTO);
        return Helpers.response(res, DEFINED_CODE.CREATED_DATA_SUCCESS, criteriaSet)
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
        priceMaster: Joi.number().required(),
        referenceIndex: Joi.string()
      }),
    }),
    async (req: Request, res: Response, next: NextFunction) => {
      const logger: Logger = Container.get('logger');
      logger.debug('Calling Edit CriteriaSet endpoint with body: %o', req.body);
      try {
        const criteriaSetServiceInstance = Container.get(CriteriaSetService);
        const { criteriaSet } = await criteriaSetServiceInstance.EditCriteriaSet(req.body as ICriteriaSetInputDTO);
        return Helpers.response(res, DEFINED_CODE.INTERACT_DATA_SUCCESS, criteriaSet)
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
      logger.debug('Calling Edit CriteriaSet endpoint with body: %o', req.body);
      try {
        const criteriaSetServiceInstance = Container.get(CriteriaSetService);
        const { criteriaSet } = await criteriaSetServiceInstance.DeleteCriteriaSet(req.body);
        return Helpers.response(res, DEFINED_CODE.INTERACT_DATA_SUCCESS, criteriaSet)
      } catch (e) {
        logger.error('🔥 error: %o', e);
        return next(e);
      }
    },
  );
};
