import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import routes from "./routes/index.js";

dotenv.config();

const app = express();

// Configurações
app.use(cors());
app.use(express.json()); // Permite o envio de JSON no body
app.use(routes)

// Conectar ao MongoDB
console.log("MONGO_URI carregado:", process.env.MONGO_URI);

mongoose.connect(process.env.MONGO_URI).then(() => console.log("MongoDB conectado"))
    .catch(err => console.log(err));

// Iniciar o servidor

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));