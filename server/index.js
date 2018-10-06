const express = require("express");
const accepts = require("accepts");
const next = require("next");

const addItem = require("./db/addItem");

const router = require("../router");

const PORT = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handler = router.getRequestHandler(app);

app.prepare().then(() => {
  const server = express();
  server.get(/^\/(?!api).*/, (req, res) => {
    const urlSplit = req.url.split("/");
    if (["en", "sv"].indexOf(urlSplit[1]) < 0 && urlSplit[1] !== "_next") {
      const lang = accepts(req).languages();
      return res.redirect(
        301,
        `/${["en", "sv"].indexOf(lang.map(l => l.split("-")[0])[0]) < 0 ||
          "en"}${urlSplit.join("/")}`
      );
    } else {
      return handler(req, res);
    }
  });

  server.get("/api", async (req, res) => {
    const test = await addItem("test", 0, 0, 0);
    console.log(test);
    return res.send(`Hello World! ${test}`);
  });

  server.post("/api/additem", (req, res) => {
    const test = addItem("test", 0, 0, 0);
    return res.send("Hello World!");
  });

  server.listen(PORT, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${PORT}`);
  });
});
