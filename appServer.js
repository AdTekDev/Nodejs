const  express = require("express");
const PORT = process.env.port || 8080;
const appServerX = express();
const router = express.Router();
const fs = require("fs");

// ------------------- Routing
router.get( "/" , (req, res) => {
    pageContent = "Hello, chua co gi !!!";
    res.send(pageContent);
});


// -------------------------
appServerX.use("/", router);
// ----------- RUN / Launching !!! 
appServerX.listen( PORT );

console.log("Web da mo tai " + PORT);
