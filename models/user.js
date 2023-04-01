const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
    id: {
      type: Number,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/]
    },
    thoughts: [{
        type: Schema.Types.ObjectId,
        ref: 'Thoughts'
    }],
    },
    {
    toJSON: {
        virtuals: true,
        getters: true,
    },
    id: false
    }
)



const User = model('user', userSchema);

module.exports = User;
