import { useForm, ValidationError } from "@formspree/react";
import styles from "./ContactForm.module.scss";
import { toast } from "react-toastify";

const TaskForm = () => {
  const [state, handleSubmit] = useForm("xpzvyneo");
  if (state.succeeded) {
    return (
      <div className={styles.response}>
        <h2>Thankyou!</h2>
        <h2> I'll be in contact shortly.</h2>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={styles.taskForm}>
      <div className={styles.formLine}>
        <label htmlFor="name">Name</label>
        <input id="name" type="text" name="name" required />
        <ValidationError prefix="Name" field="name" errors={state.errors} />
      </div>

      <div className={styles.formLine}>
        <label htmlFor="email">Email Address</label>
        <input id="email" type="email" name="email" required />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>

      <div className={styles.formLine}>
        <label htmlFor="message">Message</label>
        <textarea
          className={styles.formBox}
          id="message"
          name="message"
          required
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </div>

      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
};

export default TaskForm;
