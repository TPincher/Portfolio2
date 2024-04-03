import { useEffect, useState } from "react";
import { getProjects } from "../assets/Projects";
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
    title: " ◄ Click on a project for more information",
    details: "",
    features: "",
    stack: [],
    link: "",
    splash: "",
    images: [],
  });

  function paneClick(item: Project) {
    setSelectedProject(item);
  }

  return (
    <main>
      <section className={styles.allPages}>
        <div className={styles.imageBox}>
          {projectData &&
            projectData.map((item: Project, id: number) => {
              return (
                <img
                  onClick={() => paneClick(item)}
                  key={id}
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
      </section>
    </main>
  );
};

export default ProjectsPage;
