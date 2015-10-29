var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/**
 * Summary of Qualifications
 *
 */
var QualificationSchema = new Schema({
    summary: { type: String, maxlength: 200 }
});
module.exports = mongoose.model('Qualification', QualificationSchema);
