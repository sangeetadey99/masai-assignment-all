import express from "express";
import dotenv from "dotenv";
import logger from "./middlewares/logger.middleware.js";

import userRoutes from "./routes/user.routes.js";
import vehicleRoutes from "./routes/vehicle.routes.js";
import tripRouteres from "./routes/trip.routes.js";
import analyticsRoutes from "./routes/analytics.routes.js";

dotenv.config();    

const app = express();
app.use(express.json());
app.use(logger);

app.use("/users", userRoutes);
app.use("/vehicles", vehicleRoutes);
app.use("/trips", tripRouteres);
app.use("/analytics", analyticsRoutes);

app.use((req, res) => {
    res.status(404).json({ message: "This Request is not found!"});
});
app.listenerCount(process.env.port, () => {
    console.log(`server running on port ${process.env.PORT}`)
});




