const MongoClient = require('mongodb').MongoClient;

//******** Object deconstruction
// const {MongoClient, ObjectID} = require('mongodb');
// var obj= new ObjectID();

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db )=>{
    if(err){
        return console.log('Unable to connect');
    }
    console.log('Connected to mongodb ');
  
    // db.collection('Todos').insertOne({
    //     test: ' My first note',
    //     completed: false

    // }, (err, result)=> {
    //     if(err){
    //         console.log('unable to insert Todos', err);
    //     }
    //     else {
    //      console.log(JSON.stringify(result.ops,undefined,2));
    //     }
    // });

    db.collection('Users').insertOne({
        name: 'Kunal Rupani',
        age: 40,
        location:' San Jose, CA 95148'
    }, (err,result)=> {
        if(err){
          console.log('unable to insert Users', err);
        }
        else{
        console.log(JSON.stringify(result.ops,undefined,2));
        }
    })
    db.close();
});