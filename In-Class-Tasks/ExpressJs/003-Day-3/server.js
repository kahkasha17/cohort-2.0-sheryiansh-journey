const express= require("express");

const app=express();


// app.get('/',(req,resp)=>{
//     resp.send("Hello Express")
// })
// app.get('/about',(req,resp)=>{
//     resp.send("About Page")
// })

app.use(express.json())

let notes=[];

app.post('/notes',(req,resp)=>{
    console.log(req.body)
    resp.send("Post method started")
})

app.get('/notes',(req,resp)=>{
notes.push(req.body);
resp.send(notes)
})



app.listen(3000,()=>{
    console.log("Server Started");
})