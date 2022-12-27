const mongoose = require('../config/database');


const {Schema} = mongoose;

const staffSchema = new mongoose.Schema({
    name : String,
    code : String,
     age : Number,
    salary : String,

    department : {
        type: Schema.Types.ObjectId,
         ref : 'Department'
    }
});

const StaffSchema = mongoose.model('Staff', staffSchema);

export default StaffSchema;