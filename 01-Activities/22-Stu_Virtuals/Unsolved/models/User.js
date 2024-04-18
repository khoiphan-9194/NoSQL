const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
    first: String,
    last: String,
    age: Number,
  },
  {
    toJSON: {
      // TODO: Mongoose will not include virtuals by default, 
      //so add a `virtuals` property and set it's value to true
      virtuals: true
    },
    id: false,
  }
);

// TODO: Create a virtual property `fullName` on the userSchema
userSchema.virtual('fullName').get(function () {
  return `${this.first} ${this.last}`
})
.set(function(value){
   // `v` is the value being set, so use the value to set
    // `firstName` and `lastName`.
  const first = value.substring(0, value.indexOf(' '));
  const last = value.substring(value.indexOf(' ') + 1);
  this.set({ first, last });
  // second way
  // const [first_name,last_name] =value.split(' ');
  // this.first =first_name;
  // this.last = last_name;
});

// TODO: Create a getter for the virtual that returns the full name of the user (first + last)

// TODO: Create a setter for the virtual that sets the value of the first and last name, given just the `fullName`

// Initialize our User model
const User = model('user', userSchema);

module.exports = User;

