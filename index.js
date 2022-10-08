const express = require("express");
const app = express();
const api = require("./api/index.js");
const PORT = process.env.PORT || 8080;
const cors = require("cors")

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use("/api", api);
app.use(express.static("client/build"))


app.listen(PORT, ()=>console.log(`Listening on http://localhost:${PORT}`))
