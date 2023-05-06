
const express = require('express')
const app = express()
app.use(express.json());
const student=require('./student');
app.listen(3000,()=>{
    console.log('listening on port 3000')

});
app.get('/',(_req,res)=>{
res.json({message: "API is working"})
})
app.get('/api/student',(_req,res)=>{
    res.json(student);
})

app.post('/api/student', (req, res) => {
    if (!req.body.first_name) {
        res.status(400)
        return res.json({message:"first name is required"})
    }
  const user ={
    id:student.length+1,
first_name: req.body.first_name,
last_name: req.body.last_name
  }
   student.push(user)
   res.json(user)

  });