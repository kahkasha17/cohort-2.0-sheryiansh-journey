const express=require("express");
const app=express()

app.get('/',(req,res)=>{
    res.send("Hello World")
})
app.get('/about',(req,res)=>{
    res.send("This is About Page")
})
app.get('/service',(req,res)=>{
    res.send("This is Service Page")
})

app.listen(3000)