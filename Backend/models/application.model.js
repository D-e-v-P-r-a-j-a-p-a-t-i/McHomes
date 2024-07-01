const { model, Schema } = require("mongoose")


const ApplicationSchema = new Schema(
    {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        mobile: { type: String, required: true },
        uname: { type: String, required: true, unique: true },
        house: { type: Schema.Types.ObjectId, ref: "Housing"}
    },
    {
        timestamps: true
    }
)

const Application = new model('Application', ApplicationSchema)

module.exports = Application