//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
    if(err){
       return console.log(err);
    }
    console.log('connected to mongoDB');
    
    const db = client.db('TodoApp');
    
//    db.collection('Todos').find({_id:new ObjectID("5bb9cdbf5dfc2d3430857f00")}).toArray().then((docs)=>{
//        console.log(JSON.stringify(docs,undefined,2));
//    },(err)=>{
//        console.log(err);
//    });
    
    db.collection('Todos').find().count().then((count)=>{
        console.log(count);
    },(err)=>{
        console.log(err);
    });
    
    client.close();
});