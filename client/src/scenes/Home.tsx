import { NavLink } from "react-router";
import Button from "../components/button/Button";
import ExperienceCard from "../components/card/ExperienceCard";
import BlinkingCircle from "../components/ui/BlinkingCircle";
import SlideUpOnScroll from "../components/animations/SlideUpOnScroll";
import EducationCard from "../components/card/EducationCard";
import ScreenWipe from "../components/animations/ScreenWipe";
import profileImg from "../assets/images/profile.png";
import { FadeUp } from "../components/animations/FadeUp";
import { useProjects } from "../api/project/useProjects";
import ProjectCard from "../components/card/ProjectCard";
import ProjectSkeleton from "../components/skeleton/ProjectSkeleton";
import { IProject } from "../types/project";
import LocalTime from "../components/ui/LocalTime";
import BlogCard from "../components/card/BlogCard";
import {
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaUsers,
} from "react-icons/fa";
import { IoCall, IoTime } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { skills } from "../data/skills";
import { experiences } from "../data/experiences";
import { educations } from "../data/educations";
import { testimonials } from "../data/testimonials";
import { statistics } from "../data/statistics";
import { Helmet } from "react-helmet";
import config from "../utils/config";

const Home = () => {
  const { data, isLoading } = useProjects();

  return (
    <>
      <Helmet title={config.siteTitle} />
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
                    <h2 className="text-3xl text-gray-400 dark:text-white/70 mb-16">
                      Fullstack JavaScript Developer
                    </h2>
                  </div>

                  <div>
                    {/* <h4 className="text-xl mb-8 text-center">
                    Building elegant solutions for complex problems
                  </h4> */}
                  </div>
                  <div>
                    <div className="flex flex-col md:flex-row items-center gap-4">
                      <NavLink to={"/projects"}>
                        <Button variant="primary">View My Work</Button>
                      </NavLink>
                      <a href={"/#contact"}>
                        <Button variant="outlined" className="">
                          Get in Touch
                        </Button>
                      </a>
                      <NavLink to={"https://github.com/muh-arifulislam"}>
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
              {/* status widget  */}
              <SlideUpOnScroll>
                <div className="mb-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="bg-white/80 dark:bg-white/10 border border-transparent dark:border-slate-300/10 backdrop-blur-lg rounded-2xl p-4 shadow-sm">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-red-100 flex items-center justify-center rounded-full">
                          <FaLocationDot className="w-4 h-4 text-red-400" />
                        </div>
                        <div>
                          <p className="text-gray-400 dark:text-white/60">
                            Location
                          </p>
                          <p className="font-medium dark:text-white/80">
                            Cumilla, Bangladesh
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white/80 dark:bg-white/10 border border-transparent dark:border-slate-300/10 backdrop-blur-lg rounded-2xl p-4 shadow-sm">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-purple-100 flex items-center justify-center rounded-full">
                          <IoTime className="w-4 h-4 text-purple-600" />
                        </div>
                        <div>
                          <p className="text-gray-400 dark:text-white/60">
                            Local Time
                          </p>
                          <LocalTime />
                        </div>
                      </div>
                    </div>
                    <div className="bg-white/80 dark:bg-white/10 border border-transparent dark:border-slate-300/10 backdrop-blur-lg rounded-2xl p-4 shadow-sm">
                      <div className="flex items-center gap-3">
                        <BlinkingCircle />
                        <div>
                          <p className="text-gray-400 dark:text-white/60">
                            Availability
                          </p>
                          <p className="font-medium dark:text-white/80">
                            Available for hire
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white/80 dark:bg-white/10 border border-transparent dark:border-slate-300/10 backdrop-blur-lg rounded-2xl p-4 shadow-sm">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-blue-100 flex items-center justify-center rounded-full">
                          <FaUsers className="w-4 h-4 text-blue-600" />
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
                              <FaGithub className="w-5 h-5" />
                            </a>
                            <a
                              href="https://www.linkedin.com/in/muh-arifulislam/"
                              target="_blank"
                              className="text-gray-400 hover:text-gray-800 transition-colors"
                            >
                              <span className="sr-only">Linkedin</span>
                              <FaLinkedin className="w-5 h-5" />
                            </a>
                            <a
                              href="https://x.com/muh_arifulislam"
                              target="_blank"
                              className="text-gray-400 hover:text-gray-800 transition-colors"
                            >
                              <span className="sr-only">Twitter</span>
                              <FaTwitter className="w-5 h-5" />
                            </a>
                            <a
                              href="https://www.facebook.com/muh.arifulislam"
                              target="_blank"
                              className="text-gray-400 hover:text-gray-800 transition-colors"
                            >
                              <span className="sr-only">Facebook</span>
                              <FaFacebook className="w-5 h-5" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SlideUpOnScroll>
              {/* Statistics widget  */}
              <SlideUpOnScroll>
                <div className="mb-8">
                  <div className="bg-gradient-to-r from-blue-600 dark:from-blue-600/10 to-blue-800 dark:to-blue-800/10 rounded-3xl p-8 shadow-xl text-white dark:text-white/90 border border-transparent dark:border-slate-300/10">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                      <div className="text-center">
                        <span className="text-3xl mb-2 block">🚀</span>
                        <p className="text-4xl font-bold mb-1">
                          {statistics.projects}+
                        </p>
                        <p className="text-sm text-blue-100">
                          Project Completed
                        </p>
                      </div>
                      <div className="text-center">
                        <span className="text-3xl mb-2 block">👥</span>
                        <p className="text-4xl font-bold mb-1">
                          {statistics.clients}+
                        </p>
                        <p className="text-sm text-blue-100">Happy Clients</p>
                      </div>
                      <div className="text-center">
                        <span className="text-3xl mb-2 block">⭐</span>
                        <p className="text-4xl font-bold mb-1">
                          {statistics.gitStars}
                        </p>
                        <p className="text-sm text-blue-100">GitHub Stars</p>
                      </div>
                      <div className="text-center">
                        <span className="text-3xl mb-2 block">📚</span>
                        <p className="text-4xl font-bold mb-1">
                          {statistics.articles}
                        </p>
                        <p className="text-sm text-blue-100">Tech Articles</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SlideUpOnScroll>
              {/* Skills widget  */}
              <SlideUpOnScroll>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-white/80 dark:bg-[#1f1f1f] border border-transparent dark:border-slate-300/10 backdrop-blur-lg rounded-3xl p-6 shadow-xl">
                    <h3 className="text-2xl font-semibold mb-4 dark:text-white/90">
                      Skills
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      {skills.map(
                        (skill: {
                          icon: string;
                          name: string;
                          order: number;
                        }) => (
                          <div
                            key={skill.name + skill.order}
                            className="flex items-center justify-between p-3 hover:bg-gray-100 dark:hover:bg-gray-100/20 rounded-xl transition-colors"
                          >
                            <div className="flex items-center gap-3">
                              <span className="text-xl"> {skill?.icon}</span>
                              <span className="font-medium text-gray-800 dark:text-white/80">
                                {skill?.name}
                              </span>
                            </div>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                  <div className="bg-white/80 dark:bg-[#1f1f1f] border border-transparent dark:border-slate-300/10 backdrop-blur-lg rounded-3xl p-6 shadow-xl">
                    <div className="md:flex justify-between items-center mb-6">
                      <h3 className="text-2xl font-semibold text-blue-900 dark:text-white/90">
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
                      {isLoading && (
                        <>
                          <ProjectSkeleton />
                          <ProjectSkeleton />
                        </>
                      )}
                      {data?.data?.slice(0, 2)?.map((item: IProject) => (
                        <ProjectCard key={item?._id} data={item} />
                      ))}
                    </div>
                  </div>
                </div>
              </SlideUpOnScroll>
              {/* work experience  */}
              <SlideUpOnScroll>
                <div className="space-y-8 mb-8">
                  <div className="space-y-8">
                    <div className="bg-white/80 dark:bg-[#1f1f1f] border border-transparent dark:border-slate-300/10 backdrop-blur-lg rounded-3xl p-6 shadow-xl">
                      <h3 className="text-2xl font-semibold mb-6 dark:text-white/90">
                        Work Experience
                      </h3>
                      <div className="space-y-6">
                        {experiences.map((item) => (
                          <ExperienceCard key={item._id} data={item} />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </SlideUpOnScroll>
              {/* Education section  */}
              <SlideUpOnScroll>
                <div className="space-y-8 mb-8">
                  <div className="space-y-8">
                    <div className="bg-white/80 dark:bg-[#1f1f1f] border border-transparent dark:border-slate-300/10 backdrop-blur-lg rounded-3xl p-6 shadow-xl">
                      <h3 className="text-2xl font-semibold mb-6 dark:text-white/90">
                        Educations
                      </h3>
                      <div className="space-y-6">
                        {educations.map((data) => (
                          <EducationCard key={data._id} data={data} />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </SlideUpOnScroll>
              {/* Recent Blogs section  */}
              <SlideUpOnScroll>
                <div className="mb-8">
                  <div className="bg-white/80 dark:bg-[#1f1f1f] border border-transparent dark:border-slate-300/10 backdrop-blur-lg rounded-3xl p-6 shadow-xl">
                    <div className="md:flex justify-between items-center mb-6">
                      <h3 className="text-2xl font-semibold text-blue-900 dark:text-white/90">
                        Recent Blog Posts
                      </h3>
                      <NavLink
                        className={
                          "text-blue-600 hover:text-blue-800 transition-colors text-sm"
                        }
                        to={"/blogs"}
                      >
                        View all posts &rarr;
                      </NavLink>
                    </div>
                    <div className="space-y-6">
                      {/* {blogIsLoading && (
                      <>
                        <BlogSkeleton />
                        <BlogSkeleton />
                      </>
                    )}
                    {blogRes?.data?.splice(1, 3)?.map((item: IBlog) => (
                      <BlogCard key={item._id} />
                    ))} */}
                      <BlogCard />
                      <BlogCard />
                    </div>
                  </div>
                </div>
              </SlideUpOnScroll>
              {/* Testimonial section  */}
              <SlideUpOnScroll>
                <div className="space-y-8 mb-8">
                  <div className="bg-white/80 dark:bg-[#1f1f1f] border border-transparent dark:border-slate-300/10 backdrop-blur-lg rounded-3xl p-6 shadow-xl">
                    <h3 className="text-2xl font-semibold text-blue-900 mb-6 dark:text-white/90">
                      What People Say
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      {testimonials.map((testimonial, index) => (
                        <div
                          key={index}
                          className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-2xl dark:from-white/30 dark:to-white/3 0"
                        >
                          <div className="flex gap-4 items-start">
                            <img
                              src={testimonial.image}
                              alt={testimonial.name}
                              className="w-12 h-12 rounded-full object-cover"
                            />
                            <div className="flex-1">
                              <p className="text-blue-600/90 dark:text-white/90 mb-4">
                                {testimonial.text}
                              </p>
                              <div>
                                <p className="font-medium text-blue-900 dark:text-white">
                                  {testimonial.name}
                                </p>
                                <p className="text-sm text-blue-600 dark:text-white/80">
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
              {/* contact section  */}
              <SlideUpOnScroll>
                <div className="space-y-8 mb-8">
                  <section
                    id="contact"
                    className="bg-white/80 dark:bg-[#1f1f1f] backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-transparent dark:border-slate-300/10"
                  >
                    <h3 className="text-2xl font-semibold mb-6 dark:text-white/90">
                      Get in Touch
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                        <div className="bg-blue-50 dark:bg-blue-50/10 rounded-2xl p-6">
                          <h4 className="text-lg font-medium text-gray-500 dark:text-white/90 mb-4">
                            Contact Information
                          </h4>
                          <div className="space-y-4">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 flex items-center justify-center bg-blue-100 rounded-full">
                                <FaEnvelope className="w-5 h-5 text-blue-600" />
                              </div>
                              <a
                                href="mailto:muh.arifulislam.dev@gmail.com"
                                className="text-gray-500 dark:text-white/70 hover:text-blue-600 transition-colors w-full max-w-40 sm:max-w-full break-words"
                              >
                                muh.arifulislam.dev@gmail.com
                              </a>
                            </div>
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 flex items-center justify-center bg-blue-100 rounded-full">
                                <IoCall className="w-5 h-5 text-blue-600" />
                              </div>
                              <a
                                href="tel:+1234567890"
                                className="text-gray-500 dark:text-white/70 hover:text-blue-600 transition-colors"
                              >
                                +880 1306560747
                              </a>
                            </div>
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 flex items-center justify-center bg-blue-100 rounded-full">
                                <FaLocationDot className="w-5 h-5 text-blue-600" />
                              </div>
                              <span className="text-gray-500 dark:text-white/70">
                                Cumilla, Bangladesh
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="bg-gradient-to-br from-blue-50 dark:from-blue-50/10 to-purple-50 dark:to-purple-50/10 rounded-2xl p-6">
                          <h4 className="text-lg font-medium text-gray-500 dark:text-white/90 mb-4">
                            Office Hours
                          </h4>
                          <div className="space-y-2 text-gray-400 dark:text-white/70">
                            <p>Saturday - Thursday</p>
                            <p className="font-medium text-gray-500 dark:text-white/70">
                              9:00 AM - 6:00 PM UTC+6
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
    </>
  );
};

export default Home;
