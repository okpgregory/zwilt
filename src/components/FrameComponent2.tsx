import { FunctionComponent } from "react";
import styles from "./FrameComponent2.module.css";

export type FrameComponent2Type = {
  className?: string;
};

const FrameComponent2: FunctionComponent<FrameComponent2Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.designCreativeParent, className].join(" ")}>
      <div className={styles.designCreative}>{`Design & Creative`}</div>
      <b className={styles.uxDesigner}>
        <p className={styles.ux}>UX</p>
        <p className={styles.designer}>Designer</p>
      </b>
      <b className={styles.graphicsDesigner}>
        <p className={styles.graphics}>Graphics</p>
        <p className={styles.designer1}>Designer</p>
      </b>
      <b className={styles.illustrationArtist}>
        <p className={styles.illustration}>Illustration</p>
        <p className={styles.artist}>Artist</p>
      </b>
      <b className={styles.unrealEngine}>
        <p className={styles.unreal}>Unreal</p>
        <p className={styles.engine}>Engine</p>
      </b>
      <b className={styles.cinema4d}>
        <p className={styles.cinema}>Cinema</p>
        <p className={styles.d}>4D</p>
      </b>
      <div className={styles.image249Wrapper}>
        <img className={styles.image249Icon} alt="" src="/image-249@2x.png" />
      </div>
      <div className={styles.image248Wrapper}>
        <img className={styles.image248Icon} alt="" src="/image-248@2x.png" />
      </div>
      <div className={styles.image249Container}>
        <img
          className={styles.image249Icon1}
          alt=""
          src="/image-249-1@2x.png"
        />
      </div>
      <div className={styles.image250Wrapper}>
        <img
          className={styles.image250Icon}
          loading="lazy"
          alt=""
          src="/image-250@2x.png"
        />
      </div>
      <div className={styles.image251Wrapper}>
        <img
          className={styles.image251Icon}
          loading="lazy"
          alt=""
          src="/image-251@2x.png"
        />
      </div>
      <img
        className={styles.frameChild}
        loading="lazy"
        alt=""
        src="/frame-626624-2@2x.png"
      />
    </div>
  );
};

export default FrameComponent2;
