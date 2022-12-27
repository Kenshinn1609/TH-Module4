import StaffModel from '../models/staff';
import DepartmentModel from '../models/department';

class StaffController{
    async index(req : any ,res : any,next) {
        try {
            let staff = await StaffModel.find().populate('department');
            res.render('list',{
                data: staff
            })
        }
        catch (err){
            next(err);
        }
    }

    async create(req : any ,res : any){
        let department = await DepartmentModel.find();
        res.render('add',{
            data: department
        });
    }

    async addStaff(req : any , res : any){
        try{
            console.log(req.body)
         await StaffModel.create({
             name : req.body.name,
             age : req.body.age,
             code : req.body.code,
             department: req.body.department,
             salary : req.salary

         })
            res.redirect('/staff');
        }
        catch (err){
            res.redirect('/staff/add');
        }
    }
    async showFormUpdate(req : any , res : any){
        const staff = await StaffModel.findOne({_id: req.params.id});
        const department = await DepartmentModel.find();
        res.render("update", {data: staff ,department:department});

    }
    async update(req: any,res : any,next) {
        try{
            const staff = await StaffModel.findOne( {_id : req.params.id});

            staff.name = req.body.name;
            staff.age = req.body.age;
            staff.code = req.body.code;
            staff.department = req.body.department;
            staff.salary = req.body.salary;
            await staff.save();
            res.redirect('/staff')

        }
        catch(err){
            next(err);

        }
    }
    async delete(req : any,res : any){

        let id = req.params.id;
        await StaffModel.deleteOne({_id : id},)
        res.redirect('/staff');
    }
    async infoUser(req : any, res : any){

        let id = req.params.id;
        let data = await StaffModel.findOne(({_id : id}))
        res.render('info',{
            data : data
        })
        console.log(data)
    }
    async search(req, res, next) {
        try {
            let products = await StaffModel.find(
                {
                    name: {$regex: req.query.keyword, $options: 'i'}
                }
            )

            res.status(200).json(products)
        } catch (e) {
            res.json({
                'error': e.message
            })
        }

    }
}





export default StaffController;