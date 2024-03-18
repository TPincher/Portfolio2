import { useForm } from "react-hook-form";
import styles from "./ContactForm.module.scss";

const TaskForm = ({ submit }) => {
  const { register, handleSubmit } = useForm();

  return (
    <form className={styles.TaskForm} onSubmit={handleSubmit(submit)}>
      <div className={styles.TaskLine}>
        <label htmlFor="titleInput">Task Name</label>
        <input
          type="text"
          id="titleInput"
          {...register("title")}
          className={styles.Field}
        />
      </div>

      <div className={styles.TaskLine}>
        <label>Category</label>
        <input
          type="text"
          id="titleInput"
          {...register("title")}
          className={styles.Field}
        />
      </div>

      <div className={styles.TaskLine}>
        <label>Category</label>
        <input
          type="text"
          id="titleInput"
          {...register("title")}
          className={styles.Field}
        />
      </div>

      <div className={styles.TaskLine}>
        <label>Category</label>
        <input
          type="text"
          id="titleInput"
          {...register("title")}
          className={styles.Field}
        />
      </div>
      <button>Send</button>
    </form>
  );
};

export default TaskForm;
