import { FunctionComponent } from "react";
import Component1 from "../components/Component1";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";
import GroupComponent3 from "../components/GroupComponent3";
import GroupComponent2 from "../components/GroupComponent2";
import GroupComponent1 from "../components/GroupComponent1";
import FrameComponent from "../components/FrameComponent";
import Component from "../components/Component";
import Container from "../components/Container";
import Footer from "../components/Footer";
import GroupComponent from "../components/GroupComponent";
import styles from "./Homepage.module.css";

const Homepage: FunctionComponent = () => {
  return (
    <div className={styles.homepage}>
      <Component1 />
      <img className={styles.rectangleIcon} alt="" src="/rectangle@2x.png" />
      <section className={styles.vectorParent}>
        <img className={styles.groupChild} alt="" src="/rectangle-3206.svg" />
        <div className={styles.component1063}>
          <img
            className={styles.component1063Child}
            loading="lazy"
            alt=""
            src="/frame-626624-1.svg"
          />
          <h3 className={styles.exploreMore}>Explore More</h3>
        </div>
        <h1 className={styles.yourOneStopMarketplace}>
          Your one-stop marketplace for finding the talent your business needs.
        </h1>
        <FrameComponent3 />
        <FrameComponent2 />
        <h3 className={styles.findDevAnd}>
          Find Dev and IT professionals to scale your business.
        </h3>
        <h3
          className={styles.exploreCreativeIndividuals}
        >{`Explore Creative individuals with a keen eye for detail.  `}</h3>
        <div className={styles.skillsParent}>
          <div className={styles.skills}>989 Skills</div>
          <img className={styles.vectorIcon} alt="" src="/vector.svg" />
        </div>
        <div className={styles.skillsGroup}>
          <div className={styles.skills1}>989 Skills</div>
          <img className={styles.vectorIcon1} alt="" src="/vector.svg" />
        </div>
        <div className={styles.subCategoriesParent}>
          <div className={styles.subCategories}>45 Sub-Categories</div>
          <img className={styles.vectorIcon2} alt="" src="/vector-2.svg" />
        </div>
        <div className={styles.subCategoriesGroup}>
          <div className={styles.subCategories1}>45 Sub-Categories</div>
          <img className={styles.vectorIcon3} alt="" src="/vector-2.svg" />
        </div>
        <div className={styles.profilesParent}>
          <div className={styles.profiles}>1011 Profiles</div>
          <img className={styles.vectorIcon4} alt="" src="/vector-4.svg" />
        </div>
        <div className={styles.profilesGroup}>
          <div className={styles.profiles1}>1011 Profiles</div>
          <img className={styles.vectorIcon5} alt="" src="/vector-4.svg" />
        </div>
        <h3 className={styles.moreToExploreContainer}>
          <b>30 more</b>
          <span className={styles.span}>{` `}</span>
          <span>to explore</span>
        </h3>
      </section>
      <FrameComponent1 />
      <section className={styles.groupParent}>
        <GroupComponent3 />
        <div className={styles.startYourJourneyTodayWrapper}>
          <h1 className={styles.startYourJourney}>Start your journey today.</h1>
        </div>
        <GroupComponent2 />
        <GroupComponent1 />
      </section>
      <FrameComponent />
      <img className={styles.homepageChild} alt="" src="/vector-343.svg" />
      <Component />
      <img
        className={styles.homepageItem}
        loading="lazy"
        alt=""
        src="/vector-343-1.svg"
      />
      <img className={styles.unionIcon} alt="" src="/union.svg" />
      <section className={styles.zwilt}>
        <p className={styles.withOurRigorous}>
          With our rigorous pre-vetting process, you'll never have to worry
          about finding the ideal candidate ever again.
        </p>
        <Container />
        <div className={styles.component1043}>
          <div className={styles.component1040}>
            <div className={styles.lookingForDesignContainer}>
              <span>
                <span className={styles.lookingFor}>Looking for</span>
                <span className={styles.span1}>{` `}</span>
              </span>
              <span className={styles.design}>
                <span>design |</span>
              </span>
            </div>
            <img
              className={styles.designPromptBackground}
              loading="lazy"
              alt=""
              src="/frame-626624-9.svg"
            />
          </div>
        </div>
        <Footer />
        <div className={styles.findingTheRightFitHasNeveWrapper}>
          <h1 className={styles.findingTheRight}>
            Finding the right fit has never been easier.
          </h1>
        </div>
        <img
          className={styles.zwiltTba1012Icon}
          loading="lazy"
          alt=""
          src="/zwilttba101-2@2x.png"
        />
      </section>
      <GroupComponent />
      <div className={styles.homepageInner} />
    </div>
  );
};

export default Homepage;
