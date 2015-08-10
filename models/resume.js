var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/**
 * Resume
 */
// var resumeSchema = new Schema({
//     name: {type: String},
//     description: String
// });
// exports.resumeSchema = resumeSchema;
// mongoose.model('Resume', resumeSchema);

/**
 * Qualification summaries
 */
// var qualificationSchema = new Schema({
//     summary: String
// });
// exports.qualificationSchema = qualificationSchema;
// mongoose.model('Qualification', qualificationSchema);

/**
 * Job History
 */
var jobSchema = new Schema({
    org: String,
    dateline: String,
    startDate: Date,
    endDate: Date
});
exports.jobSchema = jobSchema;
mongoose.model('Job', jobSchema);
