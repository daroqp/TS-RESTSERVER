import { Schema, model } from "mongoose";

const UserSchema = new Schema({
    name: { type: String, required: [true, "Name required"] },
    email: { type: String, required: [true, "Email required"], unique: true },
    password: { type: String, required: [true, "Password required"] },
    image: { type: String },
    activated: { type: Boolean, default: true },
    google: { type: Boolean, default: false },
    role: {
        type: String,
        required: [true, "Role required"],
        enum: ["ADMIN_ROLE", "USER_ROLE"],
    },
});

export default model("User", UserSchema);
