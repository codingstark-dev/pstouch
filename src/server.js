import sirv from "sirv";
import express from "express";

import compression from "compression";
import * as sapper from "@sapper/server";

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === "development";

express() // You can also use Express
    .use(
        compression({ threshold: 0 }),
        sirv("static", { dev }),
        sapper.middleware({
            session: (req, res) => {
                res.set("Cache-Control", "public, max-age=31557600, s-maxage=31557600");
            },
        })
        // res.set("Cache-Control", "public, max-age=31557600")
    )
    .listen(PORT, (err) => {
        if (err) console.log("error", err);
    });