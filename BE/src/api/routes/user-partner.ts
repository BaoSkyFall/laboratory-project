import { Router, Request, Response, NextFunction } from 'express';
import middlewares from '../middlewares';
import mongoose from 'mongoose';
import { Container } from 'typedi';
import { Logger } from 'winston';
import { celebrate, Joi } from 'celebrate';
import { IUserPartner, IUserPartnerInputDTO } from '../../interfaces/IUserPartner';
import { join } from 'path';
import { Helpers } from '../../config/helpers';
import { DEFINED_CODE } from '../../config/enum';
import UserPartnerService from '../../services/user-partner';


const route = Router();
export default (app: Router) => {
  app.use('/userPartner', route);
  //Get UserPartner List
  route.post('/list', celebrate({
    body: Joi.object({
      searchKey: Joi.allow(),
      pageSize: Joi.number().required(),
      pageIndex: Joi.number().required(),
    }),
  }), middlewares.isAuth, middlewares.attachCurrentUser, async (req: Request, res: Response) => {
    const Logger: Logger = Container.get('logger');
    const userPartnerServiceInstance = Container.get(UserPartnerService);
    const userPartner = await userPartnerServiceInstance.GetListUserPartner(req.body) as any
    if (!userPartner) {
      return res.sendStatus(401);
    }
    return Helpers.response(res, DEFINED_CODE.GET_DATA_SUCCESS, userPartner.userPartnerList, { total: userPartner.total, pageSize: 10, pageIndex: 1 })
  });
  route.post(
    '/create',
    celebrate({
      body: Joi.object({
        name: Joi.string().required(),
        criteriaList: Joi.array().required()
      }),
    }),
    async (req: Request, res: Response, next: NextFunction) => {
      const logger: Logger = Container.get('logger');
      logger.debug('Calling Create UserPartner endpoint with body: %o', req.body);
      try {
        const userPartnerServiceInstance = Container.get(UserPartnerService);
        const { userPartner } = await userPartnerServiceInstance.CreateUserPartner(req.body as IUserPartnerInputDTO);
        return Helpers.response(res, DEFINED_CODE.CREATED_DATA_SUCCESS, userPartner)
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
        criteriaList: Joi.array().required()
      }),
    }),
    async (req: Request, res: Response, next: NextFunction) => {
      const logger: Logger = Container.get('logger');
      logger.debug('Calling Edit UserPartner endpoint with body: %o', req.body);
      try {
        const userPartnerServiceInstance = Container.get(UserPartnerService);
        const { userPartner } = await userPartnerServiceInstance.EditUserPartner(req.body as IUserPartnerInputDTO);
        return Helpers.response(res, DEFINED_CODE.INTERACT_DATA_SUCCESS, userPartner)
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
      logger.debug('Calling Edit UserPartner endpoint with body: %o', req.body);
      try {
        const userPartnerServiceInstance = Container.get(UserPartnerService);
        const { userPartner } = await userPartnerServiceInstance.DeleteUserPartner(req.body);
        return Helpers.response(res, DEFINED_CODE.INTERACT_DATA_SUCCESS, userPartner)
      } catch (e) {
        logger.error('🔥 error: %o', e);
        return next(e);
      }
    },
  );
};
