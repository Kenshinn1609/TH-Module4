"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require('../config/database');
const { Schema } = mongoose;
const staffSchema = new mongoose.Schema({
    name: String,
    code: String,
    age: Number,
    salary: String,
    department: {
        type: Schema.Types.ObjectId,
        ref: 'Department'
    }
});
const StaffSchema = mongoose.model('Staff', staffSchema);
exports.default = StaffSchema;
//# sourceMappingURL=staff.js.map