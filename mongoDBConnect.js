const mongoose = require('mongoose');
const MONG_URI = 'mongodb://localhost:27017/lab_Iek6';
// const MONG_URI = 'mongodb+srv://nhq:hhqazi2906@cd5006.438bk.mongodb.net/labIek7?retryWrites=true&w=majority';

mongoose.connect(MONG_URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true, // Removed useFindAndModify
});

const db = mongoose.connection;

db.on('error', function (err) {
  console.log('Error occurred: ' + err);
});

db.once('connected', function () {
  console.log('Current Version of Mongoose installed: ' + mongoose.version);
  console.log('Connection is successful to ' + MONG_URI);
});

module.exports = db;