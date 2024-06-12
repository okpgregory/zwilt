import { FunctionComponent } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Icon,
  Typography,
} from "@mui/material";
import styles from "./FrameComponent1.module.css";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
}) => {
  return (
    <section className={[styles.frameParent, className].join(" ")}>
      <div className={styles.step1ResumeScreeningParent}>
        <div className={styles.step1ResumeContainer}>
          <span className={styles.step1}>Step 1:</span>
          <span> Resume Screening</span>
        </div>
        <img
          className={styles.frameChild}
          loading="lazy"
          alt=""
          src="/frame-626623-1.svg"
        />
      </div>
      <div className={styles.step2VideoInterviewParent}>
        <div className={styles.step2VideoContainer}>
          <span className={styles.step2}>Step 2:</span>
          <span> Video Interview</span>
        </div>
        <img
          className={styles.frameItem}
          loading="lazy"
          alt=""
          src="/frame-626623-2.svg"
        />
        <p className={styles.candidatesAreAssessed}>
          Candidates are assessed through skill based questions in a virtual
          setting. Allowing you to gauge personality and cultural fit.
        </p>
      </div>
      <div className={styles.step3TechnicalEvaluationParent}>
        <div className={styles.step3TechnicalContainer}>
          <span className={styles.step3}>Step 3:</span>
          <span> Technical Evaluation</span>
        </div>
        <img
          className={styles.frameInner}
          loading="lazy"
          alt=""
          src="/frame-626623-1.svg"
        />
      </div>
      <Accordion className={styles.parent} sx={{ width: 635 }}>
        <AccordionSummary expandIcon={<Icon>expand_more</Icon>}>
          <Typography />
        </AccordionSummary>
        <AccordionDetails>
          <Typography />
        </AccordionDetails>
      </Accordion>
      <div className={styles.step5LetsGetToWorkParent}>
        <div className={styles.step5LetsContainer}>
          <span className={styles.step5}>Step 5:</span>
          <span> Lets get to work</span>
        </div>
        <img
          className={styles.frameIcon}
          loading="lazy"
          alt=""
          src="/frame-626623-1.svg"
        />
      </div>
      <p className={styles.withOurComprehensive}>
        With our comprehensive screening process, we hand-pick highly skilled
        candidates so you can onboard them in a matter of days.
      </p>
      <h1 className={styles.howWeEnsure}>
        How we ensure you’re in good hands.
      </h1>
    </section>
  );
};

export default FrameComponent1;
