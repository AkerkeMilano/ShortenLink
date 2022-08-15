const express = require("express");
const {nanoid} = require("nanoid");
const router = express.Router();
const Link = require("../models/Link");

const createRouter = () => {
    router.post("/links", async (req, res) => {
        const link = new Link(req.body);
        try{
            await link.save();
            res.send(link);
        } catch(e){
            console.log(e);
            res.status(400).send({e});
        }
    });
    return router;
}

module.exports = createRouter;