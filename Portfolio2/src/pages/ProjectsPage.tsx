import { useEffect, useState } from "react";
import getProjects from "../assets/Projects";
import Title from "../components/Title/Title";
import Slider from "../containers/Slider/Slider";
import { Project } from "../assets/Projects";

const ProjectsPage = () => {
  const [projectData, setProjectData] = useState<Project[]>([
    { title: "", details: "", features: "", stack: "", link: "" },
  ]);

  useEffect(() => {
    const returnedData = getProjects();
    setProjectData(returnedData);
    console.log(projectData);
  }, []);

  return (
    <>
      {projectData.map}
      <Title
        title={"Projects Page"}
        subtitle={"Check out some of my projects"}
      />
      {projectData &&
        projectData.map((project: Project, id: number) => {
          return (
            <Slider
              key={id}
              title={project.title}
              details={project.details}
              features={project.features}
              stack={project.stack}
              link={project.link}
            />
          );
        })}
    </>
  );
};

export default ProjectsPage;
