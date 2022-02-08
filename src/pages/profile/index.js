import Navbar from "../../modules/navbar";
import Footer from "../../modules/footer";
import SideBar from "../../modules/sidebar";
import Layout from "../../modules/layout";
import styles from "../../commons/styles/profile.module.css"
import Image from "next/image";
import image from "../../commons/assets/image/1.svg";
import icon from "../../commons/assets/image/edit-2.svg";
import icon1 from "../../commons/assets/image/arrow-left.svg";

function Profile() {
  return <div>
      <Layout title="Profile">
      <Navbar/>
      <div className="d-flex">
      <SideBar/>
      <div>
      <div className={`${styles["profile-section"]}`}>
          <div className={`${styles["profile-detail"]}`}>
            <div className={styles.wraperImg}>
          <Image src={image} width={100} height={100} quality={100} alt="" />
            </div>
            <div className={styles.edit}>
              <div className={styles.icon}>
              <Image src={icon}width={20} height={20} quality={20} alt=""/>
              </div>
              <p>Edit</p>
            </div>
            <p className={`${styles["profile-name"]}`}>Robert Chandler</p>
            <p className={`${styles["profile-number"]}`}>+62 813-9387-7946</p>
            <div className={styles.more}>
              <a href="./detailprofile" className={`${styles["more-detail"]}`}>
                <p className={`${styles["edit-p"]}`}>Personal Information</p>
                <div className={styles.icon1}>
              <Image src={icon1}width={20} height={20} quality={20} alt=""/>
              </div>
              </a>
              <a href="./changepassword" className={`${styles["more-detail"]}`}>
                <p className={`${styles["edit-p"]}`} >Change Password</p>
                <div className={styles.icon1}>
              <Image src={icon1}width={20} height={20} quality={20} alt=""/>
              </div>
              </a>
              <a href="./change-pin.html" className={`${styles["more-detail"]}`}>
                <p className={`${styles["edit-p"]}`} >Change PIN</p>
                <div className={styles.icon1}>
              <Image src={icon1}width={20} height={20} quality={20} alt=""/>
              </div>
              </a>
              <a href="./login.html" className={`${styles["more-detail"]}`}>
                <p className={`${styles["edit-p"]}`} >Logout</p>
                <div className={styles.icon1}>
              <Image src={icon1}width={20} height={20} quality={20} alt=""/>
              </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      </div>
      <Footer/>
      </Layout>
  </div>;
}

export default Profile;
