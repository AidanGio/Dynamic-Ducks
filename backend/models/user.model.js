const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
    minlength: 1
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
    minlength: 3
  },
  paymentStatus: {type: Number, required: true},
  projectCost: {type: Number, required: true},
  projectProgress: {type: String, required: true, trim: true, minlength: 1},
  projectStatus: {type: Number, required: true}
}, {
  timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;