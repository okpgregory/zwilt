import { FunctionComponent } from "react";
import styles from "./Component.module.css";

export type ComponentType = {
  className?: string;
};

const Component: FunctionComponent<ComponentType> = ({ className = "" }) => {
  return (
    <footer className={[styles.component1083, className].join(" ")}>
      <div className={styles.social}>
        <div className={styles.business}>
          <img
            className={styles.helpIcon}
            loading="lazy"
            alt=""
            src="/vector-346.svg"
          />
          <a className={styles.privacyPolicy}>Privacy Policy</a>
          <div className={styles.allRightsReserved}>
            All rights reserved by Zwilt
          </div>
          <u className={styles.termsAndConditions}>Terms and Conditions</u>
        </div>
        <div className={styles.platform}>
          <div className={styles.categoriesList}>
            <b className={styles.categories}>CATEGORIES</b>
            <a className={styles.platform1}>PLATFORM</a>
            <b className={styles.help}>HELP</b>
            <div className={styles.getInTouch}>GET IN TOUCH @</div>
            <div className={styles.findTalent}>Find Talent</div>
            <div className={styles.aboutUs}>About Us</div>
            <div className={styles.findWork}>Find Work</div>
            <img className={styles.sloganIcon} alt="" src="/slogan.svg" />
            <div className={styles.categories1}>Categories</div>
            <div className={styles.dataScience}>Data Science</div>
            <div className={styles.itNetworking}>{`IT & Networking`}</div>
            <div className={styles.webMobile}>{`Web & Mobile`}</div>
            <div className={styles.faqs}>FAQ’s</div>
            <div className={styles.instagram}>Instagram</div>
            <div className={styles.contactUs}>Contact Us</div>
            <div className={styles.linkedin}>LinkedIn</div>
            <div className={styles.twitter}>Twitter</div>
          </div>
          <h1 className={styles.connectingTheRight}>
            Connecting the right people to the right businesses.
          </h1>
        </div>
        <img
          className={styles.applyIcon}
          loading="lazy"
          alt=""
          src="/group-625177.svg"
        />
        <p className={styles.weTakeComplex}>
          We take complex hiring processes - and simplify them. Connecting you
          to the world’s highly qualified talent pool.
        </p>
        <div className={styles.email}>
          <div className={styles.linksAndRedirects}>LINKS AND REDIRECTS</div>
          <button className={styles.component1047}>
            <div className={styles.done}>
              <div className={styles.hireNow}>Hire now</div>
            </div>
          </button>
          <button className={styles.component1048}>
            <div className={styles.applyNowWrapper}>
              <div className={styles.applyNow}>Apply now</div>
            </div>
          </button>
        </div>
      </div>
      <img
        className={styles.component1083Child}
        alt=""
        src="/rectangle-3215-1.svg"
      />
      <div className={styles.full}>
        <h1 className={styles.needAJob}>
          Need a job done, and done well? Get started
        </h1>
      </div>
      <div className={styles.data}>
        <img
          className={styles.moreIcon}
          loading="lazy"
          alt=""
          src="/frame-626624-8@2x.png"
        />
        <div className={styles.explore}>
          <div className={styles.enterYourEmailContainer}>
            <span>
              <span className={styles.enterYour}>Enter your</span>
              <span className={styles.span}>{` `}</span>
            </span>
            <span className={styles.email1}>
              <span>email |</span>
            </span>
          </div>
          <img className={styles.findIcon} alt="" />
          <div className={styles.enterYourMessageContainer}>
            <span className={styles.enterYour1}>Enter your</span>
            <span className={styles.message}> message |</span>
          </div>
          <img className={styles.findIcon1} alt="" />
        </div>
      </div>
    </footer>
  );
};

export default Component;
