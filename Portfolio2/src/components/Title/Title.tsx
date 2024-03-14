import styles from "./Title.module.scss";

interface CardProps {
  title: string;
  subtitle: string;
}

const Title = (props: CardProps) => {
  return (
    <>
      <h1>{props.title}</h1>
      <h3>{props.subtitle}</h3>
    </>
  );
};

export default Title;
