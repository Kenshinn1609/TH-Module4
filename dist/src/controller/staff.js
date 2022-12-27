"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const staff_1 = __importDefault(require("../models/staff"));
const department_1 = __importDefault(require("../models/department"));
class StaffController {
    async index(req, res, next) {
        try {
            let staff = await staff_1.default.find().populate('department');
            res.render('list', {
                data: staff
            });
        }
        catch (err) {
            next(err);
        }
    }
    async create(req, res) {
        let department = await department_1.default.find();
        res.render('add', {
            data: department
        });
    }
    async addStaff(req, res) {
        try {
            console.log(req.body);
            await staff_1.default.create({
                name: req.body.name,
                age: req.body.age,
                code: req.body.code,
                department: req.body.department,
                salary: req.salary
            });
            res.redirect('/staff');
        }
        catch (err) {
            res.redirect('/staff/add');
        }
    }
    async showFormUpdate(req, res) {
        const staff = await staff_1.default.findOne({ _id: req.params.id });
        const department = await department_1.default.find();
        res.render("update", { data: staff, department: department });
    }
    async update(req, res, next) {
        try {
            const staff = await staff_1.default.findOne({ _id: req.params.id });
            staff.name = req.body.name;
            staff.age = req.body.age;
            staff.code = req.body.code;
            staff.department = req.body.department;
            staff.salary = req.body.salary;
            await staff.save();
            res.redirect('/staff');
        }
        catch (err) {
            next(err);
        }
    }
    async delete(req, res) {
        let id = req.params.id;
        await staff_1.default.deleteOne({ _id: id });
        res.redirect('/staff');
    }
    async infoUser(req, res) {
        let id = req.params.id;
        let data = await staff_1.default.findOne(({ _id: id }));
        res.render('info', {
            data: data
        });
        console.log(data);
    }
    async search(req, res, next) {
        try {
            let products = await staff_1.default.find({
                name: { $regex: req.query.keyword, $options: 'i' }
            });
            res.status(200).json(products);
        }
        catch (e) {
            res.json({
                'error': e.message
            });
        }
    }
}
exports.default = StaffController;
//# sourceMappingURL=staff.js.map