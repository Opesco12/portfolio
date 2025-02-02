import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Aos from "aos";
import "./App.css";
import "aos/dist/aos.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProjectsPage from "./screens/Project";

import ProjectDetail from "./screens/ProjectDetails";
import Home from "./screens/Home";

import { ProjectsProvider } from "./context/ProjectsContext";
import NotFound from "./screens/NotFound";

function App() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);
  return (
    <ProjectsProvider>
      <div className="h-screen ">
        <Navbar />

        <main
          id="content"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          <div className="w-full max-w-2xl mx-auto pt-4 md:pt-8 px-4 sm:px-6 lg:px-8">
            <Router>
              <Routes>
                <Route
                  path="/"
                  element={<Home />}
                />
                <Route
                  path="/projects"
                  element={<ProjectsPage />}
                />
                <Route
                  path="/project/:id"
                  element={<ProjectDetail />}
                />

                <Route
                  path="*"
                  element={<NotFound />}
                />
              </Routes>
            </Router>
          </div>
        </main>
        <Footer />
      </div>
    </ProjectsProvider>
  );
}

export default App;
