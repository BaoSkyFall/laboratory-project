import expressLoader from './express';
import dependencyInjectorLoader from './dependencyInjector';
import mongooseLoader from './mongoose';
import jobsLoader from './jobs';
import Logger from './logger';
//We have to import at least all the events once so they can be triggered
import './events';

export default async ({ expressApp }) => {
  const mongoConnection = await mongooseLoader();
  Logger.info('✌️ DB loaded and connected!');

  /**
   * WTF is going on here?
   *
   * We are injecting the mongoose models into the DI container.
   * I know this is controversial but will provide a lot of flexibility at the time
   * of writing unit tests, just go and check how beautiful they are!
   */

  const userModel = {
    name: 'userModel',
    // Notice the require syntax and the '.default'
    model: require('../models/user').default,
  };
  const doctorModel = {
    name: 'doctorModel',
    model: require('../models/doctor').default
  }
  const specialistModel = {
    name: 'specialistModel',
    model: require('../models/specialist').default
  }

  const levelDoctorModel = {
    name: 'levelDoctorModel',
    model: require('../models/levelDoctor').default
  }
  const unitCompanyModel = {
    name: 'unitCompanyModel',
    model: require('../models/unitCompany').default
  }

  const criteriaModel = {
    name: 'criteriaModel',
    model: require('../models/criteria').default
  }
  const criteriaSetModel = {
    name: 'criteriaSetModel',
    model: require('../models/criteria-set').default
  }
  const categoryModel = {
    name: 'categoryModel',
    model: require('../models/category').default
  }
  // It returns the agenda instance because it's needed in the subsequent loaders
  const { agenda } = await dependencyInjectorLoader({
    mongoConnection,
    models: [
      userModel,
      doctorModel,
      specialistModel,
      levelDoctorModel,
      unitCompanyModel,
      criteriaModel,
      criteriaSetModel,
      categoryModel
      // whateverModel
    ],
  });
  Logger.info('✌️ Dependency Injector loaded');

  await jobsLoader({ agenda });
  Logger.info('✌️ Jobs loaded');

  await expressLoader({ app: expressApp });
  Logger.info('✌️ Express loaded');
};
