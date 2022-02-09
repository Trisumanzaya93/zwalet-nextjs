import Navbar from "../../modules/navbar";
import Footer from "../../modules/footer";
import SideBar from "../../modules/sidebar";
import Layout from "../../modules/layout";
import styles from "../../commons/styles/profile.module.css"
import Image from "next/image";
import image from "../../commons/assets/image/1.svg";
import icon from "../../commons/assets/image/edit-2.svg";
import icon1 from "../../commons/assets/image/arrow-left.svg";
import { useSelector } from "react-redux";

function Profile() {
  const allState = useSelector((state) => state);
  const { userData } = allState.userById;
  return <div>
      <Layout title="Profile">
      <Navbar/>
      <div className="d-flex">
      <SideBar/>
      <div>
      <div className={`${styles["profile-section"]}`}>
          <div className={`${styles["profile-detail"]}`}>
            <div className={styles.wraperImg}>
          <Image src={userData.image !== null ? `${process.env.NEXT_PUBLIC_HEROKU_IMAGE}${userData.image}` : image} width={100} height={100} quality={100} alt="" />
            </div>
            <div className={styles.edit}>
              <div className={styles.icon}>
              <Image src={icon}width={20} height={20} quality={20} alt=""/>
              </div>
              <p>Edit</p>
            </div>
            <p className={`${styles["profile-name"]}`}>{`${userData.firstName} ${userData.lastName}`}</p>
            <p className={`${styles["profile-number"]}`}>{userData.noTelp??"-"}</p>
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
