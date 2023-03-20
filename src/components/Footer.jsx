import React from "react";

const Footer = () => {
  const fechaAnio = new Date().getFullYear();

  return (
    <>
      <footer className="footer">        
        <div className="redes">
          <span className="redes">
            <a target={"_blank"} href="https://www.facebook.com/">
              <img src="/public/facebook.png" alt="img" />
            </a>
          </span>
          <span className="redes">
            <a target={"_blank"} href="https://www.instagram.com/">
              <img src="/public/instagram.png" alt="img" />
            </a>
          </span>
          <span className="redes">
            <a target={"_blank"} href="https://www.linkedin.com/">
              <img src="/public/linkedin.png" alt="img" />
            </a>
          </span>
        </div>
        <p>Todos los derechos reservados. &copy;{fechaAnio} MartialDojo</p>
      </footer>
    </>
  );
};

export default Footer;
