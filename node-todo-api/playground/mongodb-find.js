const MongoClient = require('mongodb').MongoClient;

//******** Object deconstruction
// const {MongoClient, ObjectID} = require('mongodb');
// var obj= new ObjectID();

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db )=>{
    if(err){
        return console.log('Unable to connect');
    }
    console.log('Connected to mongodb ');

// db.collection('Todos').find({completed: false}).toArray().then((docs)=>{
//     console.log('Todos');
//     console.log(JSON.stringify(docs,undefined,2));

// }, (err)=>{
//    console.log('Unable to fecth Todos', err);
// }); 

db.collection('Users').find({name: "Kunal Rupani"}).toArray().then((docs)=>{
    console.log('Todos');
    console.log(JSON.stringify(docs,undefined,2));

}, (err)=>{
   console.log('Unable to fecth Todos', err);
}); 

    db.close();
});