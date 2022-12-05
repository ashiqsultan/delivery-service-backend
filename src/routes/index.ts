import { Router } from 'express';
import verifyJwt from '../middleware/verifyJwt';
import * as organization from '../controller/organization';
import * as user from '../controller/user';
import * as shipment from '../controller/shipment';
import * as deliveryAssociate from '../controller/deliveryAssociate';
import * as auth from '../controller/auth';
import { pong } from '../controller/ping';

let routes = Router();

/**
 * Health check route.
 * Always returns 200 OK
 */
routes.get('/ping', pong);

// login route
// routes.post('/signup', user.createUser);
routes.post('/auth/login', auth.login);

//deliveryAssociate
routes.get('/delivery-associate/:id', deliveryAssociate.getDAById);
routes.post('/delivery-associate', deliveryAssociate.createDeliveryAssociate);

// Shipment
routes.patch('/shipment/:id/delivery-associate', shipment.patchDeliveryAssociate);
routes.patch('/shipment/:id/status', shipment.patchStatus);

// Auth middleware
routes.use(verifyJwt);

/**
 * Auth Routes
 */
// organization Routes
routes.get('/organization/:id', organization.findOrgById);
routes.post('/organization', organization.createOrg);

//user routes
routes.get('/user', user.getMe);
routes.get('/user/:userId', user.getOne);
routes.delete('/user/:userId', user.deleteOne);

//shipment
routes.post('/shipment', shipment.createShipment);

export default routes;
