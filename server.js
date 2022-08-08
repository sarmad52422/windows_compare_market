const express = require("express")
const path = require("path");
const app = express();
const port = process.env.PORT || 3100
app.listen(port,()=>{
    console.log("Server is running on "+port)
})


app.get('/api',(req,res)=>{
    res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' }); //Line 10
})
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'build','index.html'))
})
app.use(express.static(path.join(__dirname,'build')))