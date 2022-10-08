import Template from "../pages/Template1";

const Onboarding = ({template, children}) => {

  return (
    <section >
      <section id="on-boarding" className="p-3 rounded-3 border">
        {children}      
      </section>
    </section>
  );
};

export default Onboarding;
