import express from 'express';
import StaffController from '../controller/staff'

const routes = express.Router();

const staffController = new StaffController();


routes.get('/staff',staffController.index);
routes.get('/staff/add',staffController.create);
routes.post('/staff/add',staffController.addStaff);
routes.get('/staff/update/:id',staffController.showFormUpdate);
routes.post('/staff/update/:id',staffController.update);
routes.get('/staff/:id/delete',staffController.delete);
routes.get('/staff/:id/info', staffController.infoUser);
routes.get('/staff/search',staffController.search);



export default routes;