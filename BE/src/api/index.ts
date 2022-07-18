import { Router } from 'express';
import auth from './routes/auth';
import user from './routes/user';
import agendash from './routes/agendash';
import doctor from './routes/doctor';

// guaranteed to get dependencies
export default () => {
  const app = Router();
  auth(app);
  user(app);
  doctor(app);
  agendash(app);
  return app;
}
