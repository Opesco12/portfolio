import { Whatsapp } from "iconsax-react";

const Profile = () => {
  return (
    <>
      {" "}
      <div className="flex items-center gap-x-3">
        <div className="shrink-0">
          <img
            className="shrink-0 size-16 rounded-full"
            src="https://lh3.googleusercontent.com/a/ACg8ocKT-_5BOR4BNFDYAXbiqQ_MYdNibnPHEGbFQDbb2ihmikJQVnwW=s544-p-k-rw-no"
            alt="Avatar"
          />
        </div>

        <div
          data-aos="zoom-in"
          className="grow"
        >
          <h1 className="text-lg font-medium text-gray-800 dark:text-neutral-200">
            Emmanuel Oyeleke
          </h1>
          <p className="text-sm text-gray-600 dark:text-neutral-400">
            Frontend Developer | Web (React) & Mobile (React Native)
          </p>
        </div>
      </div>
      <div
        className="mt-8"
        data-aos="zoom-in"
      >
        <p className="text-sm text-gray-600 dark:text-neutral-400">
          I’m a frontend developer passionate about creating intuitive and
          efficient user interfaces for both web and mobile platforms.I focus on
          transforming UI/UX designs into functional and engaging digital
          experiences using React(Web) and React Native(Mobile). I’m dedicated
          to continuous learning and staying current with evolving web and
          mobile development trends, ensuring that my work remains innovative
          and impactful.
        </p>

        <ul class="mt-5 flex flex-col gap-y-3">
          <li class="flex items-center gap-x-2.5">
            <svg
              class="shrink-0 size-3.5 text-gray-500 dark:text-neutral-500"
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
              <rect
                width="20"
                height="16"
                x="2"
                y="4"
                rx="2"
              />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            <a
              class="text-[13px] text-gray-500 underline hover:text-gray-800 hover:decoration-2 focus:outline-none focus:decoration-2 dark:text-neutral-500 dark:hover:text-neutral-400"
              href="#"
            >
              oyelekemmanuel@gmail.com
            </a>
          </li>

          <li class="flex items-center gap-x-2.5">
            <svg
              class="shrink-0 size-3.5 text-gray-500 dark:text-neutral-500"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.1881 10.1624L22.7504 0H20.7214L13.2868 8.82385L7.34878 0H0.5L9.47944 13.3432L0.5 24H2.5291L10.3802 14.6817L16.6512 24H23.5L14.1881 10.1624ZM11.409 13.4608L3.26021 1.55962H6.37679L20.7224 22.5113H17.6058L11.409 13.4613V13.4608Z"
                fill="currentColor"
              />
            </svg>
            <a
              class="text-[13px] text-gray-500 underline hover:text-gray-800 hover:decoration-2 focus:outline-none focus:decoration-2 dark:text-neutral-500 dark:hover:text-neutral-400"
              href="https://x.com/Opesco123"
              target="_blank"
            >
              @Opesco123
            </a>
          </li>

          <li class="flex items-center gap-x-2.5">
            <Whatsapp
              className="text-gray-500 dark:text-neutral-500"
              size="17"
              color="currentColor"
            />

            <a
              class="text-[13px] text-gray-500 underline hover:text-gray-800 hover:decoration-2 focus:outline-none focus:decoration-2 dark:text-neutral-500 dark:hover:text-neutral-400"
              href="https://wa.me/+2348145298341"
              target="_blank"
            >
              +2348145298341
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Profile;
