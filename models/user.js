var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/**
 * Person
 */
var personSchema = new Schema({
    first: String,
    last: String,
    middle: String,
    address: String,
    city: String,
    state: String,
    zip: String,
    phone: String,
    email: String,
    github: String,
    notes: String
});
exports.personSchema = personSchema;
exports.Person = mongoose.model('Person', personSchema);
