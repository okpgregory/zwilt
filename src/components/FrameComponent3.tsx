import { FunctionComponent } from "react";
import styles from "./FrameComponent3.module.css";

export type FrameComponent3Type = {
  className?: string;
};

const FrameComponent3: FunctionComponent<FrameComponent3Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.itDevelopmentParent, className].join(" ")}>
      <div className={styles.itDevelopment}>{`IT & Development`}</div>
      <b className={styles.shopifyDeveloper}>Shopify Developer</b>
      <b className={styles.magentoDeveloper}>Magento Developer</b>
      <a className={styles.dataScientist}>
        <p className={styles.data}>Data</p>
        <p className={styles.scientist}>Scientist</p>
      </a>
      <b className={styles.webflowDeveloper}>Webflow Developer</b>
      <div className={styles.dotNetDeveloper}>Dot Net Developer</div>
      <div className={styles.pexelsChristinaMorillo11814Wrapper}>
        <img
          className={styles.pexelsChristinaMorillo11814Icon}
          alt=""
          src="/pexelschristinamorillo1181424removebgpreview-1@2x.png"
        />
      </div>
      <div className={styles.image244Wrapper}>
        <img className={styles.image244Icon} alt="" src="/image-244@2x.png" />
      </div>
      <div className={styles.pexelsPuwadonSangngern13419Wrapper}>
        <img
          className={styles.pexelsPuwadonSangngern13419Icon}
          alt=""
          src="/pexelspuwadonsangngern13419240removebgpreview-1@2x.png"
        />
      </div>
      <div className={styles.image247Wrapper}>
        <img className={styles.image247Icon} alt="" src="/image-247@2x.png" />
      </div>
      <div className={styles.image246Wrapper}>
        <img
          className={styles.image246Icon}
          loading="lazy"
          alt=""
          src="/image-246@2x.png"
        />
      </div>
      <img
        className={styles.frameChild}
        loading="lazy"
        alt=""
        src="/frame-626623.svg"
      />
    </div>
  );
};

export default FrameComponent3;
