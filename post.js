/*
if client want to save the data in the server, then the post request is done
let see how it is done.
*/

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
    console.log(req.body);
  /* we got undefine during this case if we want to read body directly.
  we need one configuration.so there is the use of middleware. To do so let's move on
  next middleware.js file 
so we need to use app.use(express) which will read the body and give it to program


  */

    res.send(`API is working`);
  });