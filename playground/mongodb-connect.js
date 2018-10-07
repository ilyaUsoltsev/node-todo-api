//const MongoClient = require('mongodb').MongoClient;
const {MongoClient} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
    if(err){
       return console.log(err);
    }
    console.log('connected to mongoDB');
    
    const db = client.db('TodoApp');
    
//    db.collection('Todos').insertOne({
//        text: 'To do smth awesome',
//        completed: false
//    }, (err, result)=>{
//        if(err){
//            return console.log('unable to insert data',err);
//        };
//        
//        console.log(JSON.stringify(result.ops,undefined,2));
//    });
    
    db.collection('Users').insertOne({
        name: 'Ivan',
        age: 34,
        location: "Moscow"
    }, (err, result)=>{
        if(err){
            return console.log('unable',err)
        };
        console.log(result.ops);
    })
    
    client.close();
});