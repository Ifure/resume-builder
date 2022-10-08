import "./App.css";
import "./libs/bootstrap.min.css";
import Template from "./pages/Template1";
import { useState } from "react";
import resume1 from "./assets/resumes/resume1.png";
import Onboarding from "./components/Onboarding";

const ResumeThumbnail = ({ img, template, setSelected }) => {
  return (
    <img
      src={img}
      className="resume-thumbnail"
      alt={"resume thumbnail"}
      onClick={() => {
        setSelected(template);
      }}
    />
  );
};

const App = () => {
  const resumes = [{ template: <Template/>, img: resume1 }];
  let [selected, setSelected] = useState(null);
  

  return (
    <>
        <main className="container m-5">
          <h1 className="fw-bold">
            {selected
              ? "Let's build your resume"
              : "Pretty and ATS friendly resumes"}
          </h1>
          <hr />
          {selected ? (
            <Onboarding>
              {selected}
            </Onboarding>
          ) : (
            <div className="d-flex">
              {resumes.map((resume, key) => (
                <ResumeThumbnail
                  {...resume}
                  key={key}
                  setSelected={setSelected}
                />
              ))}
            </div>
          )}
        </main>
    </>
  );
};

export default App;
