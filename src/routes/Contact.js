import Navbar from "../components/Nav/Navbar";
import HomeHero from "../components/HomeHero";
import AboutImg from "../assets/2.jpg";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer/Footer";

function Contact() {
  return (
    <>
      <Navbar />
      <HomeHero
        cName="hero-mid"
        heroImg={AboutImg}
        title="Contact"
        btnClass="hide"
      />
      <ContactForm />
      {/* <Footer /> */}
    </>
  );
}

export default Contact;
