const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect');
    }
    console.log('Connected to mongodb ');
    
    //findOneandUpdate
    db.collection('Todos').findOneAndUpdate(
        {test:' walk the dog'},
        {$set : {
            complete:true
        }
        },
        {returnOriginal:false}).then((result)=>{
            console.log(result);
        });

});