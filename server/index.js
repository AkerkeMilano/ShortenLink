const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const links = require("./routes/links");
const port = 8000;

app.use(cors());
app.use(express.static("public"));
app.use(express.json());
app.use("/", links());

const run = async () => {
    await mongoose.connect("mongodb://localhost/links", {useNewUrlParser: true});
    console.log("Connected to MongoDB");
    app.listen(port, () => {
        console.log(
            `
            Server started at http://localhost:${port}
            `
        );
    });
    process.on("exit", () => {
        mongoose.disconnect();
    })
};

run().catch(console.log);