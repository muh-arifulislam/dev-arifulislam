import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./scenes/Home";
import About from "./scenes/About";
import Blogs from "./scenes/Blogs";
import Projects from "./scenes/Projects";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="blogs">
          <Route index element={<Blogs />} />
        </Route>
        <Route path="projects">
          <Route index element={<Projects />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
