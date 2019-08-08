const express = require("express");
const bp = require("body-parser");
const app = express();

const DISCORDLINK = "https://discord.gg/yPbDJJm";

app.use(bp.json());
app.use("/", express.static("./public"));

app.get("/redirect", (req, res) => {
    console.log("REDIRECTING");
    console.log("redirecting to " + req.query.to);
    console.log("url:" + req.query.url);
    res.redirect(req.query.url);
});
app.get("/discord", (req, res) => {
    res.redirect(`/redirect?to=discord&url=${DISCORDLINK}`);
})

app.listen(3000);