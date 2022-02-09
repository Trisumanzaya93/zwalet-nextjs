import Navbar from "../../modules/navbar";
import Footer from "../../modules/footer";
import SideBar from "../../modules/sidebar";
import Layout from "../../modules/layout";
import styles from "../../commons/styles/detailprofile.module.css";
import { useSelector } from "react-redux";

function DetailProfile() {
  const allState = useSelector((state) => state);
  const { userData } = allState.userById;
  return (
    <div>
      <Layout title="Profile">
        <Navbar />
        <div className="d-flex">
          <SideBar />
          <div>
            <div className={`${styles["profile-section"]}`}>
              <p className={`${styles["profile-title"]}`}>
                Personal Information
              </p>
              <p className={`${styles["profile-desc"]}`}>
                We got your personal information from the sign up proccess. If
                you want to make changes on your information, contact our
                support.
              </p>
              <div className="detail">
                <div className={`${styles["profile-detail-desc"]}`}>
                  <p className={`${styles["detail-title"]}`}>First Name</p>
                  <p className={`${styles["detail-field"]}`}>{userData.firstName}</p>
                </div>
                <div className={`${styles["profile-detail-desc"]}`}>
                  <p className={`${styles["detail-title"]}`}>Last Name</p>
                  <p className={`${styles["detail-field"]}`}>{userData.lastName}</p>
                </div>
                <div className={`${styles["profile-detail-desc"]}`}>
                  <p className={`${styles["detail-title"]}`}>Verified E-mail</p>
                  <p className={`${styles["detail-field"]}`}>
                    {userData.email}
                  </p>
                </div>
                <div className={`${styles["profile-detail-desc"]}`}>
                  <p className={`${styles["detail-title"]}`}>Phone Number</p>
                  <div className="d-flex justify-content-between">
                      <p className={`${styles["detail-field"]}`}>
                        {userData.noTelp?? "-"}
                      </p>
                    <a
                      href="./change-number"
                      className={`${styles["manage-tab"]}`}
                    >
                      Manage
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </Layout>
    </div>
  );
}

export default DetailProfile;
