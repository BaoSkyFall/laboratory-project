import { Router, Request, Response, NextFunction } from 'express';
import middlewares from '../middlewares';
import mongoose from 'mongoose';
import { Container } from 'typedi';
import { Logger } from 'winston';
import { celebrate, Joi } from 'celebrate';
import DoctorService from '@/services/doctor';
import { IDoctor, IDoctorInputDTO } from '@/interfaces/IDoctor';

const route = Router();
const specialistModel = {
  name: 'specialistModel',
  model: require('../../models/specialist').default
}

export default (app: Router) => {
  app.use('/doctor', route);
  route.get('/list', middlewares.isAuth, middlewares.attachCurrentUser, async (req: Request, res: Response) => {
    const Logger: Logger = Container.get('logger');
    const DoctorModel = Container.get('doctorModel') as mongoose.Model<IDoctor & mongoose.Document>;
    const doctorServiceInstance = Container.get(DoctorService);
    const doctorList = await doctorServiceInstance.GetListDoctor()
    if (!doctorList) {
      return res.sendStatus(401);
    }
    console.log('doctorList:', doctorList);
    return res.json({ doctorList: doctorList }).status(200);
  });
  route.post(
    '/create',
    celebrate({
      body: Joi.object({
        name: Joi.string().required(),
        email: Joi.string().required(),
        level: Joi.string().required(),
        apartment: Joi.string().required(),
        dob: Joi.number().required()

      }),
    }),
    async (req: Request, res: Response, next: NextFunction) => {
      const logger: Logger = Container.get('logger');
      logger.debug('Calling Create Doctor endpoint with body: %o', req.body);
      try {
        const doctorServiceInstance = Container.get(DoctorService);
        const { doctor } = await doctorServiceInstance.CreateDoctor(req.body as IDoctorInputDTO);
        return res.status(201).json({ doctor });
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
        level: Joi.string().required(),
        apartment: Joi.string().required(),
        dob: Joi.number().required()

      }),
    }),
    async (req: Request, res: Response, next: NextFunction) => {
      const logger: Logger = Container.get('logger');
      logger.debug('Calling Edit Doctor endpoint with body: %o', req.body);
      try {
        const doctorServiceInstance = Container.get(DoctorService);
        const { doctor } = await doctorServiceInstance.EditDoctor(req.body as IDoctorInputDTO);
        return res.status(201).json({ doctor });
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
        return res.status(201).json({ doctor });
      } catch (e) {
        logger.error('🔥 error: %o', e);
        return next(e);
      }
    },
  );
};
