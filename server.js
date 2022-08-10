const express = require("express")
const path = require("path");
const app = express();
const userRouter = require('./src/server/routers/user_router')
const port = process.env.PORT || 3100




app.use('/api/users',userRouter)
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'build','index.html'))
})
app.get('*',(req,res)=>{
    res.send({express:"404 Not Found"})
})


app.use(express.static(path.join(__dirname,'build')))

app.listen(port, () => {
    console.log("Server is running on " + port)

})
