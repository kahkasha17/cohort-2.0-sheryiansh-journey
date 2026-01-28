// Used for create server and config server file


const express = require("express");
const app=express();
app.use(express.json());


let notes=[];

app.post("/notes",(req,resp)=>{
    
    
    
    notes.push(req.body);
    resp.send(notes)

    
})
app.get("/notes",(req,resp)=>{
    
    resp.send(notes)

    
})


app.delete("/notes/:index",(req,resp)=>{
    delete notes[req.params.index];
    resp.send(notes)
})



app.patch("/notes/:index",(req,resp)=>{
    notes[req.params.index].description=req.body.description;
    resp.send("desc updated");
})



module.exports=app;