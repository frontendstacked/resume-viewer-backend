var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/**
 * Skills
 *
 */
var SkillSchema = new Schema({
    name: String,
    type: String, // language, library, framework, platform
    level: Number,
    jobs: Array // FK of jobs where this skill was demonstrated
});
module.exports = mongoose.model('Skill', SkillSchema);
