const {readFile} = require("fs");

const base64 = (fileName)=>{
    readFile(__dirname+ fileName, (err, data)=>{
        if(err){
            throw new Error(err);
        }
        return data.toString("base64");
    })
}

module.exports = base64;