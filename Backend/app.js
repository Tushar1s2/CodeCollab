require("dotenv").config();

const express=require("express");
const mongoose=require("mongoose");
const cors=require("cors");
const passport=require("passport");
const cookieParser=require("cookie-parser");
const userRoute=require("./Routes/users");
const mainRoute=require("./Routes/main");
require("./config/passport");

const app=express();
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}));
app.use(express.json());
app.use(cookieParser());
app.use(passport.initialize());

// Routes
app.use("/",userRoute);
app.use("/",mainRoute);

async function main(){
    await mongoose.connect(process.env.MONGO_URL)
    console.log("DatabaseConnected");
    app.listen(process.env.PORT,()=>{
        console.log("Listening to the port");
    })
}
main();




