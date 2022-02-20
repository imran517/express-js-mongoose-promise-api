const mongoose = require('mongoose');
const dbContext = require('./dbContext');
const Tasks = require('./model');

class Service {
    constructor () { }

    getTasks () {     
        return new Promise ((resolve, reject) => {
            dbContext.connect()
            .then(() => {
                return Tasks.find({})
            })  
            .then (result => { 
                console.log(result); 
                resolve(result); 
            })
            .catch (err => { 
                console.error(`Error fetching tasks!: ${err}`);
                reject(err);
            });
        });                
    }

    getTask (id) {
        return new Promise ((resolve, reject) => {
            dbContext.connect()
            .then(() => {
                return Tasks.findOne({id: id})
            })  
            .then ( result => { 
                console.log(result); 
                resolve(result); 
            })
            .catch (err => { 
                console.error(`Error fetching a task: ${err}`);
                reject(err);
            });
        });  
    }

    addTask (task) {
        return new Promise ((resolve, reject) => {
            dbContext.connect()
            .then(() => {
                return Tasks.create(task)
            })  
            .then (result => { 
                let msg = { message: "Success adding a task!" }
                console.log(msg);
                resolve(msg); 
            })
            .catch (err => { 
                console.error(`Error adding a task!: ${err}`);
                reject(err);
            });
        });
    }

    updateTask (task) {
        return new Promise ((resolve, reject) => {
            dbContext.connect()
            .then(() => {
                return Tasks.updateOne({id: task.id }, { $set: task})
            })  
            .then (result => { 
                let msg = { message: "Success updating a task!" }
                console.log(msg);
                resolve(msg); 
            })
            .catch (err => { 
                console.error(`Error updating a task!: ${err}`);
                reject(err);
            });
        });
    }
    
    deleteTask (task) {
        return new Promise ((resolve, reject) => {
            dbContext.connect()
            .then(() => {
                return Tasks.deleteOne(task)
            })  
            .then (result => { 
                let msg = { message: "Success deleting a task!" }
                console.log(msg);
                resolve(msg); 
            })
            .catch (err => { 
                console.error(`Error deleting a task!: ${err}`);
                reject(err);
            });
        });
    }
}

module.exports = Service;
