import { FunctionComponent } from "react";
import styles from "./GroupComponent3.module.css";

export type GroupComponent3Type = {
  className?: string;
};

const GroupComponent3: FunctionComponent<GroupComponent3Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.groupWrapper, className].join(" ")}>
      <div className={styles.vectorParent}>
        <img className={styles.groupChild} alt="" src="/rectangle-3213.svg" />
        <div className={styles.component1062}>
          <img
            className={styles.component1062Child}
            alt=""
            src="/frame-626644.svg"
          />
          <div className={styles.joinNow}>Join Now</div>
        </div>
        <div className={styles.groupContainer}>
          <div className={styles.rectangleParent}>
            <div className={styles.groupItem} />
            <div className={styles.rubyDeveloper}>Ruby Developer</div>
            <div className={styles.redwoodCityCalifornia}>
              Redwood City, California 7 years experience
            </div>
            <div className={styles.groupInner} />
            <img
              className={styles.maskGroupIcon}
              loading="lazy"
              alt=""
              src="/mask-group@2x.png"
            />
            <div className={styles.rectangleDiv} />
            <div className={styles.rubyDeveloper1}>Ruby Developer</div>
            <div className={styles.redwoodCityCalifornia1}>
              Redwood City, California 7 years experience
            </div>
            <div className={styles.groupChild1} />
            <img
              className={styles.maskGroupIcon1}
              loading="lazy"
              alt=""
              src="/mask-group-1@2x.png"
            />
            <div className={styles.groupChild2} />
            <div className={styles.groupChild3} />
            <div className={styles.groupChild4} />
            <div className={styles.systemOpsEngineer}>System ops engineer</div>
            <div className={styles.abuDhabiUae}>
              Abu Dhabi, UAE 5 years experience
            </div>
            <div className={styles.groupChild5} />
            <img
              className={styles.maskGroupIcon2}
              loading="lazy"
              alt=""
              src="/mask-group-2@2x.png"
            />
            <div className={styles.groupChild6} />
            <div className={styles.rubyDeveloper2}>Ruby Developer</div>
            <div className={styles.redwoodCityCalifornia2}>
              Redwood City, California 7 years experience
            </div>
            <div className={styles.groupChild7} />
            <img
              className={styles.maskGroupIcon3}
              loading="lazy"
              alt=""
              src="/mask-group-3@2x.png"
            />
            <div className={styles.groupChild8} />
            <div className={styles.groupChild9} />
          </div>
        </div>
        <img className={styles.icon} loading="lazy" alt="" src="/1.svg" />
        <div className={styles.groupParent}>
          <div className={styles.groupDiv}>
            <div className={styles.rectangleGroup}>
              <div className={styles.groupChild10} />
              <img
                className={styles.image247Icon}
                alt=""
                src="/image-247-1@2x.png"
              />
            </div>
            <div className={styles.rectangleContainer}>
              <div className={styles.groupChild11} />
              <img
                className={styles.pexelsPuwadonSangngern13419Icon}
                alt=""
                src="/pexelspuwadonsangngern13419240removebgpreview-1-1@2x.png"
              />
            </div>
          </div>
          <div className={styles.rectangleParent1}>
            <div className={styles.groupChild12} />
            <img
              className={styles.pexelsChristinaMorillo11814Icon}
              alt=""
              src="/pexelschristinamorillo1181424removebgpreview-1-1@2x.png"
            />
          </div>
          <div className={styles.groupChild13} />
          <div className={styles.groupChild14} />
        </div>
        <div className={styles.exploreTheVastZwiltMarketpParent}>
          <p className={styles.exploreTheVast}>
            Explore the vast Zwilt marketplace to find the candidate that meets
            your needs.
          </p>
          <h1 className={styles.findYourNext}>
            Find your next star performer.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default GroupComponent3;
