/**
 * WORKING WITH THE DATA
 * 1. Import Mongoose
 * 2. Import the required modules individually from the models/ dir
 * 3. Open a MongoDB connection and assign to a var
 * 4. (optional) Store a reference to the models(compiled in their modules)
 *
 */

var mongoose = require('mongoose'),
    dbConnection = mongoose.connect('mongodb://localhost/fes').connection,
    Person = userModels.Person;

dbConnection
    .on('error', console.error.bind(console, '[Mongoose ERROR]'))
    .once('open', function (callback) {
        console.log('[Mongoose Event] Connection OPEN');
        // Person.find({last:'Dodson'}, function (err, person) {
        //     console.log(person);
        // });
    });
