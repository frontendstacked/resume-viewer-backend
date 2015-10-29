var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/**
 * Job History
 */
var JobSchema = new Schema({
    organization: String,
    position: String,
    dateStarted: Date,
    dateEnded: Date,
    dateline: String,
    description: String

});
module.exports = mongoose.model('Job', JobSchema);
