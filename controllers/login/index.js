const {Student,Subject,Sems} = require("./queries")

const mongoose = require("../../dbconfig")


function login(req,res){
    let {userName,password} = req.body;

    try{

    }
    catch{

    }
}

async function insertData(req,res){
    console.log("hello insertData");
    try{

        // let {name,roll_no,year,subjects} = req.body;

        let {studsem} = req.body;

        // console.log(Subject_name,sem);
        
        let sems = await getS({sem:studsem});
        console.log(sems);

        req.body.studsem = sems;

        console.log(req.body);
        
        const stud =  new Student(req.body);

        let resp = await stud.save();

        console.log(resp);

        res.json(resp)
    }
    catch(err){
        console.log("cant find");
        res.send(err)
    }
}




async function getData(req,res){
    try{
        // console.log(Student.find({}));

        console.log(req.params.id);

         let stud =await Student.findOne({studsem:req.params.id}).populate('studsem');





            // console.log(stud.populated('sem'))

        //  console.log(stud.studsem).sem;

        //  console.log(data,"data")

        // let data = await Student.aggregate([{
        //     $lookup:{
        //         from:"sems",
                
        //         as:"sem",
        //         let :{studsem:"$_id"},
        //         pipeline:[
        //             {$match:{$expr:{$eq:['$studsem','$_id']}}},
        //             {
        //                 $project:{
        //                     _id:1,
        //                     name:1
        //                 }
        //             }
        //         ]
        //     }
        // }])
        
        // console.log(data);
      res.json(stud.studsem)
    }
    catch(err){
        console.log("cant find");
        res.send(err)
    }
}


async function insertSubjects(req,res){
    try{
        let {sem,Subject_name} = req.body;

        console.log(Subject_name,sem);
        
        let sems = await getS({sem:sem});
        console.log(sems);

        const data = new Subject({
            sem:sems,
            subject_name:Subject_name
        });
        let resp = await data.save();
        res.status(200).json("inserted successfully");
    }
    catch{
        res.status(400).json("not inserted");

    }
}


async function getSubjects(req,res){
    try{
     
        let result = await Subject.aggregate([{
            $lookup:{
                from:"sems",
                localField:"sem",
                foreignField:"_id"
            }
        }]).pretty()

        console.log(result);

        // res.send(result)
       
    }
    catch(err){
        console.log("cant find");
        res.send(err)
    }
}


// sems


async function insertSems(req,res){
    try{
        const data = new Sems(req.body);
        let resp = await data.save();
        res.status(200).json("inserted successfully");
    }
    catch{
        res.status(400).json("not inserted");

    }
}


async function getSems(req,res){
    try{
        // console.log(Student.find({}));
        console.log("called");
         let data =await Sems.find({})

         console.log(data)
         res.json(data)
    }
    catch(err){
        console.log("cant find");
        res.send(err)
    }
}


async function getS(condition){
    try{
        // console.log(Student.find({}));
        console.log("called");
         let data =await Sems.find(condition)

         let singleRow = data[0];

         let {_id} = singleRow;
         console.log(_id);
        //  console.log(data)
         return _id;;
    }
    catch(err){
        console.log("cant find");
        // res.send(err)
        return err;
    }
}

function name(name){
    console.log("hello " + name);
}
module.exports = {login,insertData,getData,insertSubjects,getSubjects,insertSems,getSems}