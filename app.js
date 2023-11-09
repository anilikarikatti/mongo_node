const express = require("express");


const app = express();


require("dotenv").config();

const morgan = require("morgan");

app.use(morgan('dev'))

app.use(express.json())

app.use(express.urlencoded({extended:true}))

const port = process.env.PORT || 3000;

const user  = require("./routes/login")

// console.log(user);


app.use("/user",user)

// app.post("/user",(req,res)=>{
//     console.log(req.body);
//     console.log("hello");
//     res.json("hello")
// })


app.listen(port,()=>{
    console.log(`listening url http://localhost:${port}`);
})

