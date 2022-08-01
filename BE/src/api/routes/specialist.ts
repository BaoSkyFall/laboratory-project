import { Router, Request, Response, NextFunction } from 'express';
import middlewares from '../middlewares';
import mongoose from 'mongoose';
import { Container } from 'typedi';
import { Logger } from 'winston';
import { celebrate, Joi } from 'celebrate';
import SpecialistService from '@/services/specialist';
import { ISpecialist, ISpecialistInputDTO } from '@/interfaces/ISpecialist';
import { join } from 'path';
import { Helpers } from '../../config/helpers';
import { DEFINED_CODE } from '../../config/enum';


const route = Router();
export default (app: Router) => {
  app.use('/specialist', route);
  route.get('/list', middlewares.isAuth, middlewares.attachCurrentUser, async (req: Request, res: Response) => {
    const Logger: Logger = Container.get('logger');
    const specialistServiceInstance = Container.get(SpecialistService);
    const specialist = await specialistServiceInstance.GetListSpecialist()
    if (!specialist) {
      return res.sendStatus(401);
    }
    return Helpers.response(res, DEFINED_CODE.GET_DATA_SUCCESS, specialist, { total: specialist?.length || 0, pageSize: 10, pageIndex: 1 })
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
      logger.debug('Calling Create Specialist endpoint with body: %o', req.body);
      try {
        const specialistServiceInstance = Container.get(SpecialistService);
        const { specialist } = await specialistServiceInstance.CreateSpecialist(req.body as ISpecialistInputDTO);
        return Helpers.response(res, DEFINED_CODE.CREATED_DATA_SUCCESS, specialist)
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
      logger.debug('Calling Edit Specialist endpoint with body: %o', req.body);
      try {
        const specialistServiceInstance = Container.get(SpecialistService);
        const { specialist } = await specialistServiceInstance.EditSpecialist(req.body as ISpecialistInputDTO);
        return Helpers.response(res, DEFINED_CODE.INTERACT_DATA_SUCCESS, specialist)
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
      logger.debug('Calling Edit Specialist endpoint with body: %o', req.body);
      try {
        const specialistServiceInstance = Container.get(SpecialistService);
        const { specialist } = await specialistServiceInstance.DeleteSpecialist(req.body as ISpecialistInputDTO);
        return Helpers.response(res, DEFINED_CODE.INTERACT_DATA_SUCCESS, specialist)
      } catch (e) {
        logger.error('🔥 error: %o', e);
        return next(e);
      }
    },
  );
};
