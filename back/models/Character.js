const { Schema, model } = require('mongoose');

const mongoosePaginate = require('mongoose-paginate-v2');

const LocationSchema = Schema({
    name: {
        type: String,
        required: true
    }
});

const OriginSchema = Schema({
    name: {
        type: String,
        required: true
    }
});

const CharacterSchema = Schema({

    name: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['Alive', 'Dead', 'unknown'],
        default: 'Alive'
    },
    location: LocationSchema,
    origin: OriginSchema,
    species: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        enum: ['Female', 'Male', 'Genderless', 'unknown'],
        default: 'Male'
    },
    image: {
        type: String,
        required: true
    },
    episodes: {
        type: [String],
        default: []
    },
    created: {
        type: Date,
        required: true,
        default: () => Date.now()
    }

});

CharacterSchema.plugin(mongoosePaginate);

module.exports = model('Character', CharacterSchema);

