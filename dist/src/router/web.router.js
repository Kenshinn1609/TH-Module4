"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const staff_1 = __importDefault(require("../controller/staff"));
const routes = express_1.default.Router();
const staffController = new staff_1.default();
routes.get('/staff', staffController.index);
routes.get('/staff/add', staffController.create);
routes.post('/staff/add', staffController.addStaff);
routes.get('/staff/update/:id', staffController.showFormUpdate);
routes.post('/staff/update/:id', staffController.update);
routes.get('/staff/:id/delete', staffController.delete);
routes.get('/staff/:id/info', staffController.infoUser);
routes.get('/staff/search', staffController.search);
exports.default = routes;
//# sourceMappingURL=web.router.js.map