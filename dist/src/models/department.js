"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require('../config/database');
const departmentSchema = new mongoose.Schema({
    name: String,
});
const DepartmentModel = mongoose.model('Department', departmentSchema);
exports.default = DepartmentModel;
//# sourceMappingURL=department.js.map