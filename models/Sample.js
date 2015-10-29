var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/**
 * Samples of Work
 *
 */
var SampleSchema = new Schema({
    name: String,
    url: String,
    summary: String,
    job: String // FK to job this was done under
});
module.exports = mongoose.model('Sample', SampleSchema);
