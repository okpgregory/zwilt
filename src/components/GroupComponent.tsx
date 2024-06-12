import { FunctionComponent } from "react";
import styles from "./GroupComponent.module.css";

export type GroupComponentType = {
  className?: string;
};

const GroupComponent: FunctionComponent<GroupComponentType> = ({
  className = "",
}) => {
  return (
    <section className={[styles.vectorParent, className].join(" ")}>
      <img className={styles.groupChild} alt="" src="/rectangle-3206-2.svg" />
      <div className={styles.faqContent}>
        <div className={styles.faqItems} />
        <div className={styles.faqItems1} />
        <h1 className={styles.frequentlyAskedQuestions}>
          Frequently asked questions
        </h1>
        <h3 className={styles.iWantTo}>
          I want to work part-time, is that possible
        </h3>
        <h3 className={styles.iWantTo1}>
          I want to work part-time, is that possible
        </h3>
        <h3 className={styles.howDoesThe}>How does the payment works?</h3>
        <b className={styles.general}>General</b>
        <b className={styles.general1}>General</b>
        <b className={styles.joiningProcess}>Joining Process</b>
        <h3 className={styles.howLongAre}>
          How long are the average projects?
        </h3>
        <h3 className={styles.howLongAre1}>
          How long are the average projects?
        </h3>
        <h3 className={styles.howLongAre2}>
          How long are the average projects?
        </h3>
        <h3 className={styles.howMuchCan}>How much can I earn?</h3>
        <h3 className={styles.howMuchCan1}>How much can I earn?</h3>
        <img className={styles.faqItemsIcon} alt="" src="/faq-items.svg" />
        <img
          className={styles.faqItemsIcon1}
          loading="lazy"
          alt=""
          src="/faq-items.svg"
        />
        <img className={styles.faqItemsIcon2} alt="" src="/faq-items1.svg" />
        <img className={styles.faqItemsIcon3} alt="" src="/faq-items1.svg" />
        <img className={styles.faqItemsIcon4} alt="" src="/faq-items1.svg" />
        <img
          className={styles.faqItemsIcon5}
          loading="lazy"
          alt=""
          src="/faq-items.svg"
        />
        <img className={styles.faqItemsIcon6} alt="" src="/faq-items.svg" />
        <img
          className={styles.faqItemsIcon7}
          loading="lazy"
          alt=""
          src="/faq-items.svg"
        />
        <img className={styles.faqItemsIcon8} alt="" src="/faq-items.svg" />
        <img
          className={styles.faqItemsIcon9}
          loading="lazy"
          alt=""
          src="/faq-items.svg"
        />
        <img
          className={styles.faqItemsIcon10}
          loading="lazy"
          alt=""
          src="/faq-items.svg"
        />
        <img
          className={styles.faqItemsIcon11}
          loading="lazy"
          alt=""
          src="/faq-items.svg"
        />
        <img
          className={styles.vectorIcon}
          loading="lazy"
          alt=""
          src="/vector-16.svg"
        />
      </div>
    </section>
  );
};

export default GroupComponent;
