var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var packageSchema = new Schema({
    _id: Schema.Types.Mixed,
    identifier: { type: Schema.Types.Mixed, required: true },
    name: Schema.Types.Mixed,
    section: String,
    homepage: Schema.Types.Mixed,
    version: { type: Schema.Types.Mixed, required: true },
    size: { type: Number, required: true },
    price: { type: Number, required: true },
    author: { 
        name: Schema.Types.Mixed,
        email:  Schema.Types.Mixed
    },
    description: Schema.Types.Mixed
});

module.exports = mongoose.model('Package', packageSchema);