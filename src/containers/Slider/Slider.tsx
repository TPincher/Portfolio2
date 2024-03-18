import styles from "./Slider.module.scss";
import { Project } from "../../assets/Projects";
import Chip from "../../components/Chip/Chip";
import { IconContext } from "react-icons";
import { FaGithub } from "react-icons/fa";

const Slider = (props: Project) => {
  return (
    <div>
      <div className={styles.container}>
        <div>
          <h2>{props.title}</h2>
          <p>{props.details}</p>
          <p>{props.details && "Built using:"}</p>
          <p>{props.features}</p>
          <p className={styles.chipBox}>
            {props.stack &&
              props.stack.map((item: string) => {
                return <Chip content={item} />;
              })}
          </p>
          <IconContext.Provider value={{ color: "#096b90", size: "3em" }}>
            <a href={props.link} target="_blank">
              {props.link && <FaGithub />}
            </a>
          </IconContext.Provider>
        </div>
      </div>
    </div>
  );
};

export default Slider;
