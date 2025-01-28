import Image from "next/image";
import styles from './page.module.css';

const Desktop = () => {
  return (
    <div className={styles.Homepage}>
      <Image className={styles.poolImage} width={1280} height={356} alt="test" src="/test1.png" />
      <b className={styles.hamiltonPoolServicesContainer}>
        <p className={styles.hamiltonPoolServices}>Hamilton Pool Services</p>
      </b>
      <div className={styles.locationsParent}>
        <div className={styles.drippingSprings}>Dripping Springs</div>
        <div className={styles.lakeway}>Lakeway</div>
        <div className={styles.beeCave}>Bee Cave</div>
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.descriptionContainer}>
          <p className={styles.austinsLocalSwimming}>Austin’s local swimming pool cleaning, maintenance, repair, and renovation company.</p>
        </div>
        <div className={styles.mapContainer}>
          <p className={styles.mapTitle}>Service Areas</p>
          <Image className={styles.poolMap} width={515} height={478} alt="" src="/poolmap.png" />
        </div>
      </div>
    </div>
  );
};

export default Desktop;