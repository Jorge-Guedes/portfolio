import { Experience } from "./Experience";
import { Education } from "./Education";
import { Certifications } from "./Certifications";
import { Skills } from "./Skills";
import { Projects } from "./Projects";

export const Content = () => {
  return (
    <div className="w-full lg:w-2/3 lg:ml-auto">
      <Experience />
      <Education />
      <Certifications />
      <Skills />
      <Projects />
    </div>
  );
};
