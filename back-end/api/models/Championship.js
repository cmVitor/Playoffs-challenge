import mongoose from "mongoose";

const MatchSchema = new mongoose.Schema({
    team1: { name: String, logo: String },
    team2: { name: String, logo: String }
});

const RoundSchema = new mongoose.Schema({
    phase: String,
    matches: [MatchSchema]
});

const championshipSchema = new mongoose.Schema({
    name: { type: String, required: true },
    rounds: [RoundSchema],
    logo: { type: String, required: true }, // URL da imagem
    colorClass: { type: String, required: true }
}, { timestamps: true });

export default mongoose.model("Championship", championshipSchema);