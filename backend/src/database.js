const mongoose=require('mongoose');


const URI=process.env.MONGODB_URI 
? process.env.MONGODB_URI
:'mongodb://127.0.0.1:27017/instaya';

mongoose.connect(URI, {
    useNewUrlParser: true,
    //useCreateIndex: true
});

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('Database is connected');
});
