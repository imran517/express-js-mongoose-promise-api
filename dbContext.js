const mongoose = require('mongoose');
const config = require('./config');

const connectionString = `mongodb://${config.db.host}:${config.db.port}/taskdb`;

module.exports = {
    connect: function () {      
      return new Promise ((resolve, reject) => {
        mongoose.connect(connectionString)
        .then (() => { 
          console.log("Successfully connected to MongoDB.");
          resolve(null);
        })
        .catch (err => { 
          console.error(`Fatal error occurred: ${err}`);
          reject(err);
        });
      });
    }
  };