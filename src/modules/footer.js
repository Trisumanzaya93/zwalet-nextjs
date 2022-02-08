import styles from "../commons/styles/navbar.module.css";

function Footer() {
  return (
    <div className={styles.main}>
      <p className={styles.copyright}>2020 Zwallet. All right reserved.</p>
      <div className={styles.wraperPhoneContact}>
      <p className={styles.contact}>contact@zwallet.com</p>
      <p className={styles.phoneFooter}>+62 5637 8882 9901</p>
      </div>
    </div>
  );
}

export default Footer;