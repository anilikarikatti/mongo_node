
const { version } = require("mongoose");
const mongoose = require("../../dbconfig")

let {Schema,model} = mongoose;

// _id : Number, 
let SemsSchema = new Schema({
    
    sem:{
    type: Number,
    required:true , 
    index:{
        unique:true,
        dropDups:true
    }
}  ,
   

} , {versionKey:false})
const Sems = model('Sems', SemsSchema);


// SemsSchema.createIndex({sem:1},{unique:true})





let subjects = new Schema({
    sem:{
        type:Schema.Types.ObjectId,
        ref:Sems
    } ,
    subject_name :String,



})
const Subject = model('Subject',subjects);


let studentSchema =new  Schema({
    roll_no: Number,
    name: String,   
    year: Number,
    studsem : {
        type:Schema.Types.ObjectId,
        ref:Sems
    }
},{versionKey:false})

// studentSchema.virtual("fname").get(function(){
//     return this.name + this._id.toString().slice(0,3);
// })

// studentSchema.set("toJSON",{
//     virtuals:true
// })


// studentSchema.virtual('id').get(function () {
//     return this._id.toHexString();
// });

// studentSchema.set('toJSON', {
//     virtuals: true,
// });


const Student = model('Student', studentSchema);


module.exports = {Student,Subject,Sems};
