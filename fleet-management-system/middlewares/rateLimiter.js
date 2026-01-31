import rateLimit from "express-rate-limit";

export const vehicleLimiter = rateLimit({
    windowMs:60 * 1000,
    max:3,
    message: "Maximum 3 vehicle creation requests per minute"
});
