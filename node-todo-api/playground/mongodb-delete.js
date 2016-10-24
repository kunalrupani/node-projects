const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect');
    }
    console.log('Connected to mongodb ');
    
    //deleteMany
    db.collection('Todos').deleteMany({test: ' walk the dog'}).then((result)=> {
        console.log(result);
    });

});