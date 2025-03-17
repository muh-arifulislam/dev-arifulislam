import { NavLink } from "react-router";
import Button from "../components/Button";
import ExperienceCard from "../components/Card/ExperienceCard";
import BlinkingCircle from "../components/UI/BlinkingCircle";
import SlideUpOnScroll from "../components/animations/SlideUpOnScroll";
import EducationCard from "../components/Card/EducationCard";
import ScreenWipe from "../components/animations/SceenWipe";

import profileImg from "../assets/images/profile.png";
import { FadeUp } from "../components/animations/FadeUp";

const Home = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CTO at TechCorp",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&auto=format&fit=crop&q=80",
      text: "John is an exceptional developer who consistently delivers high-quality work. His attention to detail and problem-solving skills are outstanding.",
    },
    {
      name: "Michael Chen",
      position: "Engineering Manager at InnovateLabs",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&auto=format&fit=crop&q=80",
      text: "Working with John was a pleasure. He not only delivered the project on time but also provided valuable insights that improved our overall architecture.",
    },
  ];

  const educations = [
    {
      _id: "edu-01",
      title: "Diploma In Engineering in Computer Science & Technology",
      institute: "Cumilla Polytechnic Institute",
      address: "Cumilla",
      durations: {
        from: "2018",
        to: "2023",
      },
      events: [
        "Dean's List all semesters",
        "Led Programming Club",
        "Completed honors thesis on distributed systems",
      ],
    },
  ];

  return (
    <div className="">
      <ScreenWipe />
      <div>
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="container mx-auto px-4 z-10">
            <FadeUp direction="up" delay={1.2}>
              <div className="flex flex-col items-center">
                <div className="w-32 h-32 rounded-full border-4 border-white/50 shadow-xl mb-6 overflow-hidden bg-gradient-br from-blue-100 to-blue-50">
                  <img
                    src={profileImg}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="text-center">
                  <h1 className="text-6xl font-bold mb-2">Ariful Islam</h1>
                  <h2 className="text-3xl text-gray-400 mb-16">
                    Fullstack JavaScript Developer
                  </h2>
                </div>

                <div>
                  <h4 className="text-xl mb-8 text-center">
                    Building elegant solutions for complex problems
                  </h4>
                </div>
                <div>
                  <div className="flex flex-col md:flex-row items-center gap-4">
                    <NavLink to={"/about"}>
                      <Button variant="primary">View My Work</Button>
                    </NavLink>
                    <a href={"/#contact"}>
                      <Button variant="outlined" className="">
                        Get in Touch
                      </Button>
                    </a>
                    {/* <NavLink to={"/#contact"}>
                      <Button variant="outlined" className="">
                        Get in Touch
                      </Button>
                    </NavLink> */}
                    <NavLink to={"/about"}>
                      <Button variant="secondary">
                        Give me start on GitHub
                      </Button>
                    </NavLink>
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>
        </section>

        <section className="pb-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <SlideUpOnScroll>
              <div className="mb-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-4 shadow-sm">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-red-100 flex items-center justify-center rounded-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-4 h-4 text-red-600"
                        >
                          <path
                            fillRule="evenodd"
                            d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </div>
                      <div>
                        <p className="text-gray-400">Location</p>
                        <p className="font-medium">Cumilla, Bangladesh</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-4 shadow-sm">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-purple-100 flex items-center justify-center rounded-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-4 h-4 text-purple-600"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </div>
                      <div>
                        <p className="text-gray-400">Local Time</p>
                        <p className="font-medium">GST 05:38 AM</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-4 shadow-sm">
                    <div className="flex items-center gap-3">
                      <BlinkingCircle />
                      <div>
                        <p className="text-gray-400">Availability</p>
                        <p className="font-medium">Available for hire</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-4 shadow-sm">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-100 flex items-center justify-center rounded-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-4 h-4 text-blue-600"
                        >
                          <path
                            fillRule="evenodd"
                            d="M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM15.75 9.75a3 3 0 116 0 3 3 0 01-6 0zM2.25 9.75a3 3 0 116 0 3 3 0 01-6 0zM6.31 15.117A6.745 6.745 0 0112 12a6.745 6.745 0 016.709 7.498.75.75 0 01-.372.568A12.696 12.696 0 0112 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 01-.372-.568 6.745 6.745 0 011.019-4.381z"
                            clipRule="evenodd"
                          ></path>
                          <path d="M5.082 14.254a8.287 8.287 0 00-1.308 5.135 9.687 9.687 0 01-1.764-.44l-.115-.04a.563.563 0 01-.373-.487l-.01-.121a3.75 3.75 0 013.57-4.047zM20.226 19.389a8.287 8.287 0 00-1.308-5.135 3.75 3.75 0 013.57 4.047l-.01.121a.563.563 0 01-.373.486l-.115.04c-.567.2-1.156.349-1.764.441z"></path>
                        </svg>
                      </div>
                      <div>
                        <p className="text-gray-400">Social Media</p>
                        <div className="flex gap-2 font-medium">
                          <a
                            href="http://github.com/muh-arifulislam"
                            target="_blank"
                            className="text-gray-400 hover:text-gray-800 transition-colors"
                          >
                            <span className="sr-only">Github</span>
                            <svg
                              className="w-5 h-5"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                clipRule="evenodd"
                              ></path>
                            </svg>
                          </a>
                          <a
                            href="https://www.linkedin.com/in/muh-arifulislam/"
                            target="_blank"
                            className="text-gray-400 hover:text-gray-800 transition-colors"
                          >
                            <span className="sr-only">Linkedin</span>
                            <svg
                              className="w-5 h-5"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </a>
                          <a
                            href="https://x.com/muh_arifulislam"
                            target="_blank"
                            className="text-gray-400 hover:text-gray-800 transition-colors"
                          >
                            <span className="sr-only">Twitter</span>
                            <svg
                              className="w-5 h-5"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                              aria-hidden="true"
                            >
                              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                            </svg>
                          </a>
                          <a
                            href="https://www.facebook.com/muh.arifulislam"
                            target="_blank"
                            className="text-gray-400 hover:text-gray-800 transition-colors"
                          >
                            <span className="sr-only">Facebook</span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="w-5 h-5"
                            >
                              <rect
                                width="24"
                                height="24"
                                rx="5"
                                fill="currentColor"
                              />
                              <path
                                d="M15 8.5H13.75C12.9216 8.5 12.5 8.92157 12.5 9.75V11H15L14.5 13H12.5V19H10V13H8V11H10V9.5C10 7.567 11.567 6 13.5 6H15V8.5Z"
                                fill="white"
                              />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SlideUpOnScroll>
            <SlideUpOnScroll>
              <div className="mb-8">
                <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-8 shadow-xl text-white">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div className="text-center">
                      <span className="text-3xl mb-2 block">🚀</span>
                      <p className="text-4xl font-bold mb-1">50+</p>
                      <p className="text-sm text-blue-100">Project Completed</p>
                    </div>
                    <div className="text-center">
                      <span className="text-3xl mb-2 block">👥</span>
                      <p className="text-4xl font-bold mb-1">30+</p>
                      <p className="text-sm text-blue-100">Happy Clients</p>
                    </div>
                    <div className="text-center">
                      <span className="text-3xl mb-2 block">⭐</span>
                      <p className="text-4xl font-bold mb-1">100+</p>
                      <p className="text-sm text-blue-100">GitHub Stars</p>
                    </div>
                    <div className="text-center">
                      <span className="text-3xl mb-2 block">📚</span>
                      <p className="text-4xl font-bold mb-1">15+</p>
                      <p className="text-sm text-blue-100">Tech Articles</p>
                    </div>
                  </div>
                </div>
              </div>
            </SlideUpOnScroll>
            <SlideUpOnScroll>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-6 shadow-xl">
                  <h3 className="text-2xl font-semibold mb-4">Skills</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 hover:bg-gray-100 rounded-xl transition-colors">
                      <div className="flex items-center gap-3">
                        <span className="text-xl">⚡</span>
                        <span className="font-medium text-gray-800">
                          JavaScript
                        </span>
                      </div>
                      <span className="px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-700">
                        Expert
                      </span>
                    </div>
                    <div className="flex items-center justify-between p-3 hover:bg-gray-100 rounded-xl transition-colors">
                      <div className="flex items-center gap-3">
                        <span className="text-xl">📘</span>
                        <span className="font-medium text-gray-800">
                          TypeScript
                        </span>
                      </div>
                      <span className="px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-700">
                        Expert
                      </span>
                    </div>
                    <div className="flex items-center justify-between p-3 hover:bg-gray-100 rounded-xl transition-colors">
                      <div className="flex items-center gap-3">
                        <span className="text-xl">⚛️</span>
                        <span className="font-medium text-gray-800">React</span>
                      </div>
                      <span className="px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-700">
                        Expert
                      </span>
                    </div>
                    <div className="flex items-center justify-between p-3 hover:bg-gray-100 rounded-xl transition-colors">
                      <div className="flex items-center gap-3">
                        <span className="text-xl">🟢</span>
                        <span className="font-medium text-gray-800">
                          Node.js
                        </span>
                      </div>
                      <span className="px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-700">
                        Expert
                      </span>
                    </div>
                    <div className="flex items-center justify-between p-3 hover:bg-gray-100 rounded-xl transition-colors">
                      <div className="flex items-center gap-3">
                        <span className="text-xl">🐍</span>
                        <span className="font-medium text-gray-800">
                          Python
                        </span>
                      </div>
                      <span className="px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-700">
                        Expert
                      </span>
                    </div>
                    <div className="flex items-center justify-between p-3 hover:bg-gray-100 rounded-xl transition-colors">
                      <div className="flex items-center gap-3">
                        <span className="text-xl">💾</span>
                        <span className="font-medium text-gray-800">
                          MongoDB
                        </span>
                      </div>
                      <span className="px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-700">
                        Expert
                      </span>
                    </div>
                  </div>
                </div>
                <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-6 shadow-xl">
                  <div className="md:flex justify-between items-center mb-6">
                    <h3 className="text-2xl font-semibold text-blue-900">
                      Featured Projects
                    </h3>
                    <NavLink
                      className={
                        "text-blue-600 hover:text-blue-800 transition-colors text-sm"
                      }
                      to={"/projects"}
                    >
                      View all projects &rarr;
                    </NavLink>
                  </div>
                  <div className="grid gap-6">
                    <a
                      href="#"
                      className="block bg-gradient-to-br from-blue-50 to-white p-4 sm:p-6 rounded-2xl hover:shadow-lg transition-all duration-300"
                    >
                      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                        <img
                          src="https://images.unsplash.com/photo-1587560699334-cc4ff634909a?w=800&h=400&fit=crop"
                          alt=""
                          className="w-full sm:w-24 h-48 sm:h-24 rounded-xl object-cover"
                        />
                        <div className="flex-1">
                          <h4 className="text-xl font-medium text-blue-900 mb-2">
                            AI Chat Application
                          </h4>
                          <p className="mb-3 text-blue-600">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Odio corrupti, atque nam omnis eius
                            blanditiis.
                          </p>
                          <div className="flex flex-wrap gap-2">
                            <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                              React
                            </span>
                            <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                              React
                            </span>
                            <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                              React
                            </span>
                            <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                              React
                            </span>
                          </div>
                        </div>
                      </div>
                    </a>
                    <a
                      href="#"
                      className="block bg-gradient-to-br from-blue-50 to-white p-4 sm:p-6 rounded-2xl hover:shadow-lg transition-all duration-300"
                    >
                      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                        <img
                          src="https://images.unsplash.com/photo-1587560699334-cc4ff634909a?w=800&h=400&fit=crop"
                          alt=""
                          className="w-full sm:w-24 h-48 sm:h-24 rounded-xl object-cover"
                        />
                        <div className="flex-1">
                          <h4 className="text-xl font-medium text-blue-900 mb-2">
                            AI Chat Application
                          </h4>
                          <p className="mb-3 text-blue-600">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Odio corrupti, atque nam omnis eius
                            blanditiis.
                          </p>
                          <div className="flex flex-wrap gap-2">
                            <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                              React
                            </span>
                            <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                              React
                            </span>
                            <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                              React
                            </span>
                            <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                              React
                            </span>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </SlideUpOnScroll>
            <SlideUpOnScroll>
              <div className="space-y-8 mb-8">
                <div className="space-y-8">
                  <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-6 shadow-xl">
                    <h3 className="text-2xl font-semibold mb-6">
                      Work Experience
                    </h3>
                    <div className="space-y-6">
                      <ExperienceCard />
                      <ExperienceCard />
                    </div>
                  </div>
                </div>
              </div>
            </SlideUpOnScroll>
            {/* Education section  */}
            <SlideUpOnScroll>
              <div className="space-y-8 mb-8">
                <div className="space-y-8">
                  <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-6 shadow-xl">
                    <h3 className="text-2xl font-semibold mb-6">Educations</h3>
                    <div className="space-y-6">
                      {educations.map((data) => (
                        <EducationCard data={data} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </SlideUpOnScroll>
            {/* Recent Blogs section  */}
            <SlideUpOnScroll>
              <div className="mb-8">
                <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-6 shadow-xl">
                  <div className="md:flex justify-between items-center mb-6">
                    <h3 className="text-2xl font-semibold text-blue-900">
                      Recent Blog Posts
                    </h3>
                    <NavLink
                      className={
                        "text-blue-600 hover:text-blue-800 transition-colors text-sm"
                      }
                      to={"/projects"}
                    >
                      View all posts &rarr;
                    </NavLink>
                  </div>
                  <div className="space-y-6">
                    <article className="group">
                      <a
                        href="#"
                        className="block p-4 rounded-2xl hover:bg-blue-50/50 transition-all duration-300"
                      >
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                          <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-xs font-medium w-fit">
                            Development
                          </span>
                          <div className="flex items-center gap-2 text-sm text-blue-400">
                            <span>2024-05-15</span>
                            <span>•</span>
                            <span>5 min read</span>
                          </div>
                        </div>
                        <h4 className="text-lg font-medium text-blue-900 mb-2 group-hover:text-blue-600 transition-colors">
                          Building Scalable Web Application
                        </h4>
                        <p className="text-blue-600/80 text-sm line-clamp-2">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Fugit, officiis...
                        </p>
                      </a>
                    </article>
                  </div>
                </div>
              </div>
            </SlideUpOnScroll>
            {/* Testimonial section  */}
            <SlideUpOnScroll>
              <div className="space-y-8 mb-8">
                <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-6 shadow-xl">
                  <h3 className="text-2xl font-semibold text-blue-900 mb-6">
                    What People Say
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    {testimonials.map((testimonial, index) => (
                      <div
                        key={index}
                        className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-2xl"
                      >
                        <div className="flex gap-4 items-start">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-12 h-12 rounded-full object-cover"
                          />
                          <div className="flex-1">
                            <p className="text-blue-600/90 mb-4">
                              {testimonial.text}
                            </p>
                            <div>
                              <p className="font-medium text-blue-900">
                                {testimonial.name}
                              </p>
                              <p className="text-sm text-blue-600">
                                {testimonial.position}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </SlideUpOnScroll>

            <SlideUpOnScroll>
              <div className="space-y-8 mb-8">
                <section
                  id="contact"
                  className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-xl"
                >
                  <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Contact Form */}
                    <div className="space-y-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-400 mb-2"
                        >
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          className="w-full px-4 py-3 rounded-xl bg-white/50 border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-400 mb-2"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="w-full px-4 py-3 rounded-xl bg-white/50 border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                          placeholder="your@email.com"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="message"
                          className="block text-sm font-medium text-gray-400 mb-2"
                        >
                          Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={4}
                          className="w-full px-4 py-3 rounded-xl bg-white/50 border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors resize-none"
                          placeholder="Your message..."
                        ></textarea>
                      </div>

                      <SlideUpOnScroll delay={0.2}>
                        <button
                          type="submit"
                          className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium px-6 py-3 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-lg hover:shadow-xl"
                        >
                          Send Message
                        </button>
                      </SlideUpOnScroll>
                    </div>

                    {/* Contact Information */}
                    <div className="space-y-6">
                      <div className="bg-blue-50 rounded-2xl p-6">
                        <h4 className="text-lg font-medium text-gray-500 mb-4">
                          Contact Information
                        </h4>
                        <div className="space-y-4">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 flex items-center justify-center bg-blue-100 rounded-full">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-5 h-5 text-blue-600"
                              >
                                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z"></path>
                                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z"></path>
                              </svg>
                            </div>
                            <a
                              href="mailto:contact@example.com"
                              className="text-gray-500 hover:text-blue-600 transition-colors"
                            >
                              contact@example.com
                            </a>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 flex items-center justify-center bg-blue-100 rounded-full">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-5 h-5 text-blue-600"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </div>
                            <a
                              href="tel:+1234567890"
                              className="text-gray-500 hover:text-blue-600 transition-colors"
                            >
                              +1 (234) 567-890
                            </a>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 flex items-center justify-center bg-blue-100 rounded-full">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-5 h-5 text-blue-600"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </div>
                            <span className="text-gray-500">
                              San Francisco, CA
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6">
                        <h4 className="text-lg font-medium text-gray-500 mb-4">
                          Office Hours
                        </h4>
                        <div className="space-y-2 text-gray-400">
                          <p>Saturday - Thursday</p>
                          <p className="font-medium text-gray-500">
                            9:00 AM - 6:00 PM GMT+6
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </SlideUpOnScroll>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
