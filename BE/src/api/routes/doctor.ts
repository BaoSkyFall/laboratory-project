import { Router, Request, Response } from 'express';
import middlewares from '../middlewares';
import mongoose from 'mongoose';
import { IDoctor } from '@/interfaces/IDoctor';
import { Container } from 'typedi';
import { Logger } from 'winston';

const route = Router();

export default (app: Router) => {
  app.use('/doctor', route);

  route.get('/list', middlewares.isAuth, middlewares.attachCurrentUser, async (req: Request, res: Response) => {
    const Logger: Logger = Container.get('logger');
    const DoctorModel = Container.get('doctorModel') as mongoose.Model<IDoctor & mongoose.Document>;
    const doctorList = await DoctorModel.find();
    if (!doctorList) {
      return res.sendStatus(401);
    }
    console.log('doctorList:', doctorList);
    return res.json({ doctorList: doctorList }).status(200);
  });
};
