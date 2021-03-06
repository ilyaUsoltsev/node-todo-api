var express = require('express');
var bodyParser = require('body-parser');



var {mongoose} = require('./db/mongoose.js');
var {Todo} = require('./models/todo.js');
var {User} = require('./models/user.js');


var app = express();

app.use(bodyParser.json());

app.post('/todos',(req,res)=>{
    var todo = new Todo({
        text: req.body.text
    });
    
    todo.save().then((doc)=>{
        res.send(doc);
    },(e)=>{
        res.statu(400).send(e);
    });
    
});

app.get('/todos',(req,res)=>{
    Todo.find().then((todos)=>{
        res.send({todos});
    },(e)=>{
        res.statu(400).send(e);
    })
})


app.listen(3000,()=>{
    console.log('listening to 3000 port')
});
