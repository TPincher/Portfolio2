import ContactForm from "../components/ContactForm/ContactForm";
import Title from "../components/Title/Title";
import styles from "./PageStyles.module.scss";

const ContactPage = () => {
  return (
    <main className={styles.allPages}>
      <Title title={"Contact"} subtitle={"Let's chat!"} />
      <ContactForm submit={undefined} />
    </main>
  );
};

export default ContactPage;
