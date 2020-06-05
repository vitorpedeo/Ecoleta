import express from 'express';
import { Joi, celebrate } from 'celebrate';

import upload from './config/multer';
import PointsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';

const pointsController = new PointsController();
const itemsController = new ItemsController();

const routes = express.Router();

routes.get('/items', itemsController.index);

routes.post(
  '/points',
  upload.single('image'),
  celebrate(
    {
      body: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().email().required(),
        whatsapp: Joi.number().required(),
        latitude: Joi.number().required(),
        longitude: Joi.number().required(),
        city: Joi.string().required(),
        uf: Joi.string().max(2).required(),
        items: Joi.string().required(),
      }),
    },
    { abortEarly: false }
  ),
  pointsController.create
);

routes.get('/points', pointsController.index);
routes.get('/points/:id', pointsController.show);

export default routes;
