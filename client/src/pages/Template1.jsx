import plus from "../assets/plus_icon.svg";
import minus from "../assets/minus_icon.svg";
import { useState } from "react";

function Template() {
  let [jobs, setJobs] = useState([<Job key={0} />]);
  let [educations, setEducations] = useState([<Education key={0} />]);
  let [skils, setSkills] = useState([])

  return (
    <form>
      <div className="row">
        <div className="col-md-4">
          <label>Name</label>
          <input className="form-control" />
          <label>Phone</label>
          <input className="form-control" />
          <label>Email</label>
          <input className="form-control" />
          <label>LinkedIn</label>
          <input className="form-control" />
        </div>

        <div className="col-md-8">
          <label>Bio</label>
          <textarea className="form-control" id="bio"></textarea>
        </div>
      </div>

      <div>
        <div className="my-2">
          <h2>Work Experience</h2>
          <hr />
        </div>
        {jobs}
        <div
          className={`d-flex justify-content-${
            jobs.length === 1 ? "end" : "between"
          } my-2`}
        >
          <div
            className={`btn btn-danger ${
              jobs.length === 1 ? "d-none" : ""
            }`}
            onClick={(e) => {
              setJobs((n) => {
                return n.slice(0, -1);
              });
            }}
          >
            Remove work experience <img src={minus} alt="" />
          </div>

          <div
            className={`btn btn-success ${
              jobs.length === 3 ? "disabled" : ""
            }`}
            onClick={(e) => {
              if (jobs.length === 3) {
                return;
              }

              setJobs((n) => {
                return n.concat(<Job key={n.length} />);
              });
            }}
          >
            Add work experience <img src={plus} alt="" />
          </div>
        </div>
      </div>

      <div className="my-3">
        <h2>Education</h2>
        <hr />
        {educations}
        <div
          className={`d-flex justify-content-${
            jobs.length === 1 ? "end" : "between"
          } my-2`}
        >
          <div
            className={`btn btn-danger ${
              educations.length === 1 ? "d-none" : ""
            }`}
            onClick={(e) => {
              setEducations((n) => {
                return n.slice(0, -1);
              });
            }}
          >
            Remove education <img src={minus} alt="" />
          </div>

          <div
            className={`btn btn-success ${
              educations.length === 3 ? "disabled" : ""
            }`}
            onClick={(e) => {
              if (educations.length === 3) {
                return;
              }

              setEducations((n) => {
                return n.concat(<Education key={n.length} />);
              });
            }}
          >
            Add education <img src={plus} alt="" />
          </div>
        </div>
      </div>

      <div>
        <div className="my-3">
        <h2>Skills and Awards</h2>
        <h3 className="h5 my-2">Skills</h3>
        <div contentEditable style={{
          minHeight:"2rem"
        }} className="border border-3 rounded-3 p-2" onKeyPress={e =>{
          if(e.key === "Enter"){
          let input = e.target.innerText;
          if(input[input.length - 1] === '\n')
          input = input.split("").slice(0,-1).join("").split('\n').join(" ");
          let inputArray = input.split(" ");
          console.log(inputArray);
          }
        }}></div>
        <div>

        </div>
        </div>
      </div>
    </form>
  );
}

function Job() {
  return (
    <div className="row my-5">
      <div className="col-md-4">
        <label>Position</label>
        <input className="form-control" />
        <label>Company Name</label>
        <input className="form-control" />
        <label>Street</label>
        <input className="form-control" />
        <label>City</label>
        <input className="form-control" />
      </div>

      <div className="col-md-8">
        <label>Job experience description</label>
        <textarea className="form-control" id="bio"></textarea>
      </div>
    </div>
  );
}

function Education() {
  return (
    <div className="row">
      <div className="col-md-4">
        <label>Name of Institution</label>
        <input className="form-control" />
      </div>
      <div className="col-md-4">
        <label>Year and month of graduation</label>
        <input className="form-control" />
      </div>
      <div className="col-md-4">
        <label>Degree</label>
        <input className="form-control" />
      </div>
    </div>
  );
}



export default Template;
