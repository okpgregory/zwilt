import { FunctionComponent } from "react";
import FrameComponent4 from "../components/FrameComponent4";
import styles from "./Root2.module.css";

const Root2: FunctionComponent = () => {
  return (
    <div className={styles.root}>
      <div className={styles.main}>
        <FrameComponent4
          anOpenBook="Stay in the loop."
          easyAndTransparentOneToOn="Track your staff activity down to every minute with screenshots."
          simpleAndConvenientPaymen="Comprehensive timesheet data to process payments."
          reviewPastRatings="Create projects to organize and assign tasks more effectively."
          frameDivFlex="unset"
          frameDivMinWidth="unset"
          frameDivAlignSelf="stretch"
          frameDivWidth="279px"
          rectangleDivBackgroundColor="#c7f4c2"
          rectangleDivBackgroundColor1="#c7f4c2"
          easyAndTransparentContainBackgroundColor="#c7f4c2"
          easyAndTransparentMinWidth="419px"
        />
      </div>
      <div className={styles.activityBarParent}>
        <div className={styles.activityBar}>
          <div className={styles.activityPlaceholder}>
            <input className={styles.placeholderContainer} type="checkbox" />
          </div>
          <div className={styles.activityIcon}>
            <div className={styles.component2}>
              <img
                className={styles.iconShape}
                loading="lazy"
                alt=""
                src="/vector-10.svg"
              />
              <div className={styles.iconBackground} />
            </div>
          </div>
          <a className={styles.activityLabel}>00:05:28</a>
        </div>
        <div className={styles.trackingDetails}>
          <div className={styles.detailContainer}>
            <div className={styles.progress}>
              <div className={styles.progressIconWrapper}>
                <div className={styles.progressIcon}>
                  <img
                    className={styles.progressBarIcon}
                    alt=""
                    src="/vector-9.svg"
                  />
                  <img
                    className={styles.progressPlaceholderIcon}
                    loading="lazy"
                    alt=""
                    src="/frame-626664@2x.png"
                  />
                </div>
              </div>
              <div className={styles.imageContainer}>
                <div className={styles.imageContainerInner}>
                  <div className={styles.frameParent}>
                    <div className={styles.pexelsItaloMelo2379004RemoParent}>
                      <img
                        className={styles.pexelsItaloMelo2379004RemoIcon}
                        alt=""
                        src="/pexelsitalomelo2379004removebgpreview-2@2x.png"
                      />
                      <img
                        className={styles.pexelsItaloMelo2379004RemoIcon1}
                        loading="lazy"
                        alt=""
                        src="/pexelsitalomelo2379004removebgpreview-1@2x.png"
                      />
                    </div>
                    <div className={styles.componentElementsWrapper}>
                      <div className={styles.componentElements}>
                        <div className={styles.component10}>
                          <div className={styles.component10Child} />
                          <img
                            className={styles.vectorIcon}
                            loading="lazy"
                            alt=""
                            src="/vector-15.svg"
                          />
                        </div>
                        <div className={styles.component7}>
                          <div className={styles.component7Child} />
                          <img
                            className={styles.vectorIcon1}
                            loading="lazy"
                            alt=""
                            src="/vector-14.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <img
                  className={styles.separatorIcon}
                  loading="lazy"
                  alt=""
                  src="/submit.svg"
                />
                <div className={styles.trackingActions}>
                  <div className={styles.actionsContainer}>
                    <div className={styles.buttonRow}>
                      <a className={styles.startTracking}>Start Tracking</a>
                      <div className={styles.trackingStatus}>
                        <div className={styles.statusIcon}>
                          <div className={styles.component21}>
                            <img
                              className={styles.vectorIcon2}
                              loading="lazy"
                              alt=""
                              src="/vector-13.svg"
                            />
                            <div className={styles.statusBackground} />
                          </div>
                        </div>
                        <b className={styles.b}>00:05:28</b>
                      </div>
                    </div>
                    <div className={styles.tracked}>
                      <div className={styles.trackedToday}>Tracked today</div>
                      <div className={styles.trackedLabel}>10:15:58</div>
                    </div>
                    <div className={styles.error}>
                      <div className={styles.errorChild} />
                      <div className={styles.unableToTrack}>
                        Unable to track 50 minutes today I was working on
                        Netflix, please add these hours to my shift
                      </div>
                    </div>
                    <button className={styles.component6}>
                      <div className={styles.addNotes}>Add Notes</div>
                    </button>
                  </div>
                </div>
              </div>
              <div className={styles.footer}>
                <div className={styles.trackerName}>
                  <img
                    className={styles.trackerNameChild}
                    loading="lazy"
                    alt=""
                    src="/possible.svg"
                  />
                  <div className={styles.zwilttracker}>ZwiltTracker</div>
                </div>
                <div className={styles.trackerLogo}>
                  <div className={styles.logoContainer}>
                    <img
                      className={styles.logoShapeIcon}
                      loading="lazy"
                      alt=""
                      src="/projects.svg"
                    />
                  </div>
                  <div className={styles.logoBackground} />
                  <img
                    className={styles.trackerLogoChild}
                    loading="lazy"
                    alt=""
                    src="/joining.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.secondaryActivity}>
          <div className={styles.activityBar1}>
            <div className={styles.component22}>
              <img className={styles.vectorIcon3} alt="" src="/vector-10.svg" />
              <div className={styles.component2Child} />
            </div>
            <img
              className={styles.overviewPlaceholderIcon}
              loading="lazy"
              alt=""
            />
            <b className={styles.overviewLabel}>42%</b>
            <div className={styles.todaysActivity}>Today’s Activity</div>
            <div className={styles.rectangleParent}>
              <div className={styles.frameChild} />
              <div className={styles.backgroundShape} />
            </div>
          </div>
          <div className={styles.secondaryActivityInner}>
            <div className={styles.navigationShapeParent}>
              <img
                className={styles.navigationShapeIcon}
                alt=""
                src="/vector-8.svg"
              />
              <img
                className={styles.navigationPlaceholderIcon}
                loading="lazy"
                alt=""
                src="/user-message@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Root2;
