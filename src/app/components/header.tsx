import Image from "next/image"
import styles from "./header.module.css"

const TaskBar = () => {
  return (
    <div className={styles.taskbar}>
      <div className={styles.logoContainer}>
        <Image className={styles.logo} width={100} height={87} objectFit="contain" alt="Logo" src="/Logo.png" />
      </div>
      <div className={styles.homeParent}>
        <div className={styles.home}>Home</div>
        <div className={styles.home}>Services</div>
        <div className={styles.home}>About</div>
        <div className={styles.home}>Gallery</div>
        <div className={styles.home}>Contact</div>
      </div>
      <div className={styles.callToGetContainer}>
        <p className={styles.callToGet}>Call to get started today!</p>
        <p className={styles.callToGet}>512-512-5122</p>
      </div>
    </div>
  )
}

export default TaskBar


