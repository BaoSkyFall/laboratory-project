import { Router } from 'express';
import auth from './routes/auth';
import user from './routes/user';
import agendash from './routes/agendash';
import doctor from './routes/doctor';
import specialist from './routes/specialist';
import levelDoctor from './routes/levelDoctor';
import unitCompany from './routes/unitCompany';
import criteria from './routes/criteria';
import category from './routes/category';
import criteriaSet from './routes/criteria-set';


// guaranteed to get dependencies
export default () => {
  const app = Router();
  auth(app);
  user(app);
  doctor(app);
  specialist(app);
  levelDoctor(app);
  unitCompany(app);
  category(app);
  criteria(app);
  criteriaSet(app);
  agendash(app);
  return app;
}
