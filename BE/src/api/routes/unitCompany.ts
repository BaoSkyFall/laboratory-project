import { Router, Request, Response, NextFunction } from 'express';
import middlewares from '../middlewares';
import mongoose from 'mongoose';
import { Container } from 'typedi';
import { Logger } from 'winston';
import { celebrate, Joi } from 'celebrate';
import UnitCompanyService from '../../services/unitCompany';
import { IUnitCompany, IUnitCompanyInputDTO } from '../../interfaces/IUnitCompany';
import { join } from 'path';
import { Helpers } from '../../config/helpers';
import { DEFINED_CODE } from '../../config/enum';


const route = Router();
export default (app: Router) => {
  app.use('/unitCompany', route);
  route.post('/list', middlewares.isAuth, middlewares.attachCurrentUser, async (req: Request, res: Response) => {
    const Logger: Logger = Container.get('logger');
    const unitCompanyServiceInstance = Container.get(UnitCompanyService);
    const unitCompany = await unitCompanyServiceInstance.GetListUnitCompany() as any
    if (!unitCompany) {
      return res.sendStatus(401);
    }
    return Helpers.response(res, DEFINED_CODE.GET_DATA_SUCCESS, unitCompany, { total: unitCompany?.length || 0, pageSize: 10, pageIndex: 1 })
  });
  route.post(
    '/create',
    celebrate({
      body: Joi.object({
        name: Joi.string().required(),
        address: Joi.string().required(),
      }),
    }),
    async (req: Request, res: Response, next: NextFunction) => {
      const logger: Logger = Container.get('logger');
      logger.debug('Calling Create UnitCompany endpoint with body: %o', req.body);
      try {
        const unitCompanyServiceInstance = Container.get(UnitCompanyService);
        const { unitCompany } = await unitCompanyServiceInstance.CreateUnitCompany(req.body as IUnitCompanyInputDTO);
        return Helpers.response(res, DEFINED_CODE.CREATED_DATA_SUCCESS, unitCompany)
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
        address: Joi.string().required(),
      }),
    }),
    async (req: Request, res: Response, next: NextFunction) => {
      const logger: Logger = Container.get('logger');
      logger.debug('Calling Edit UnitCompany endpoint with body: %o', req.body);
      try {
        const unitCompanyServiceInstance = Container.get(UnitCompanyService);
        const { unitCompany } = await unitCompanyServiceInstance.EditUnitCompany(req.body as IUnitCompanyInputDTO);
        return Helpers.response(res, DEFINED_CODE.INTERACT_DATA_SUCCESS, unitCompany)
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
      logger.debug('Calling Edit UnitCompany endpoint with body: %o', req.body);
      try {
        const unitCompanyServiceInstance = Container.get(UnitCompanyService);
        const { unitCompany } = await unitCompanyServiceInstance.DeleteUnitCompany(req.body);
        return Helpers.response(res, DEFINED_CODE.INTERACT_DATA_SUCCESS, unitCompany)
      } catch (e) {
        logger.error('🔥 error: %o', e);
        return next(e);
      }
    },
  );
};
