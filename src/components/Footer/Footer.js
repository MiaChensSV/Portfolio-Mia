import "./FooterStyles.css";

const Footer = () => {
  return (
    <>
      <div id="contact" className="footer">
        <div className="top">
          <div>
            <h1>Mia Chen</h1>
          </div>
          <div>
            <a href="mailto:miachensv@gmail.com">
              <i className="fa-solid fa-envelope"></i>
            </a>
            <a href="https://www.linkedin.com/in/mia-chen-sv/">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="https://github.com/MiaChensSV">
              <i className="fa-brands fa-github"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
