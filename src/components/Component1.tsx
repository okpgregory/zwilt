import { FunctionComponent } from "react";
import styles from "./Component1.module.css";

export type Component1Type = {
  className?: string;
};

const Component1: FunctionComponent<Component1Type> = ({ className = "" }) => {
  return (
    <section className={[styles.component1084, className].join(" ")}>
      <h1 className={styles.howItWorkedContainer}>
        <p className={styles.howItWorked}>How it worked</p>
        <p className={styles.forJason}>for Jason at</p>
        <p className={styles.p}>{`            `}</p>
      </h1>
      <div className={styles.image7Parent}>
        <img className={styles.image7Icon} alt="" src="/image-7@2x.png" />
        <img className={styles.image6Icon} alt="" src="/image-6@2x.png" />
      </div>
      <img
        className={styles.groovehqIcon}
        loading="lazy"
        alt=""
        src="/groovehq.svg"
      />
      <p className={styles.zwiltEnabledUs}>
        Zwilt enabled us to deliver on time and they’ve been heavy hitters in
        our corner since.
      </p>
      <img
        className={styles.component1084Child}
        alt=""
        src="/frame-626624.svg"
      />
      <img
        className={styles.component1084Item}
        alt=""
        src="/frame-626653@2x.png"
      />
      <p className={styles.zwiltEnabledUs1}>
        Zwilt enabled us to deliver on time and they’ve been heavy hitters in
        our corner since. Zwilt enabled us to deliver on time and they’ve been
        heavy hitters in our corner since.Zwilt enabled us to deliver on time
        and they’ve been heavy hitters.
      </p>
      <div className={styles.image6Parent}>
        <img className={styles.image6Icon1} alt="" src="/image-6-1@2x.png" />
        <img className={styles.groovehqIcon1} alt="" src="/groovehq-1.svg" />
      </div>
      <h1 className={styles.jasonMakki}>Jason Makki</h1>
      <div className={styles.engineerAtGrooveContainer}>
        <span>{`Engineer at `}</span>
        <span className={styles.groove}>GROOVE</span>
      </div>
      <div className={styles.sanFrancisco}>San Francisco</div>
      <img className={styles.icon} loading="lazy" alt="" src="/.svg" />
    </section>
  );
};

export default Component1;
