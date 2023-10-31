// atlas password  anilkarikatti333 password:  8tUeMCibWuqYxxC3

// connection string :mongodb+srv://anilkarikatti333:<password>@cluster0.r5eqhsu.mongodb.net/?retryWrites=true&w=majority


const mongoose  = require("mongoose");

// cloud
// mongoose.connect(process.env.MONGO_URI,{
//     useNewUrlParser:true,
//     useUnifiedTopology:true
// })

mongoose.connect(process.env.LOCAL_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

let db = mongoose.connection;

db.on("error",console.error.bind(console,"connection error"))

db.once("open",()=>{
    console.log("DB Connected successfully");
})

module.exports = mongoose;