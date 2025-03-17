import { NavLink } from "react-router";

import villageImg from "../assets/images/village.jpg";

const About = () => {
  return (
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
              Hey, I'm Tania! I've been making websites since 1998 and I
              currently work as a principal software engineer. I also have a DDR
              machine in the basement, two cats, and a wonderful partner. I like
              working out, playing video games, and reading.
            </p>
            <p className="text-lg font-medium text-slate-900/80 dark:text-white/80 leading-6 mb-6">
              Welcome to my spot on the web for writing, projects, tutorials,
              art, and anything else I want to put out there. On the site,
              you'll find my notes and all the technical articles I've written
              over the years. Check out the projects page to see a highlight of
              my open-source work.
            </p>
            <p className="text-lg font-medium text-slate-900/80 dark:text-white/80 leading-6 mb-6">
              My site has no ads, no affiliate links, no tracking or analytics,
              no sponsored posts, and no paywall. It's a space for
              self-expression and to share what I've learned with the world. I
              hope the site inspires others to make their own creative corner on
              the web in the uphill battle against the enshittification of the
              internet.
            </p>
            <p className="text-lg font-medium text-slate-900/80 dark:text-white/80 leading-6 mb-6">
              You can contact me by email at hello at arifulislam20234@gmail.com
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
                  Email: hello@taniarascia.com
                </p>
              </li>
              <li>
                <a
                  href="/"
                  className="text-lg font-semibold leading-none border-b-2 border-transparent hover:border-blue-900 text-blue-900 dark:text-gray-50"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-lg font-semibold leading-none border-b-2 border-transparent hover:border-blue-900 text-blue-900 dark:text-gray-50"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-lg font-semibold leading-none border-b-2 border-transparent hover:border-blue-900 text-blue-900 dark:text-gray-50"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="/"
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
                  Working full-time
                </p>
              </li>
              <li className="text-lg font-semibold text-slate-900/80 dark:text-gray-50">
                <p>Playing Marvel Rivals</p>
              </li>
            </ul>
          </div>
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Miscellaneous</h2>
            <ul className="list-disc px-4 space-y-2">
              <li>
                <a
                  href="/"
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
  );
};

export default About;
