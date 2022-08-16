const express = require("express");
const {nanoid} = require("nanoid");
const router = express.Router();
const Link = require("../models/Link");

const createRouter = () => {
    router.post("/links", async (req, res) => {
        const link = new Link(req.body);
        link.shortUrl = nanoid(7);
        try{
            await link.save();
            res.send(link);
        } catch(e){
            console.log(e);
            res.status(400).send({e});
        }
    });
    router.get("/:shortUrl", async (req, res) => {
        try{
            const link = await Link.findOne({shortUrl: req.params.shortUrl});
            res.status(301).redirect(link.originalUrl)
        } catch(e){
            res.sendStatus(404);
        }
    })
    return router;
}

module.exports = createRouter;