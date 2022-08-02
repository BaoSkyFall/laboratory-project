import { Router, Request, Response, NextFunction } from 'express';
import middlewares from '../middlewares';
import mongoose from 'mongoose';
import { Container } from 'typedi';
import { Logger } from 'winston';
import { celebrate, Joi } from 'celebrate';
import DoctorService from '@/services/doctor';
import { IDoctor, IDoctorInputDTO } from '@/interfaces/IDoctor';
import { join } from 'path';
import { Helpers } from '../../config/helpers';
import { DEFINED_CODE } from '../../config/enum';


const route = Router();
const specialistModel = {
  name: 'specialistModel',
  model: require('../../models/specialist').default
}

export default (app: Router) => {
  app.use('/doctor', route);
  route.post('/list', middlewares.isAuth, middlewares.attachCurrentUser, async (req: Request, res: Response) => {
    const Logger: Logger = Container.get('logger');
    const doctorServiceInstance = Container.get(DoctorService);
    const doctorList = await doctorServiceInstance.GetListDoctor()
    if (!doctorList) {
      return res.sendStatus(401);
    }
    return Helpers.response(res, DEFINED_CODE.GET_DATA_SUCCESS, doctorList, { total: doctorList.length || 0, pageSize: 10, pageIndex: 1 })
  });
  route.post(
    '/create',
    celebrate({
      body: Joi.object({
        name: Joi.string().required(),
        email: Joi.string().required(),
        phoneNumber: Joi.string().trim(),
        dob: Joi.number().required(),
        gender: Joi.boolean().required(),
        specialist: Joi.string().required(),
        levelDoctor: Joi.string().required(),
      }),
    }),
    async (req: Request, res: Response, next: NextFunction) => {
      const logger: Logger = Container.get('logger');
      logger.debug('Calling Create Doctor endpoint with body: %o', req.body);
      try {
        const doctorServiceInstance = Container.get(DoctorService);
        const { doctor } = await doctorServiceInstance.CreateDoctor(req.body as IDoctorInputDTO);
        return Helpers.response(res, DEFINED_CODE.CREATED_DATA_SUCCESS, doctor)
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
        email: Joi.string().required(),
        phoneNumber: Joi.string().required(),
        gender: Joi.boolean().required(),
        dob: Joi.number().required(),
        specialist: Joi.string().required(),
        levelDoctor: Joi.string().required(),

      }),
    }),
    async (req: Request, res: Response, next: NextFunction) => {
      const logger: Logger = Container.get('logger');
      logger.debug('Calling Edit Doctor endpoint with body: %o', req.body);
      try {
        const doctorServiceInstance = Container.get(DoctorService);
        const { doctor } = await doctorServiceInstance.EditDoctor(req.body as IDoctorInputDTO);
        return Helpers.response(res, DEFINED_CODE.INTERACT_DATA_SUCCESS, doctor)
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
      logger.debug('Calling Edit Doctor endpoint with body: %o', req.body);
      try {
        const doctorServiceInstance = Container.get(DoctorService);
        const { doctor } = await doctorServiceInstance.DeleteDoctor(req.body as IDoctorInputDTO);
        return Helpers.response(res, DEFINED_CODE.INTERACT_DATA_SUCCESS, doctor)
      } catch (e) {
        logger.error('🔥 error: %o', e);
        return next(e);
      }
    },
  );
};
