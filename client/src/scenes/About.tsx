import { NavLink } from "react-router";

import villageImg from "../assets/images/village.jpg";
import SEO from "../components/SEO";
import config from "../utils/config";

const About = () => {
  return (
    <>
      <SEO
        title={`About Me - ${config.siteTitle}`}
        description="Learn more about Ariful Islam, a passionate full-stack developer specializing in modern web technologies."
        keywords="About Ariful Islam, Full-Stack Developer, Web Developer Bio, Software Engineer"
        ogTitle="About Me - Arif's Portfolio"
        ogDescription="Get to know more about me, my journey as a developer, and the technologies I specialize in."
        ogUrl={`${config.siteUrl}me`}
      />

      <div className="min-h-screen py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <NavLink
              to={"/"}
              className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
              Back to Home
            </NavLink>
            <h1 className="text-4xl font-bold text-blue-900 dark:text-white/90 mb-4">
              About Me
            </h1>
          </div>
          <div className="w-full max-w-3xl mx-auto">
            <div className="p-6">
              <img className="" src={villageImg} alt="" />
            </div>
            <div className="mb-12">
              <p className="text-lg font-medium text-slate-900/80 dark:text-white/80 leading-6 mb-6">
                Hey, I'm Arif! I've been making websites since 2022 and I
                currently work as a fullstack software engineer. I like working
                out, playing video games, and reading.
              </p>
              <p className="text-lg font-medium text-slate-900/80 dark:text-white/80 leading-6 mb-6">
                Welcome to my spot on the web for writing, projects, tutorials,
                art, and anything else I want to put out there. On the site,
                you'll find my notes and all the technical articles I've written
                over the years. Check out the projects page to see a highlight
                of my open-source work.
              </p>
              <p className="text-lg font-medium text-slate-900/80 dark:text-white/80 leading-6 mb-6">
                You can contact me by email at hello at{" "}
                <span className="leading-none text-blue-600 border-b-2 border-transparent hover:border-blue-600">
                  muh.arifulislam.dev@gmail.com
                </span>{" "}
                to say hi! I always appreciate meeting new people.
              </p>
            </div>
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-4">Contact</h2>
              <h4 className="mb-4 text-lg font-medium text-slate-900/80 dark:text-white/80">
                Send me an email to say hi, or connect via the socials.
              </h4>
              <ul className="list-disc px-4 space-y-2">
                <li>
                  <p className="font-bold text-lg">
                    Email: muh.arifulislam.dev@gmail.com
                  </p>
                </li>
                <li>
                  <a
                    href="https://github.com/muh-arifulislam"
                    target="_blank"
                    className="text-lg font-semibold leading-none border-b-2 border-transparent hover:border-blue-900 text-blue-900 dark:text-gray-50"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/muh-arifulislam/"
                    target="_blank"
                    className="text-lg font-semibold leading-none border-b-2 border-transparent hover:border-blue-900 text-blue-900 dark:text-gray-50"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://x.com/muh_arifulislam"
                    target="_blank"
                    className="text-lg font-semibold leading-none border-b-2 border-transparent hover:border-blue-900 text-blue-900 dark:text-gray-50"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/muh.arifulislam"
                    target="_blank"
                    className="text-lg font-semibold leading-none border-b-2 border-transparent hover:border-blue-900 text-blue-900 dark:text-gray-50"
                  >
                    Facebook
                  </a>
                </li>
              </ul>
            </div>
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-4">What I'm Doing Now</h2>
              <h4 className="text-lg font-medium text-slate-900/80 dark:text-white/80 leading-6 mb-6 italic">
                Updated March 1st, 2025
              </h4>
              <ul className="list-disc px-4 space-y-2">
                <li>
                  <p className="text-lg font-semibold text-slate-900/80 dark:text-gray-50">
                    Working as Freelancer
                  </p>
                </li>
                {/* <li className="text-lg font-semibold text-slate-900/80 dark:text-gray-50">
                <p>Studying History and Philosophy</p>
              </li> */}
              </ul>
            </div>
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-4">Miscellaneous</h2>
              <ul className="list-disc px-4 space-y-2">
                <li>
                  <a
                    href="https://drive.google.com/file/d/1DoeIitDpUL1PkdSd0ri1yTYu7wfcxxxE/view?usp=drive_link"
                    target="_blank"
                    className="text-lg font-semibold leading-none border-b-2  border-transparent hover:border-blue-900 text-blue-900 dark:text-gray-50"
                  >
                    Resume
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
