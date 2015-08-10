var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/**
 * Job History
 */
var JobSchema = new Schema({
    org: String
});
module.exports = mongoose.model('Job', JobSchema);
