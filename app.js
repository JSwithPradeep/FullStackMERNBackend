require("dotenv").config();
const express = require("express");
const app = express();
require("./db/conn")
const cors = require("cors");
const router = require("./Routes/routers")
const port = 6010;


app.use(cors());
app.use(express.json());
app.use("/uploads",express.static("./uploads"))
app.use("/files", express.static("./public/files"))
app.use(router);

app.listen(port,()=>{
    console.log(`Server is start ${port}`);
});