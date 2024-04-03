import ContactForm from "../components/ContactForm/ContactForm";
import styles from "./PageStyles.module.scss";

const ContactPage = () => {
  return (
    <main>
      <section className={styles.allPages}>
        <ContactForm />
      </section>
    </main>
  );
};

export default ContactPage;
