const Router = require("express").Router();
const _ = null;
const makePDF = require("../makePDF.js")
// use buffer to encode images to base64 strings
/* 
    const data = "example";
    const buff = new Buffer(data);
    const base64data = buff.toString("base64")
*/

Router.post("/resume/:resumeType", (req,res)=>{
    const fieldsRequired = ["name", "bio", "projects", "education", "contact"]
    const resumes = ["student", "ats-friendly", "designer"]

    if(!validate(fieldsRequired, req.body).valid){
        res.json({error: validate(fieldsRequired, req.body).message});
    }
    if(!validate(_,_,{types: resumes, userData:req.params.resumeType}).valid){
        res.json(validate(_,_,{types: resumes, userData:req.params.resumeType}).message)
    }
    
    const {resumeType} = req.params;
    makePDF(resumeType, req.body);
    res.json({"message":"success"})
})

const validate = (fields, data, type=undefined,)=>{

    if(type){
        const {types, userData} = type;
        for(let i of types){
            console.log(i,userData, types)
            if(i === userData){
                return {valid: true};
            }
        }
        return {message: "This type of resume doesn't exist", valid: false};
    }

    console.log(data);
    for(let i in fields){
        if(!data[fields[i]]){
            console.log(data[i], 22);
            return {valid: false, message: `${fields[i]} is required`}

        }
    }
    return {valid: true};
}

module.exports = Router;