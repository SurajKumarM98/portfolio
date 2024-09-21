import { PROJECTS_INFO } from "./constants";
import Section from "./Section";

const Projects = () => {
  return (
    <div className="flex flex-col pt-2">
      <div className="flex flex-col space-y-12">
        {PROJECTS_INFO.map((project) => (
          <Section project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
