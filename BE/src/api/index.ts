import { Router } from 'express';
import auth from './routes/auth';
import user from './routes/user';
import agendash from './routes/agendash';
import doctor from './routes/doctor';
import specialist from './routes/specialist';
import levelDoctor from './routes/levelDoctor';



// guaranteed to get dependencies
export default () => {
  const app = Router();
  auth(app);
  user(app);
  doctor(app);
  specialist(app);
  levelDoctor(app);
  agendash(app);
  return app;
}
