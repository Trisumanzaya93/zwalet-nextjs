import Navbar from "../../modules/navbar";
import Footer from "../../modules/footer";
import SideBar from "../../modules/sidebar";
import Layout from "../../modules/layout";
import styles from "../../commons/styles/detailprofile.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { updateNameAction } from "../../redux/actions/users";
import {toast, ToastContainer,} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function DetailProfile() {
  const router = useRouter();
  const dispatch = useDispatch();
  const allState = useSelector((state) => state);
  const { userData } = allState.userById;
  const [isSave, setIsSave] = useState(false);
  const [firstName, setFirstName] = useState(userData.firstName);
  const [lastName, setLastName] = useState(userData.lastName);

  const handlePhone = () => {
    if (userData.noTelp === null) {
      router.push("/changenumber");
    } else {
      router.push("/managephonenumber");
    }
  };
  const handlerEdit = () => {
    setIsSave(true);
  };
  const handlerSave = () => {
    const token = JSON.parse(localStorage.getItem("token"));
    const id = JSON.parse(localStorage.getItem("id"));
    const body = {
      firstName,
      lastName,
    };
    console.log(id, body, token);
    dispatch(updateNameAction(id, body, token))
      .then((result) => {
        console.log("ini ", result.value.data.data);
        const data = result.value.data.data;
        toast.success("update name success", {
          position: toast.POSITION.TOP_CENTER,
          autoClose : 2000
      });
        setIsSave(false);
      })
      .catch((err) => alert("password gagal"));
  };

  useEffect(() => {
    if (userData) {
      setFirstName(userData.firstName);
      setLastName(userData.lastName);
    }
  }, [userData]);

  return (
    <div>
      <Layout title="Profile">
        <Navbar />
        <div className="d-flex">
          <SideBar />
          
            <div className={`${styles["profile-section"]}`}>
              <p className={`${styles["profile-title"]}`}>
                Personal Information
              </p>
              <p className={`${styles["profile-desc"]}`}>
                We got your personal information from the sign up proccess. If
                you want to make changes on your information, contact our
                support.
              </p>
              {isSave ? (
                <button className={styles.btnEdit} onClick={handlerSave}>
                  save
                </button>
              ) : (
                <button className={styles.btnEdit} onClick={handlerEdit}>
                  edit
                </button>
              )}
              <ToastContainer/>
              <div className="detail">
                <div className={`${styles["profile-detail-desc"]}`}>
                  <p className={`${styles["detail-title"]}`}>First Name</p>
                  {isSave ? (
                    <input
                      className={`${styles["detail-field-input"]}`}
                      type={"text"}
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  ) : (
                    <p className={`${styles["detail-field"]}`}>{firstName}</p>
                  )}
                </div>
                <div className={`${styles["profile-detail-desc"]}`}>
                  <p className={`${styles["detail-title"]}`}>Last Name</p>
                  {isSave ? (
                    <input
                      className={`${styles["detail-field-input"]}`}
                      type={"text"}
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  ) : (
                    <p className={`${styles["detail-field"]}`}>{lastName}</p>
                  )}
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
                      {userData.noTelp ?? "-"}
                    </p>
                    <a
                      className={`${styles["manage-tab"]}`}
                      onClick={handlePhone}
                    >
                      Manage
                    </a>
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
