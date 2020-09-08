var mongoose = require('mongoose');

mongoose.connect('mongodb://192.168.0.13:27017,192.168.0.13:27018,192.168.0.13:27019/isosu', 
                    { replicaSet: 'rs0',useCreateIndex: true,useNewUrlParser: true,useUnifiedTopology: true });
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'MongoDB connection error:'));
    
    db.once('open', function() {
        console.log('Mongoose Connected to mongodb...!') 
    });

module.exports.mongoose = mongoose;
