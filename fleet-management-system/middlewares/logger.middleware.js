import fs from "fs";

const logger = (req, res, next) => {
    const log = `${new Data().toISOString()} | ${req.method} | ${req.url}\n`;
    fs.appendFileSync("logs.txt", log);
    next();
};
export default logger;
