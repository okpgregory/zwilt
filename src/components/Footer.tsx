import { FunctionComponent } from "react";
import styles from "./Footer.module.css";

export type FooterType = {
  className?: string;
};

const Footer: FunctionComponent<FooterType> = ({ className = "" }) => {
  return (
    <header className={[styles.footer, className].join(" ")}>
      <div className={styles.logoWrapper}>
        <img
          className={styles.logoIcon}
          loading="lazy"
          alt=""
          src="/logo.svg"
        />
      </div>
      <button className={styles.joinButton}>
        <div className={styles.joinNow}>Join Now</div>
      </button>
      <div className={styles.logIn}>Log In</div>
      <nav className={styles.footerLinks}>
        <nav className={styles.footerLinkItems}>
          <div className={styles.articles}>Articles</div>
          <div className={styles.findWork}>Find Work</div>
          <div className={styles.findTalent}>Find Talent</div>
          <div className={styles.aboutUs}>About Us</div>
          <div className={styles.contactUs}>Contact Us</div>
        </nav>
      </nav>
    </header>
  );
};

export default Footer;
