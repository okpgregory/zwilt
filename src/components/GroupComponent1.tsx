import { FunctionComponent } from "react";
import styles from "./GroupComponent1.module.css";

export type GroupComponent1Type = {
  className?: string;
};

const GroupComponent1: FunctionComponent<GroupComponent1Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.vectorParent, className].join(" ")}>
      <img className={styles.groupChild} alt="" src="/rectangle-3215.svg" />
      <div className={styles.component1058}>
        <img
          className={styles.component1058Child}
          alt=""
          src="/frame-626644.svg"
        />
        <div className={styles.joinNow}>Join Now</div>
      </div>
      <div className={styles.onboardYourCandidateRightAParent}>
        <p className={styles.onboardYourCandidate}>
          Onboard your candidate right away and start creating the next big
          thing.
        </p>
        <h1 className={styles.startBuildingYour}>Start building your team.</h1>
      </div>
      <div className={styles.groupParent}>
        <div className={styles.rectangleParent}>
          <div className={styles.groupItem} />
          <p className={styles.onboardYourCandidate1}>
            Onboard your candidate right away and start creating the next big
            thing.
          </p>
          <h1 className={styles.startBuildingYour1}>
            Start building your team.
          </h1>
          <img className={styles.xIcon} loading="lazy" alt="" src="/10x.svg" />
        </div>
        <div className={styles.rectangleGroup}>
          <div className={styles.groupInner} />
          <img
            className={styles.rectangleIcon}
            alt=""
            src="/rectangle-1228@2x.png"
          />
          <img className={styles.leelarIcon} alt="" src="/leelar.svg" />
        </div>
        <div className={styles.rectangleContainer}>
          <div className={styles.rectangleDiv} />
          <b className={styles.allisonParker}>Allison Parker</b>
          <div className={styles.rubyDeveloperParent}>
            <div className={styles.rubyDeveloper}>Ruby Developer</div>
            <div className={styles.redwoodCityCalifornia}>
              Redwood City, California 7 years experience
            </div>
          </div>
          <div className={styles.wrapperEllipse3}>
            <img
              className={styles.wrapperEllipse3Child}
              alt=""
              src="/ellipse-3@2x.png"
            />
          </div>
          <img className={styles.leelarIcon1} alt="" src="/leelar-1.svg" />
        </div>
      </div>
      <a className={styles.a}>3</a>
    </div>
  );
};

export default GroupComponent1;
