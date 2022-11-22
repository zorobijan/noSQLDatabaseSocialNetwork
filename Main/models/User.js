const { Schema, model } = require('mongoose');
const assignmentSchema = require('./Assignment');

// Schema to create Student model
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

const Student = model('student', studentSchema);

module.exports = Student;
