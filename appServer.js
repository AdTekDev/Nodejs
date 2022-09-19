const  express = require("express");
const PORT = process.env.port || 80;
const appServer = express();
const router = express.Router();
const fs = require("fs");

// ------------------- Routing
router.get( "/" , (yeucau, trave) => {
    pageContent = "Hello, chua co gi !!!";
    trave.send(pageContent);
});

router.get( "/home" , (yeucau, trave) => {
    data = fs.readFileSync("./html/home.html");
    pageContent = data.toString();
    trave.send(pageContent);
});

router.get( "/products" , (yeucau, trave) => {
    data = fs.readFileSync("./html/products.html");
    pageContent = data.toString();
    trave.send(pageContent);
});


// -------------------------
appServer.use("/", router);
// ----------- RUN / Launching !!! 
appServer.listen( PORT );

console.log("Web da mo tai " + PORT);
