var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TaskSchema = new Schema({
    id: {
        type: String
    },
    name: {
        type: String
    },
    description: {
        type: String
    },
    status: {
        type: [{
        type: String,
        enum: ['none', 'started', 'completed']
        }],
        default: ['none']
    },
    priority : {
        type: [{
            type: String,
            enum: ['low', 'medium', 'high']
        }],
        default: ['low']
    }
});

module.exports = mongoose.model('Tasks', TaskSchema);