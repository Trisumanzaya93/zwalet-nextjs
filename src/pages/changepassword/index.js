import Navbar from "../../modules/navbar";
import Footer from "../../modules/footer";
import SideBar from "../../modules/sidebar";
import Layout from "../../modules/layout";
import styles from "../../commons/styles/changepassword.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { changePasswordAction } from "../../redux/actions/auth";
import { useRouter } from "next/router";
import {toast, ToastContainer,} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ChangePassword() {
  const router=useRouter()
  const dispatch=useDispatch()
  const [body,setBody] = useState({
    oldPassword:"",
    newPassword:"",
    confirmPassword:"",
})
console.log(body);
const handleChangeOldPass=(e)=>{
  console.log(e.target.value);
  const value= e.target.value;
  setBody({...body,oldPassword:value})
}
const handleChangeNewPass=(e)=>{
  console.log(e.target.value);
  const value= e.target.value;
  setBody({...body, newPassword:value})
}
const handleChangeConfirmPass=(e)=>{
  console.log(e.target.value);
  const value= e.target.value;
  setBody({...body, confirmPassword:value})
}
const handleChangePass=()=>{
  const token = JSON.parse(localStorage.getItem("token"));
  const id = JSON.parse(localStorage.getItem("id"));
  console.log(id,body,token)
  dispatch(changePasswordAction(id,body,token))
      .then((result) => {
        console.log("ini ", result.value.data.data);
        const data = result.value.data.data;
        toast.success("update password success", {
          position: toast.POSITION.TOP_CENTER,
          autoClose : 2000
      });
      })
      .catch((err) => alert("password gagal"));
    };
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
              <input type="password" id="password" className={styles.input} onChange={(e)=>handleChangeOldPass(e)} placeholder="Current password"/>
            </div>
            <div className={`${styles["input-password"]}`}>
              <input type="password" id="password" className={styles.input} onChange={(e)=>handleChangeNewPass(e)} placeholder="New password"/>
            </div>
            <div className={`${styles["input-password"]}`}>
              <input type="password" id="password" className={styles.input}  onChange={(e)=>handleChangeConfirmPass(e)} placeholder="Repeat new password" />
            </div>
            <button href="./profile.html" onClick={handleChangePass} id="confirm1" className={`${styles["change-btn"]}`}>Change Password</button>
            <ToastContainer/>
          </div>
        </div>
              </div>
          </div>
          <Footer/>
      </Layout>

  </div>;
}

export default ChangePassword;
