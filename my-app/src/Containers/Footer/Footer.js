import React from "react";
import classes from "./Footer.module.scss";
import Github_image from "../../images/GitHub.png";
import mail_image from "../../images/Mail.svg";

const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <footer className={classes.footer}>
      <section className={classes.media_section}>
        <div className={classes.media_container}>
          <a href="https://github.com/Vseuvoleny">
            <img src={Github_image} alt="Github" />
            GitHub: Vseuvoleny
          </a>
        </div>
        <div className={classes.media_container}>
          <a href="mailto:Debruit63@gmail.com">
            <img src={mail_image} alt="Mail" />
            Debruit63@gmail.com
          </a>
        </div>
      </section>
      <div className={classes.copyright_title}>
        <h4>{`Copyright by ${date}`}</h4>
      </div>
    </footer>
  );
};

export default Footer;
