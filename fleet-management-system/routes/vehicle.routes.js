import express from "express";
import {addVehicle} from "../controllers/vehicle.controller.js";
import { vehicleLimiter} from "../middlewares/rateLimiter.js"

const route =  express.Router();
route.post("/add", vehicleLimiter, addVehicle);

export default route;