import Navbar from "../../modules/navbar";
import Footer from "../../modules/footer";
import SideBar from "../../modules/sidebar";
import Layout from "../../modules/layout";
import styles from "../../commons/styles/detailprofile.module.css";

function DetailProfile() {
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
                  <p>Robert</p>
                </div>
                <div className={`${styles["profile-detail-desc"]}`}>
                  <p className={`${styles["detail-title"]}`}>Last Name</p>
                  <p className={`${styles["detail-field"]}`}>Chandler</p>
                </div>
                <div className={`${styles["profile-detail-desc"]}`}>
                  <p className={`${styles["detail-title"]}`}>Verified E-mail</p>
                  <p className={`${styles["detail-field"]}`}>
                    pewdiepie1@gmail.com
                  </p>
                </div>
                <div className={`${styles["profile-detail-desc"]}`}>
                  <p className={`${styles["detail-title"]}`}>Phone Number</p>
                  <div className="d-flex justify-content-between">
                    <a href="./change-number">
                      <p className={`${styles["detail-field"]}`}>
                        +62 813-9387-7946
                      </p>
                    </a>
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
