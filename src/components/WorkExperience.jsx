const WorkExperience = () => {
  return (
    <div class="mt-10 sm:mt-14">
      <h2 class="mb-5 font-medium text-gray-800 dark:text-neutral-200">
        Work experience
      </h2>

      <div>
        <div class="group relative flex gap-x-5">
          <div class="relative group-last:after:hidden after:absolute after:top-8 after:bottom-2 after:start-3 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">
            <div class="relative z-10 size-6 flex justify-center items-center">
              <svg
                class="shrink-0 size-6 text-gray-800 dark:text-neutral-200"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M12 12h.01" />
                <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
                <path d="M22 13a18.15 18.15 0 0 1-20 0" />
                <rect
                  width="20"
                  height="14"
                  x="2"
                  y="6"
                  rx="2"
                />
              </svg>
            </div>
          </div>

          <div class="grow pb-8 group-last:pb-0">
            <h3 class="mb-1 text-xs text-gray-600 dark:text-neutral-400">
              2024 - Present
            </h3>

            <p class="font-semibold text-sm text-gray-800 dark:text-neutral-200">
              Junior Frontend Developer at Vargent Africa
            </p>

            <p class="mt-1 text-sm text-gray-600 dark:text-neutral-400">
              At Vargent Africa, I have developed web and mobile applications
              using React and React Native, collaborating closely with
              designers, backend developers, and other team members to build
              high-quality products.
            </p>
          </div>
        </div>

        <div class="group relative flex gap-x-5">
          <div class="relative group-last:after:hidden after:absolute after:top-8 after:bottom-2 after:start-3 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">
            <div class="relative z-10 size-6 flex justify-center items-center">
              <svg
                class="shrink-0 size-6 text-gray-800 dark:text-neutral-200"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M12 12h.01" />
                <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
                <path d="M22 13a18.15 18.15 0 0 1-20 0" />
                <rect
                  width="20"
                  height="14"
                  x="2"
                  y="6"
                  rx="2"
                />
              </svg>
            </div>
          </div>

          <div class="grow pb-8 group-last:pb-0">
            <h3 class="mb-1 text-xs text-gray-600 dark:text-neutral-400">
              2023-2024
            </h3>

            <p class="font-semibold text-sm text-gray-800 dark:text-neutral-200">
              Freelance Frontend Developer
            </p>

            <ul class="list-disc ms-6 mt-3 space-y-1.5">
              <li class="ps-1 text-sm text-gray-600 dark:text-neutral-400">
                Worked with a diverse range of clients, delivering tailored
                design solutions.
              </li>
              <li class="ps-1 text-sm text-gray-600 dark:text-neutral-400">
                Developed and maintained strong client relationships through
                effective communication and project management.
              </li>
              <li class="ps-1 text-sm text-gray-600 dark:text-neutral-400">
                Utilized tools such as Notion for project tracking, Mailchimp
                for email marketing designs, Slack for team collaboration, and
                GitHub for version control and project sharing.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
