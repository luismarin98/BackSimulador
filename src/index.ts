import express, { Express } from "express";
import dotenv from "dotenv";
import { api_rutas, routes } from "./routes";
import { RunConnectDB } from "./Database";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use("/api", api_rutas);

app.use(express.static("public"));

app.get("/files", (req, res) => res.json({ routes }));

RunConnectDB({ connection_string: process.env.MONGO_URI! });

app.listen(port, () => console.log(`[server]: Server is running at http://localhost:${port}`));