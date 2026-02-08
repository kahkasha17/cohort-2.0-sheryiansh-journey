

require("dotenv").config();

const connectToDB=require("./src/config/database")
connectToDB();
const app=require("./src/app")

app.listen(3000,()=>{
    console.log("Server started")
})