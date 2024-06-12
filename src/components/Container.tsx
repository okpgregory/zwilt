import { FunctionComponent } from "react";
import styles from "./Container.module.css";

export type ContainerType = {
  className?: string;
};

const Container: FunctionComponent<ContainerType> = ({ className = "" }) => {
  return (
    <div className={[styles.container, className].join(" ")}>
      <div className={styles.categoriesParent}>
        <div className={styles.categories}>
          <div className={styles.categoryBackground} />
          <div className={styles.itDevelopment}>{`IT & Development`}</div>
        </div>
        <div className={styles.categories1}>
          <div className={styles.categoriesChild} />
          <div className={styles.designAndCreative}>Design and Creative</div>
        </div>
      </div>
      <div className={styles.pythonDeveloper}>Python Developer</div>
      <div className={styles.pythonDeveloper1}>Python Developer</div>
      <div className={styles.pythonDeveloper2}>Python Developer</div>
      <div className={styles.shopifyDeveloper}>Shopify Developer</div>
      <div className={styles.shopifyDeveloper1}>Shopify Developer</div>
      <div className={styles.shopifyDeveloper2}>Shopify Developer</div>
      <div className={styles.mernStackDeveloper}>MERN Stack Developer</div>
      <div className={styles.fullStackDeveloper}>Full Stack Developer</div>
      <div className={styles.fullStackDeveloper1}>Full Stack Developer</div>
      <b className={styles.exploreMore}>Explore More</b>
      <div className={styles.frontEndDeveloper}>Front End Developer</div>
      <div className={styles.dataScientist}>Data Scientist</div>
    </div>
  );
};

export default Container;
