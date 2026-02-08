const express=require("express");
const noteModel=require("./models/notes.model")
const app=express();
app.use(express.json());

//API-Post-api/notes 
// req.body-title,description

app.post("/api/notes", async(req,resp)=>{
    const {title,description}=req.body;
    const note= await noteModel.create({
        title,description
    })

    resp.status(201).json({
        message:"note added successfully",
        note
    })
})

app.get("/api/notes",async(req,resp)=>{
    const notes=await noteModel.find()

    resp.status(200).json({
        message:"notes fetch successfully",
        notes
    })
})

app.delete("/api/notes/:id",async(req,resp)=>{
    const id=req.params.id;
    const note=await noteModel.findByIdAndDelete(id)
    console.log(id);

    resp.status(200).json({
        message:"notes deleted successfully",
        note
        
    })
})

app.patch("/api/notes/:id",async(req,res)=>{
    const id=req.params.id;
    const {description}=req.body;

    await noteModel.findByIdAndUpdate(id,{description})

    res.status(200).json({
        message:"Note updated successfully",
        
    })
})

module.exports=app;