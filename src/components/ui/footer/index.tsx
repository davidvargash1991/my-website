import React from "react";
import styles from "./footer.module.scss";
import cx from "classnames";
import Caret from "components/ui/icons/caret";
import Linkedin from "components/ui/icons/linkedin";
import Github from "components/ui/icons/github";
import Mail from "components/ui/icons/mail";
import Location from "components/ui/icons/location";
import Phone from "components/ui/icons/phone";
import { ILanguageProps } from "data/strings";

const Footer: React.FC<ILanguageProps> = () => {
  const logoClick = () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
      window.requestAnimationFrame(logoClick);
      window.scrollTo(0, c - c / 8);
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.caret} onClick={logoClick}>
        <Caret />
      </div>
      <div className={cx(styles.fullWidth, styles.content)}>
        <div>
          <div className={styles.title} onClick={logoClick}>
            David Vargas
          </div>
          <div className={cx(styles.text, styles.position)}>
            Full Stack Developer
          </div>
          <div className={styles.social}>
            <a
              href="https://www.linkedin.com/in/david-vargas-8aa700137/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={cx("flex-center", styles.link)}>
                <Linkedin color="#2087c5" />
              </div>
            </a>
            <a
              href="https://github.com/davidvargash1991"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={cx("flex-center", styles.link)}>
                <Github color="#2087c5" />
              </div>
            </a>
          </div>
        </div>
        <div className={styles.contact}>
          <h2 className={styles.contactTitle}>Contact Me</h2>
          <div className={styles.text}>
            <Mail />
            <span>Email: </span>{" "}
            <a
              className={styles.text}
              href="mailto:davidvargash.1991@tutanota.com"
            >
              davidvargash.1991@tutanota.com
            </a>
          </div>
          <div className={styles.text}>
            <Phone />
            <span>Tel: </span>{" "}
            <a className={styles.text} href="tel:+573133461507">
              +573133461507
            </a>
          </div>
          <div className={styles.text}>
            <Location /> Bogota, Colombia UTC -05:00
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
