var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
var UserSchema = new Schema({
    // `title` is required and of type String
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        unique: true
    },
    lang: {
        type: String,
        required:false
    },
    job: {
        type: String,
        required:false
    },
    looking: {
        type: Boolean,
        default: false
    },
    photo: {
        type: String
    },
    links: {
        type: Schema.Types.ObjectId,
        ref: "Links"
    }
});

// This creates our model from the above schema, using mongoose's model method
var User = mongoose.model("User", UserSchema);

// Export the User model
module.exports = User;