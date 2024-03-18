import { useForm } from "react-hook-form";
import styles from "./ContactForm.module.scss";

const TaskForm = ({ submit }) => {
  const { register, handleSubmit } = useForm();

  return (
    <form className={styles.TaskForm} onSubmit={handleSubmit(submit)}>
      <h1>Contact me</h1>
      <div className={styles.formLine}>
        <label htmlFor="nameInput"></label>
        <input
          type="text"
          id="nameInput"
          placeholder="Your name"
          required
          {...register("Name")}
        />
      </div>

      <div className={styles.formLine}>
        <label htmlFor="emailInput"></label>
        <input
          type="text"
          id="emailInput"
          placeholder="Your email"
          required
          {...register("Email")}
        />
      </div>

      <div className={styles.formLine}>
        <label htmlFor="subjectInput"></label>
        <input
          type="text"
          id="subjectInput"
          placeholder="Subject"
          required
          {...register("Subject")}
        />
      </div>

      <div className={styles.formLine}>
        <label htmlFor="messageInput"></label>
        <textarea
          className={styles.formBox}
          id="messageInput"
          placeholder="Message"
          required
          {...register("Message")}
        />
      </div>
      <button className={styles.formButton}>Send</button>
    </form>
  );
};

export default TaskForm;
