const express = require("express")
const app = express()
const PORT = process.env.PORT || 4000;


app.get("/",(req,res)=>{
    res.send("Hello from server")
})

app.get("/users",(req,res)=>{
    res.send({name:"Naqvi",age:32})
})



app.listen(PORT, ()=>console.log("server running "))