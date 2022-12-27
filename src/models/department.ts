const mongoose = require('../config/database');

const departmentSchema = new mongoose.Schema({
    name : String,
})

const DepartmentModel = mongoose.model('Department',departmentSchema)

export default DepartmentModel;