const { Schema, model, Types } = require('mongoose');
// Schema to create User model
const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true
    },
    email: {
        type: String,
        required: true,
        match: /.+\@.+\..+/,
        unique: true,
    },
    thoughts: [
      {
      type: Schema.Types.ObjectId,
      ref: "Thought",
    },
  ],
    friends: [
      {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

userSchema
  .virtual('friendCount')
  // Getter
  .get(function () {
    return this.friends.length;
  });

const User = model('user', userSchema);

module.exports = User;
