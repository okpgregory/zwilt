import { FunctionComponent } from "react";
import styles from "./FrameComponent.module.css";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  return (
    <section className={[styles.vectorParent, className].join(" ")}>
      <img className={styles.frameChild} alt="" src="/rectangle-3206-1.svg" />
      <div className={styles.benefitOptionsWrapper}>
        <div className={styles.benefitOptions}>
          <div className={styles.right}>
            <div className={styles.talent}>
              <div className={styles.networking}>
                <p className={styles.weTakeComplex}>
                  We take complex hiring processes - and simplify them.
                  Connecting you to the world’s highly qualified talent pool.
                </p>
                <h1 className={styles.whyChooseZwilt}>Why choose Zwilt?</h1>
              </div>
            </div>
          </div>
          <div className={styles.benefitList}>
            <h1 className={styles.onboardWithoutThe}>
              Onboard without the risk.
            </h1>
            <p className={styles.wePickTheContainer}>
              <span className={styles.wePickThe}>
                We pick the best for you to select.
              </span>
              <span className={styles.thousandsOfVetted}>
                Thousands of vetted candidates in dozens of categories.
              </span>
              <span className={styles.riskFreeResourceSwapping}>
                Risk-free resource swapping for the best fit.
              </span>
            </p>
            <div className={styles.benefitIconOne} />
            <div className={styles.benefitIconTwo} />
            <div className={styles.benefitIconThree} />
            <div className={styles.component1064}>
              <img
                className={styles.riskLinkIcon}
                loading="lazy"
                alt=""
                src="/frame-626624-1.svg"
              />
              <h3 className={styles.learnMore}>Learn More</h3>
            </div>
            <div className={styles.activityLink}>
              <div className={styles.component1026Parent}>
                <div className={styles.component1026}>
                  <b className={styles.dModeling}>{`3d Modeling `}</b>
                </div>
                <div className={styles.component922}>
                  <b className={styles.characterRigging}>Character Rigging</b>
                </div>
                <div className={styles.designMessage}>
                  <div className={styles.messageBubble}>
                    <b>5.0</b>
                    <span className={styles.span}>{`       `}</span>
                    <b>15</b>
                  </div>
                  <img
                    className={styles.messageStatusIcon}
                    alt=""
                    src="/vector-6.svg"
                  />
                </div>
                <div className={styles.uiuxDesigner}>UI/UX Designer</div>
                <p className={styles.iAmWorking}>
                  I am working in design industry from 3+ years as a design lead
                </p>
              </div>
              <div className={styles.candidateProfiles}>
                <div className={styles.component1080}>
                  <img
                    className={styles.image235Icon}
                    alt=""
                    src="/image-235@2x.png"
                  />
                  <img
                    className={styles.image221Icon}
                    alt=""
                    src="/image-221@2x.png"
                  />
                  <div className={styles.wrapperImage236}>
                    <img
                      className={styles.image236Icon}
                      alt=""
                      src="/image-236@2x.png"
                    />
                  </div>
                  <div className={styles.mernStackDeveloper}>
                    MERN stack developer with 7+ years of reputed companies
                    worldwide
                  </div>
                  <div className={styles.candidateSkills}>
                    <div className={styles.skillOneParent}>
                      <div className={styles.skillOne} />
                      <div className={styles.skillTwo} />
                      <div className={styles.skillThree} />
                    </div>
                  </div>
                  <div className={styles.invitationStatus}>
                    <div className={styles.invitationSent}>1</div>
                    <img
                      className={styles.invitationPendingIcon}
                      alt=""
                      src="/invitation-pending.svg"
                    />
                  </div>
                  <div className={styles.invitationButton}>
                    <div className={styles.invitationAction} />
                    <a className={styles.inviteToTeam}>Invite to Team</a>
                  </div>
                  <img className={styles.pathIcon} alt="" src="/path.svg" />
                  <div className={styles.component10261}>
                    <b className={styles.dModeling1}>{`3d Modeling `}</b>
                  </div>
                  <div className={styles.component9221}>
                    <b className={styles.characterRigging1}>
                      Character Rigging
                    </b>
                  </div>
                  <div className={styles.component920}>
                    <b className={styles.environmentDesign}>
                      Environment Design
                    </b>
                  </div>
                  <div className={styles.nextProject}>
                    <div className={styles.projectAction}>
                      <div className={styles.projectButton} />
                      <b className={styles.nextChapter}>Next Chapter</b>
                      <img
                        className={styles.groupIcon}
                        alt=""
                        src="/group.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.userImageParent}>
                    <div className={styles.userImage} />
                    <div className={styles.userInteraction} />
                  </div>
                  <div className={styles.tellUsSomething}>
                    Tell us something about yourself
                  </div>
                  <div className={styles.interviewInput}>02:28</div>
                </div>
              </div>
              <img
                className={styles.candidateDetailsIcon}
                alt=""
                src="/candidate-details.svg"
              />
              <div className={styles.profileSummary}>
                <p className={styles.iAmWorking1}>
                  I am working in design industry from 3+ years as a MERN Stack
                  Developer
                </p>
                <a className={styles.availibility}>Availibility</a>
                <div className={styles.availabilityIcons}>
                  <img
                    className={styles.image235Icon1}
                    alt=""
                    src="/image-235-1@2x.png"
                  />
                  <img
                    className={styles.image221Icon1}
                    alt=""
                    src="/image-221-1@2x.png"
                  />
                </div>
                <div className={styles.availabilityHours}>
                  <div className={styles.hours}>9 Hours</div>
                </div>
              </div>
              <div className={styles.profileCard}>
                <div className={styles.skills}>
                  <img
                    className={styles.image235Icon2}
                    alt=""
                    src="/image-235-2@2x.png"
                  />
                  <img
                    className={styles.image221Icon2}
                    alt=""
                    src="/image-221-2@2x.png"
                  />
                </div>
                <h2 className={styles.arianaMarie}>Ariana Marie</h2>
                <div className={styles.component10262}>
                  <b className={styles.dModeling2}>{`3d Modeling `}</b>
                </div>
                <div className={styles.component9222}>
                  <b className={styles.characterRigging2}>Character Rigging</b>
                </div>
                <div className={styles.component9201}>
                  <b className={styles.environmentDesign1}>
                    Environment Design
                  </b>
                </div>
                <div className={styles.activity}>
                  <div className={styles.tracking} />
                  <div className={styles.takeInterview}>Take Interview</div>
                </div>
                <div className={styles.imageParent}>
                  <div className={styles.image}>
                    <b>5.0</b>
                    <span className={styles.span1}>{`       `}</span>
                    <b>15</b>
                  </div>
                  <img
                    className={styles.progressIcon}
                    alt=""
                    src="/vector-7.svg"
                  />
                </div>
              </div>
              <img className={styles.trackerIcon} alt="" src="/tracker.svg" />
            </div>
          </div>
          <div className={styles.benefitList1}>
            <h1 className={styles.anOpenBook}>An open book.</h1>
            <p className={styles.easyAndTransparentContainer}>
              <span className={styles.easyAndTransparent}>
                Easy and transparent one-to-one chat with candidates.
              </span>
              <span className={styles.simpleAndConvenient}>
                Simple and convenient payment methods.
              </span>
              <span className={styles.reviewPastRatings}>
                Review past ratings.
              </span>
            </p>
            <div className={styles.benefitListChild} />
            <div className={styles.benefitListItem} />
            <div className={styles.benefitListInner} />
            <div className={styles.component10641}>
              <img
                className={styles.component1064Child}
                loading="lazy"
                alt=""
                src="/frame-626624-1.svg"
              />
              <h3 className={styles.learnMore1}>Learn More</h3>
            </div>
            <div className={styles.chatbarWrapper}>
              <div className={styles.chatbar}>
                <div className={styles.allMessagesParent}>
                  <b className={styles.allMessages}>All Messages</b>
                  <div className={styles.messageList}>
                    <div className={styles.messageContentParent}>
                      <img
                        className={styles.messageContentIcon}
                        alt=""
                        src="/message-content.svg"
                      />
                      <div className={styles.messageDetails}>
                        <div className={styles.senderTime}>
                          <b className={styles.estherHoward}>Esther Howard</b>
                          <b className={styles.pm}>12:00pm</b>
                        </div>
                        <div className={styles.hiLuisI}>
                          Hi Luis I am currently working as an expert at alfizo
                          org
                        </div>
                      </div>
                    </div>
                    <img
                      className={styles.messageStatusIcon1}
                      alt=""
                      src="/message-status.svg"
                    />
                    <div className={styles.messageContentGroup}>
                      <img
                        className={styles.messageContentIcon1}
                        alt=""
                        src="/group-626450-1.svg"
                      />
                      <div className={styles.messageDetails1}>
                        <div className={styles.senderTime1}>
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
                      className={styles.messageStatusIcon2}
                      alt=""
                      src="/message-status1.svg"
                    />
                    <div className={styles.messageContentContainer}>
                      <img
                        className={styles.messageContentIcon2}
                        alt=""
                        src="/group-626450-2.svg"
                      />
                      <div className={styles.messageDetails2}>
                        <div className={styles.senderTime2}>
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
                      className={styles.messageStatusIcon3}
                      alt=""
                      src="/message-status2.svg"
                    />
                  </div>
                </div>
                <div className={styles.chatbarInner}>
                  <div className={styles.frameDiv}>
                    <img
                      className={styles.messageContentIcon3}
                      alt=""
                      src="/group-626450-3.svg"
                    />
                    <div className={styles.messageDetails3}>
                      <div className={styles.senderTime3}>
                        <div className={styles.estherHoward3}>
                          Esther Howard
                        </div>
                        <b className={styles.pm3}>12:00pm</b>
                      </div>
                      <p className={styles.hiLuisI3}>
                        Hi Luis I am currently working as an expert at alfizo
                        org
                      </p>
                    </div>
                  </div>
                </div>
                <div className={styles.chatbarChild}>
                  <div className={styles.vectorGroup}>
                    <img
                      className={styles.groupChild}
                      loading="lazy"
                      alt=""
                      src="/rectangle-3339.svg"
                    />
                    <p className={styles.hiLuisI4}>
                      Hi Luis I am currently working as an expert at alfizo org
                    </p>
                  </div>
                </div>
                <div className={styles.messageStatusParent}>
                  <img
                    className={styles.messageStatusIcon4}
                    alt=""
                    src="/vector-8.svg"
                  />
                  <img
                    className={styles.userMessageIcon}
                    alt=""
                    src="/user-message@2x.png"
                  />
                </div>
              </div>
            </div>
            <div className={styles.reason}>
              <img className={styles.notesIcon} alt="" src="/vector-9.svg" />
              <img
                className={styles.buttonIcon}
                loading="lazy"
                alt=""
                src="/frame-626664@2x.png"
              />
            </div>
            <img
              className={styles.footerIcon}
              loading="lazy"
              alt=""
              src="/frame-626665@2x.png"
            />
          </div>
          <div className={styles.benefitList2}>
            <h1 className={styles.stayInThe}>Stay in the loop.</h1>
            <p className={styles.trackYourStaffContainer}>
              <span className={styles.trackYourStaff}>
                Track your staff activity down to every minute with screenshots.
              </span>
              <span className={styles.comprehensiveTimesheetData}>
                Comprehensive timesheet data to process payments.
              </span>
              <span className={styles.createProjectsTo}>
                Create projects to organize and assign tasks more effectively.
              </span>
            </p>
            <div className={styles.rectangleDiv} />
            <div className={styles.benefitListChild1} />
            <div className={styles.benefitListChild2} />
            <div className={styles.component10642}>
              <img
                className={styles.component1064Item}
                loading="lazy"
                alt=""
                src="/frame-626624-1.svg"
              />
              <h3 className={styles.learnMore2}>Learn More</h3>
            </div>
            <div className={styles.activityBar}>
              <div className={styles.parent}>
                <div className={styles.div}>00:05:28</div>
                <div className={styles.component2}>
                  <img
                    className={styles.vectorIcon}
                    alt=""
                    src="/vector-10.svg"
                  />
                  <div className={styles.skillSeparator} />
                </div>
              </div>
              <img className={styles.frameIcon} alt="" src="/frame.svg" />
            </div>
            <div className={styles.activityBar1}>
              <div className={styles.component2Wrapper}>
                <div className={styles.component21}>
                  <img
                    className={styles.vectorIcon1}
                    alt=""
                    src="/vector-10.svg"
                  />
                  <div className={styles.component2Child} />
                </div>
              </div>
              <img className={styles.frameIcon1} alt="" />
              <div className={styles.trackingPanel}>
                <b className={styles.simplify}>42%</b>
                <div className={styles.todaysActivity}>Today’s Activity</div>
                <div className={styles.body}>
                  <div className={styles.benefits}>
                    <div className={styles.container} />
                    <div className={styles.content} />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.policyParent}>
              <img className={styles.policyIcon} alt="" src="/vector-8.svg" />
              <img
                className={styles.linksIcon}
                alt=""
                src="/user-message@2x.png"
              />
            </div>
            <div className={styles.connect}>
              <img className={styles.hireIcon} alt="" src="/vector-9.svg" />
              <img
                className={styles.redirectsIcon}
                loading="lazy"
                alt=""
                src="/frame-626664@2x.png"
              />
            </div>
            <div className={styles.inputParent}>
              <div className={styles.input}>
                <div className={styles.startTracking}>Start Tracking</div>
                <img className={styles.submitIcon} alt="" src="/submit.svg" />
                <div className={styles.prevetting}>
                  <img
                    className={styles.pexelsItaloMelo2379004RemoIcon}
                    alt=""
                    src="/pexelsitalomelo2379004removebgpreview-2@2x.png"
                  />
                  <img
                    className={styles.pexelsItaloMelo2379004RemoIcon1}
                    alt=""
                    src="/pexelsitalomelo2379004removebgpreview-1@2x.png"
                  />
                </div>
                <div className={styles.stack}>00:05:28</div>
                <div className={styles.component22}>
                  <img
                    className={styles.logoIcon}
                    alt=""
                    src="/vector-13.svg"
                  />
                  <div className={styles.actions} />
                </div>
                <div className={styles.trackedToday}>Tracked today</div>
                <div className={styles.navigation}>10:15:58</div>
                <div className={styles.easy} />
                <p className={styles.unableToTrack}>
                  Unable to track 50 minutes today I was working on Netflix,
                  please add these hours to my shift
                </p>
                <div className={styles.component6}>
                  <div className={styles.addNotes}>Add Notes</div>
                </div>
                <div className={styles.component7}>
                  <div className={styles.process} />
                  <img
                    className={styles.earningsIcon}
                    alt=""
                    src="/vector-14.svg"
                  />
                </div>
                <div className={styles.component10}>
                  <div className={styles.payment} />
                  <img
                    className={styles.longIcon}
                    alt=""
                    src="/vector-15.svg"
                  />
                </div>
              </div>
              <div className={styles.earn}>
                <img
                  className={styles.possibleIcon}
                  alt=""
                  src="/possible.svg"
                />
                <div className={styles.zwilttracker}>ZwiltTracker</div>
                <div className={styles.average}>
                  <img
                    className={styles.projectsIcon}
                    alt=""
                    src="/projects.svg"
                  />
                  <img
                    className={styles.joiningIcon}
                    alt=""
                    src="/joining.svg"
                  />
                  <div className={styles.how} />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.about} />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
