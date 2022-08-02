import { Router, Request, Response, NextFunction } from 'express';
import middlewares from '../middlewares';
import mongoose from 'mongoose';
import { Container } from 'typedi';
import { Logger } from 'winston';
import { celebrate, Joi } from 'celebrate';
import LevelDoctorService from '@/services/levelDoctor';
import { ILevelDoctor, ILevelDoctorInputDTO } from '@/interfaces/ILevelDoctor';
import { join } from 'path';
import { Helpers } from '../../config/helpers';
import { DEFINED_CODE } from '../../config/enum';


const route = Router();
export default (app: Router) => {
  app.use('/levelDoctor', route);
  route.post('/list', middlewares.isAuth, middlewares.attachCurrentUser, async (req: Request, res: Response) => {
    const Logger: Logger = Container.get('logger');
    const levelDoctorServiceInstance = Container.get(LevelDoctorService);
    const levelDoctor = await levelDoctorServiceInstance.GetListLevelDoctor()
    if (!levelDoctor) {
      return res.sendStatus(401);
    }
    return Helpers.response(res, DEFINED_CODE.GET_DATA_SUCCESS, levelDoctor, { total: levelDoctor?.length || 0, pageSize: 10, pageIndex: 1 })
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
      logger.debug('Calling Create LevelDoctor endpoint with body: %o', req.body);
      try {
        const levelDoctorServiceInstance = Container.get(LevelDoctorService);
        const { levelDoctor } = await levelDoctorServiceInstance.CreateLevelDoctor(req.body as ILevelDoctorInputDTO);
        return Helpers.response(res, DEFINED_CODE.CREATED_DATA_SUCCESS, levelDoctor)
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
      logger.debug('Calling Edit LevelDoctor endpoint with body: %o', req.body);
      try {
        const levelDoctorServiceInstance = Container.get(LevelDoctorService);
        const { levelDoctor } = await levelDoctorServiceInstance.EditLevelDoctor(req.body as ILevelDoctorInputDTO);
        return Helpers.response(res, DEFINED_CODE.INTERACT_DATA_SUCCESS, levelDoctor)
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
      logger.debug('Calling Edit LevelDoctor endpoint with body: %o', req.body);
      try {
        const levelDoctorServiceInstance = Container.get(LevelDoctorService);
        const { levelDoctor } = await levelDoctorServiceInstance.DeleteLevelDoctor(req.body as ILevelDoctorInputDTO);
        return Helpers.response(res, DEFINED_CODE.INTERACT_DATA_SUCCESS, levelDoctor)
      } catch (e) {
        logger.error('🔥 error: %o', e);
        return next(e);
      }
    },
  );
};
