import * as mongoose from "mongoose";

mongoose.connect("mongodb+srv://kenshin:hoangdaica121@cluster0.am5uqky.mongodb.net/staff").catch(err =>{
    console.log(err);
});

module.exports = mongoose;