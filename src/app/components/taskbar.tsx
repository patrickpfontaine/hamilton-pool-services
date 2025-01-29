import Image from "next/image"
import styles from "./taskbar.module.css"

const TaskBar = () => {
  return (
    <div className={styles.taskbar}>
      <div className={styles.logoContainer}>
        <Image className={styles.logo} width={120} height={100} objectFit="contain" alt="Logo" src="/Logo3.png" />
      </div>
      <div className={styles.homeParent}>
        <div className={styles.menuItem}>Home</div>
        <div className={styles.menuItem}>Services</div>
        <div className={styles.menuItem}>Gallery</div>
        <div className={styles.menuItem}>Contact</div>
      </div>
      <div className={styles.callToGetContainer}>
        <p className={styles.callToGet}>512-512-5122</p>
      </div>
    </div>
  )
}

export default TaskBar


