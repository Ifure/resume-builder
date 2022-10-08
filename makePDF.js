const pdf = require("pdf-creator-node");
const fs = require("fs");
const path = require("path");


const makePDF = (template, userData)=> {
  // Read HTML Template
const html = fs.readFileSync(path.join(__dirname, `/templates/${template}.html`), "utf8");

const options = {
  format: "A4",// initial was A3
  orientation: "portrait",
  border: "0mm",
};

const document = {
  html: html,
  data: {
    userData
  },
  path: `./${template}.pdf`,
  type: "", // "stream" || "buffer" || "" ("" defaults to pdf)
};

// By default a file is created but you could switch between Buffer and Streams by using "buffer" or "stream" respectively.

pdf
  .create(document, options)
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.error(error);
  });
}

module.exports = makePDF;