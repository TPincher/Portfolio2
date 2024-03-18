import ContactForm from "../components/ContactForm/ContactForm";
import styles from "./PageStyles.module.scss";

const ContactPage = () => {
  const submit = (data: any) => {
    console.log(data);
  };

  return (
    <main>
      <section className={styles.allPages}>
        <ContactForm submit={submit} />
      </section>
    </main>
  );
};

export default ContactPage;
