import React, { useState, useContext, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

import BackIcon from "../components/BackIcon";
import Carousel from "../components/Carousel.tsx";
import { ProjectContext } from "../context/ProjectsContext.js";
import NotFound from "./NotFound.jsx";

const ProjectDetail = () => {
  const [project, setProject] = useState(null);
  const navigate = useNavigate();

  const { id } = useParams();
  const projects = useContext(ProjectContext);

  useEffect(() => {
    const project = projects.find((item) => item.id === Number(id));
    if (!project) navigate("/404");
    setProject(project);
  }, []);

  return (
    <div className=" ">
      <BackIcon />
      <div className="w-full border max-w-4xl mx-auto px-1 pt-4 md:px-4 border-gray-200 rounded-lg dark:border-neutral-700 shadow-md hover:shadow-lg transition-shadow duration-300">
        <h1 className="text-4xl font-bold text-center mb-5  text-gray-800 dark:text-neutral-200">
          {project?.title}
        </h1>
        <div className="p-6 rounded-lg">
          <div className="space-y-8">
            {project && <Carousel images={project?.images} />}

            {/* Project Description */}
            <div>
              <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-neutral-200">
                Description
              </h2>
              <p className="text-gray-600 dark:text-neutral-400">
                {project?.description}
              </p>
            </div>

            {/* Project Features */}
            <div>
              <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-neutral-200">
                Features
              </h2>
              <ul className="list-disc list-inside text-gray-600 dark:text-neutral-400">
                {project &&
                  project?.features?.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
              </ul>
            </div>

            {/* Technologies Used */}
            <div>
              <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-neutral-200">
                Technologies Used
              </h2>
              <div className="flex flex-wrap gap-2">
                {project &&
                  project?.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-green-100 text-green-800 text-sm font-medium px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
              </div>
            </div>

            {/* Project Link */}
            <div>
              <a
                href={project?.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-500 hover:text-green-700 font-semibold"
              >
                View Live Project →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
