import { FunctionComponent } from "react";
import FrameComponent4 from "../components/FrameComponent4";
import styles from "./Root1.module.css";

const Root1: FunctionComponent = () => {
  return (
    <div className={styles.root}>
      <FrameComponent4
        anOpenBook="An open book."
        easyAndTransparentOneToOn="Easy and transparent one-to-one chat with candidates."
        simpleAndConvenientPaymen="Simple and convenient payment methods."
        reviewPastRatings="Review past ratings."
      />
      <div className={styles.rootInner}>
        <div className={styles.chatbarParent}>
          <div className={styles.chatbar}>
            <b className={styles.allMessages}>All Messages</b>
            <div className={styles.chatContent}>
              <div className={styles.frameParent}>
                <img
                  className={styles.frameChild}
                  loading="lazy"
                  alt=""
                  src="/group-626450-3.svg"
                />
                <div className={styles.messageContentParent}>
                  <div className={styles.messageContent}>
                    <b className={styles.estherHoward}>Esther Howard</b>
                    <b className={styles.pm}>12:00pm</b>
                  </div>
                  <div className={styles.hiLuisI}>
                    Hi Luis I am currently working as an expert at alfizo org
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.bubbleContainerParent}>
              <div className={styles.bubbleContainer}>
                <div className={styles.messageBubble}>
                  <div className={styles.bubbleElements}>
                    <img
                      className={styles.bubbleElementsChild}
                      loading="lazy"
                      alt=""
                      src="/message-content.svg"
                    />
                    <div className={styles.frameGroup}>
                      <div className={styles.estherHowardParent}>
                        <b className={styles.estherHoward1}>Esther Howard</b>
                        <b className={styles.pm1}>12:00pm</b>
                      </div>
                      <div className={styles.hiLuisI1}>
                        Hi Luis I am currently working as an expert at alfizo
                        org
                      </div>
                    </div>
                  </div>
                  <img
                    className={styles.bubbleElementsIcon}
                    loading="lazy"
                    alt=""
                    src="/message-status.svg"
                  />
                  <div className={styles.bubbleElements1}>
                    <img
                      className={styles.bubbleElementsItem}
                      loading="lazy"
                      alt=""
                      src="/group-626450-1.svg"
                    />
                    <div className={styles.frameContainer}>
                      <div className={styles.estherHowardGroup}>
                        <b className={styles.estherHoward2}>Esther Howard</b>
                        <b className={styles.pm2}>12:00pm</b>
                      </div>
                      <div className={styles.hiLuisI2}>
                        Hi Luis I am currently working as an expert at alfizo
                        org
                      </div>
                    </div>
                  </div>
                  <img
                    className={styles.bubbleElementsIcon1}
                    loading="lazy"
                    alt=""
                    src="/message-status1.svg"
                  />
                  <div className={styles.bubbleElements2}>
                    <img
                      className={styles.bubbleElementsInner}
                      loading="lazy"
                      alt=""
                      src="/group-626450-2.svg"
                    />
                    <div className={styles.frameDiv}>
                      <div className={styles.estherHowardContainer}>
                        <b className={styles.estherHoward3}>Esther Howard</b>
                        <b className={styles.pm3}>12:00pm</b>
                      </div>
                      <div className={styles.hiLuisI3}>
                        Hi Luis I am currently working as an expert at alfizo
                        org
                      </div>
                    </div>
                  </div>
                  <img
                    className={styles.bubbleElementsIcon2}
                    loading="lazy"
                    alt=""
                    src="/message-status2.svg"
                  />
                </div>
              </div>
              <div className={styles.vectorParent}>
                <img
                  className={styles.frameItem}
                  alt=""
                  src="/rectangle-3339.svg"
                />
                <p className={styles.hiLuisI4}>
                  Hi Luis I am currently working as an expert at alfizo org
                </p>
                <div className={styles.vectorGroup}>
                  <img
                    className={styles.vectorIcon}
                    alt=""
                    src="/vector-8.svg"
                  />
                  <img
                    className={styles.frameInner}
                    loading="lazy"
                    alt=""
                    src="/user-message@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.frameWrapper}>
            <div className={styles.vectorContainer}>
              <img className={styles.vectorIcon1} alt="" src="/vector-9.svg" />
              <img
                className={styles.frameIcon}
                loading="lazy"
                alt=""
                src="/frame-626664@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
      <img
        className={styles.rootChild}
        loading="lazy"
        alt=""
        src="/frame-626665@2x.png"
      />
    </div>
  );
};

export default Root1;
