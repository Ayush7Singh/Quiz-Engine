const express=require("express");
const app=express();
const cookieParser=require("cookie-parser")
const errorMiddleware=require("./middleware/error")
const bodyParser=require("body-parser");
const fileupload=require("express-fileupload");
const dotenv=require("dotenv");


dotenv.config({path:'config/config.env'});

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended:true,parameterLimit:100000,limit:'500mb'}));
app.use(fileupload());

//route imports
const product=require("./routes/route");
const user=require("./routes/userroute");


app.use("/api/v1",product);
app.use("/api/v1",user);


//middleware for error
app.use(errorMiddleware);

module.exports=app