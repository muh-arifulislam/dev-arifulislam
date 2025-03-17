import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./scenes/Home";
import About from "./scenes/About";
import Blogs from "./scenes/Blogs";
import Projects from "./scenes/Projects";
import { AnimatePresence } from "framer-motion";
import Navbar from "./layout/Navbar";

function App() {
  return (
    <>
      <AnimatePresence>
        <header className="fixed w-full left-0 top-0 h-14 z-50">
          <Navbar />
        </header>
        <div className="pt-14">
          <Routes>
            <Route index element={<Home />} />
            <Route path="me" element={<About />} />
            <Route path="blogs">
              <Route index element={<Blogs />} />
            </Route>
            <Route path="projects">
              <Route index element={<Projects />} />
            </Route>
          </Routes>
        </div>
      </AnimatePresence>
    </>
  );
}

export default App;
