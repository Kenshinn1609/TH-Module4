"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require('../config/database');
const { Schema } = mongoose;
const userSchema = new mongoose.Schema({
    name: String,
    code: String,
    age: Number,
    Department: {
        type: Schema.Types.ObjectId,
        ref: 'Department'
    }
});
const UserSchema = mongoose.model('User', userSchema);
exports.default = UserSchema;
//# sourceMappingURL=user.js.map