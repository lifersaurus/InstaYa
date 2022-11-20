const mongoose = require('mongoose');

const URI = process.env.MONGOOSE_URI
    ? process.env.MONGOOSE_URI
    : 'mongodb://127.0.0.1:27017/instaya';
mongoose.connect(URI, {
    //useNewUrlParser: true,
    //useCreateIndex: true
});

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('Database is connected');
});
