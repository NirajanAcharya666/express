const express = require('express')
const app = express();
const student=require('./student');
app.listen(3000,()=>{
    console.log('listening on port 3000')

});
app.get('/',(req,res)=>{
//req represent request object 
//res represent is such obj through which we sent to the client
// res.json("Hellow world")
// install json formatter extension in chrome
// res.json({'message': 'API is working....'})
//lets pass the list of students
res.json({message: "API is working"})
})
app.get('/student',(req,res)=>{
    res.json(student);
})

/*   
Generally, get request means client is asking the date from the server which we have done 

*/