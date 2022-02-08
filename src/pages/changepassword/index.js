import Navbar from "../../modules/navbar";
import Footer from "../../modules/footer";
import SideBar from "../../modules/sidebar";
import Layout from "../../modules/layout";
import styles from "../../commons/styles/changepassword.module.css";

function ChangePassword() {
  return <div>
      <Layout title="Change Password">
          <Navbar/>
          <div className="d-flex">
              <SideBar/>
              <div>
              <div className={`${styles["profile-section"]}`}>
          <p className={`${styles["profile-title"]}`}>Change Password</p>
          <p className={`${styles["profile-desc"]}`}>
            You must enter your current password and then type your new password twice.
          </p>
          <div className={`${styles["change-password"]}`}>
            <div className={`${styles["input-password"]}`}>
              <input type="password" id="password" className={styles.input} placeholder="Current password"/>
            </div>
            <div className={`${styles["input-password"]}`}>
              <input type="password" id="password" className={styles.input} placeholder="New password"/>
            </div>
            <div className={`${styles["input-password"]}`}>
              <input type="password" id="password" className={styles.input} placeholder="Repeat new password" />
            </div>
            <button href="./profile.html" type="submit" id="confirm1" className={`${styles["change-btn"]}`}>Change Password</button>
          </div>
        </div>
              </div>
          </div>
          <Footer/>
      </Layout>

  </div>;
}

export default ChangePassword;
