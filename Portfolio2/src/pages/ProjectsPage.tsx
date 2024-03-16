import { useEffect, useState } from "react";
import { getProjects } from "../assets/Projects";
import Title from "../components/Title/Title";
import Slider from "../containers/Slider/Slider";
import { Project } from "../assets/Projects";
import styles from "./PageStyles.module.scss";

const ProjectsPage = () => {
  const [projectData, setProjectData] = useState<Project[]>([
    {
      title: "",
      details: "",
      features: "",
      stack: [""],
      link: "",
      splash: "",
      images: [],
    },
  ]);

  useEffect(() => {
    const returnedData = getProjects();
    setProjectData(returnedData);
  }, []);

  const [selectedProject, setSelectedProject] = useState<Project>({
    title: "Select a project from above to get more information",
    details: "",
    features: "",
    stack: [],
    link: "",
    splash: "",
    images: [],
  });

  function paneClick(item: Project) {
    console.log(item);
    setSelectedProject(item);
    console.log(selectedProject);
  }

  return (
    <main className={styles.allPages}>
      <Title
        title={"Projects Page"}
        subtitle={"Check out some of my projects"}
      />
      <div className={styles.imageBox}>
        {projectData &&
          projectData.map((item: Project) => {
            return (
              <img
                onClick={() => paneClick(item)}
                src={item.splash}
                className={styles.images}
              />
            );
          })}
      </div>
      <Slider
        title={selectedProject.title}
        details={selectedProject.details}
        features={selectedProject.features}
        stack={selectedProject.stack}
        link={selectedProject.link}
        images={selectedProject.images}
      />
    </main>
  );
};

export default ProjectsPage;
