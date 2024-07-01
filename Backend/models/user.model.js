const { Schema, model } = require("mongoose");

const UserSchema = new Schema(
  {
    firstName: {
      type: String,
      required: [true, "First Name is Required!"],
    },
    lastName: {
      type: String,
      required: [true, "Last Name is Required!"],
    },
    email: {
      type: String,
      required: [true, "Email is Required!"],
      unique: true,
      validate: {
        validator: function (v) {
          return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
        },
        message: (props) => `${props.value} is not a valid email!`,
      },
    },
    mobile: { 
        type: String, 
        required: true,
        validate: {
            validator: function (v) {
                return /^[6-9]\d{9}$/.test(v);
            },
            message: (props) => `${props.value} is not a valid mobile number!`,
        }, 
    },
    gender: { 
        type: String, 
        required: true
    },
    dob: { 
        type: Date, 
        required: true 
    },
    password: { 
        type: String, 
        required: true 
    }
  },
  {
    timestamps: true,
  }
);

const User = new model("users", UserSchema);

module.exports = User;
