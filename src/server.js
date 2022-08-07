const express = require("express")
const app = express();
const port = process.env.PORT || 3100
app.listen(port,()=>{
    console.log("Server is running on "+port)
})


app.get('/api',(req,res)=>{
    res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' }); //Line 10
})