import { useEffect } from "react";
import getProjects from "../assets/Projects";
import Title from "../components/Title/Title";
import Slider from "../containers/Slider/Slider";

const ProjectsPage = () => {
  useEffect(() => {
    getProjects();
  }, []);

  return (
    <>
      <Title
        title={"Projects Page"}
        subtitle={"Check out some of my projects"}
      />
      <Slider />
      <Slider />
      <Slider />
      <Slider />
    </>
  );
};

export default ProjectsPage;
