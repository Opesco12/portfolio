import { createContext, useEffect, useState } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

import { projects } from "./projects";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ProjectContext = createContext();

const ProjectsProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () =>
      setTimeout(() => {
        setLoading(false);
      }, 1500);
    window.addEventListener("load", handleLoad);

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  if (loading)
    return (
      <div className="h-screen flex flex-col ">
        <Navbar />
        <DotLottieReact
          src="https://lottie.host/a8dc4593-eab4-4622-901b-115222d3e649/ixutwflHcp.lottie"
          loop
          autoplay
        />
        <Footer />
      </div>
    );

  return (
    <ProjectContext.Provider value={projects}>
      {children}
    </ProjectContext.Provider>
  );
};

export { ProjectsProvider, ProjectContext };
