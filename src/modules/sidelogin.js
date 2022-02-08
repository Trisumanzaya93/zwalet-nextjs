import Image from "next/image";
import vektor4 from "../commons/assets/image/Vector 4.png"
import phone2 from "../commons/assets/image/png-phone2.png"
import phone from "../commons/assets/image/png-phone.png"
import styles from "../commons/styles/login.module.css"


function Sidelogin() {
  return <div>
      <section className={`${styles["pict-container"]}`}>
      <p className={styles.title1}>Zwallet</p>
      <Image className={styles.vector} src={vektor4} alt=""/>
      <div className={styles.wraperImg} >
        <Image className="img1" src={phone2} alt=""/>
      </div>
      <div className={styles.wraperImg2}>
        <Image className="img2" src={phone} alt=""/>

      </div>
      <div className={styles.wraperText}>
      <p className={styles.title}>
        App that Covering Banking Needs.
      </p>
      <p className={styles.text}>
        Zwallet is an application that focussing in banking needs for all users in the world. Always updated and always following world trends. 5000+ users registered in Zwallet everyday with worldwide users coverage.
      </p>
      </div>
    </section>
  </div>;
}

export default Sidelogin;
