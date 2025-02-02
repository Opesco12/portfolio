import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "iconsax-react";

import BackIcon from "../components/BackIcon";

import { ProjectContext } from "../context/ProjectsContext";

const ProjectsPage = () => {
  const navigate = useNavigate();

  const projects = useContext(ProjectContext);

  return (
    <div className="space-y-8">
      <BackIcon />
      {projects.map((project, index) => (
        <div
          key={index}
          className="p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 rounded-lg dark:border-neutral-700"
          data-aos="fade-up"
          data-aos-delay={index * 200}
        >
          <img
            src={project?.images[0]}
            className="rounded-lg"
            // height={"400px"}
            // width={"400px"}
          />
          <h2 className="text-2xl font-bold my-2 font-medium text-gray-800 dark:text-neutral-200">
            {project?.title}
          </h2>
          <p className="mb-4 text-gray-600 dark:text-neutral-400">
            {project?.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech, i) => (
              <span
                key={i}
                className="bg-green-100 text-sm font-medium px-2 py-1 rounded text-green-800  dark:bg-green-200 dark:text-green-700"
              >
                {tech}
              </span>
            ))}
          </div>
          <a
            // href={project.link}
            className="text-green-800 hover:text-green-900 font-semibold dark:text-green-700 dark:hover:text-green-800 focus:outline-none focus:underline"
            onClick={() =>
              navigate(`/project/${project?.id}`, { state: project })
            }
          >
            View Project →
          </a>
        </div>
      ))}
    </div>
  );
};

export default ProjectsPage;
