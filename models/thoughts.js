const { Schema, model } = require('mongoose');

const thoughtsSchema = new Schema(
  {
    id: {
        type: Number,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
    
    username: {
        type: String,
        required: true,
        trim: true
    },
    text: {
        type: String,
        required: 'Please enter your thoughts in the form of text',
        minlength: 1,
        maxlength: 280
    },

},
{
    toJSON: {
        getters: true,
        virtuals: true
    },
    id: false
}
)


const Thoughts = model('thoughts', thoughtsSchema);

module.exports = Thoughts;
