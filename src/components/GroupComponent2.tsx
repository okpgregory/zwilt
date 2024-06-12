import { FunctionComponent } from "react";
import styles from "./GroupComponent2.module.css";

export type GroupComponent2Type = {
  className?: string;
};

const GroupComponent2: FunctionComponent<GroupComponent2Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.vectorParent, className].join(" ")}>
      <img className={styles.groupChild} alt="" src="/rectangle-3214.svg" />
      <img className={styles.maskGroupIcon} alt="" src="/mask-group-4.svg" />
      <div className={styles.component1060Parent}>
        <div className={styles.component1060}>
          <img
            className={styles.component1060Child}
            alt=""
            src="/frame-626644.svg"
          />
          <div className={styles.browseMore}>Browse More</div>
        </div>
        <p className={styles.assessTheCandidate}>
          Assess the candidate through work history, transparent tests and video
          interviews.
        </p>
        <h1 className={styles.evaluateToYour}>
          Evaluate to your heart’s content.
        </h1>
      </div>
    </div>
  );
};

export default GroupComponent2;
