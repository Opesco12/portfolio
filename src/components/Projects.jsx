import { ArrowRight } from "iconsax-react";
import { useNavigate } from "react-router-dom";

const Projects = () => {
  const navigate = useNavigate();
  return (
    <div class="mt-10 sm:mt-14">
      <div className="flex justify-between items-center mb-5 ">
        <h2 class=" font-medium text-gray-800 dark:text-neutral-200">
          Projects
        </h2>
        <div
          className="flex gap-1 items-center cursor-pointer"
          onClick={() => navigate("/projects")}
        >
          <p className="font-medium text-gray-800 dark:text-neutral-200">
            See all
          </p>
          <ArrowRight
            size={20}
            // color="#000"
            className="shrink-0 text-gray-800 dark:text-neutral-200"
          />
        </div>
      </div>

      <div class="grid grid-cols-2 sm:grid-cols-3 gap-2">
        <a
          class="group block relative overflow-hidden rounded-lg"
          href="#"
        >
          <img
            class="w-full size-40 object-cover bg-gray-100 rounded-lg dark:bg-neutral-800"
            src="/images/utlam_web_home.jpeg"
            alt="Project"
          />
          <div class="absolute bottom-1 end-1 opacity-0 group-hover:opacity-100 transition">
            <div class="flex items-center gap-x-1 py-1 px-2 bg-white border border-gray-200 text-gray-800 rounded-lg dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-200">
              <svg
                class="shrink-0 size-3"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle
                  cx="11"
                  cy="11"
                  r="8"
                />
                <path d="m21 21-4.3-4.3" />
              </svg>
              <span class="text-xs">View</span>
            </div>
          </div>
        </a>

        <a
          class="group block relative overflow-hidden rounded-lg"
          href="#"
        >
          <img
            class="w-full size-40 object-cover bg-gray-100 rounded-lg dark:bg-neutral-800"
            src="/images/stl_home.jpeg"
            alt="Project"
          />
          <div class="absolute bottom-1 end-1 opacity-0 group-hover:opacity-100 transition">
            <div class="flex items-center gap-x-1 py-1 px-2 bg-white border border-gray-200 text-gray-800 rounded-lg dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-200">
              <svg
                class="shrink-0 size-3"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle
                  cx="11"
                  cy="11"
                  r="8"
                />
                <path d="m21 21-4.3-4.3" />
              </svg>
              <span class="text-xs">View</span>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Projects;
