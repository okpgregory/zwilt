import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./FrameComponent4.module.css";

export type FrameComponent4Type = {
  className?: string;
  anOpenBook?: string;
  easyAndTransparentOneToOn?: string;
  simpleAndConvenientPaymen?: string;
  reviewPastRatings?: string;

  /** Style props */
  frameDivFlex?: CSSProperties["flex"];
  frameDivMinWidth?: CSSProperties["minWidth"];
  frameDivAlignSelf?: CSSProperties["alignSelf"];
  frameDivWidth?: CSSProperties["width"];
  rectangleDivBackgroundColor?: CSSProperties["backgroundColor"];
  rectangleDivBackgroundColor1?: CSSProperties["backgroundColor"];
  easyAndTransparentContainBackgroundColor?: CSSProperties["backgroundColor"];
  easyAndTransparentMinWidth?: CSSProperties["minWidth"];
};

const FrameComponent4: FunctionComponent<FrameComponent4Type> = ({
  className = "",
  anOpenBook,
  easyAndTransparentOneToOn,
  simpleAndConvenientPaymen,
  reviewPastRatings,
  frameDivFlex,
  frameDivMinWidth,
  frameDivAlignSelf,
  frameDivWidth,
  rectangleDivBackgroundColor,
  rectangleDivBackgroundColor1,
  easyAndTransparentContainBackgroundColor,
  easyAndTransparentMinWidth,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      flex: frameDivFlex,
      minWidth: frameDivMinWidth,
      alignSelf: frameDivAlignSelf,
    };
  }, [frameDivFlex, frameDivMinWidth, frameDivAlignSelf]);

  const anOpenBookStyle: CSSProperties = useMemo(() => {
    return {
      width: frameDivWidth,
    };
  }, [frameDivWidth]);

  const rectangleDivStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: rectangleDivBackgroundColor,
    };
  }, [rectangleDivBackgroundColor]);

  const rectangleDiv1Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: rectangleDivBackgroundColor1,
    };
  }, [rectangleDivBackgroundColor1]);

  const rectangleDiv2Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: easyAndTransparentContainBackgroundColor,
    };
  }, [easyAndTransparentContainBackgroundColor]);

  const easyAndTransparentContainerStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: easyAndTransparentMinWidth,
    };
  }, [easyAndTransparentMinWidth]);

  return (
    <div
      className={[styles.frameParent, className].join(" ")}
      style={frameDivStyle}
    >
      <div className={styles.anOpenBookParent}>
        <h1 className={styles.anOpenBook} style={anOpenBookStyle}>
          {anOpenBook}
        </h1>
        <div className={styles.frameGroup}>
          <div className={styles.frameWrapper}>
            <div className={styles.rectangleParent}>
              <div className={styles.frameChild} style={rectangleDivStyle} />
              <div className={styles.frameItem} style={rectangleDiv1Style} />
              <div className={styles.frameInner} style={rectangleDiv2Style} />
            </div>
          </div>
          <p
            className={styles.easyAndTransparentContainer}
            style={easyAndTransparentContainerStyle}
          >
            <span className={styles.easyAndTransparent}>
              {easyAndTransparentOneToOn}
            </span>
            <span className={styles.simpleAndConvenient}>
              {simpleAndConvenientPaymen}
            </span>
            <span className={styles.reviewPastRatings}>
              {reviewPastRatings}
            </span>
          </p>
        </div>
      </div>
      <div className={styles.component1064}>
        <img
          className={styles.component1064Child}
          loading="lazy"
          alt=""
          src="/frame-626624-1.svg"
        />
        <div className={styles.learnMoreWrapper}>
          <a className={styles.learnMore}>Learn More</a>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent4;
