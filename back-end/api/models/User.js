import mongoose from "mongoose";

const user = new mongoose.Schema({
    nome: String,
    email: String,
    senha: String,
}, { timestamps: true });

export default mongoose.model("User", user);