import Navbar from "../../modules/navbar";
import Footer from "../../modules/footer";
import SideBar from "../../modules/sidebar";
import Layout from "../../modules/layout";
import styles from "../../commons/styles/changepassword.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {  changePasswordEmailAction } from "../../redux/actions/auth";
import { useRouter } from "next/router";
import { route } from "next/dist/server/router";

function ChangePasswordEmail() {
  const router=useRouter()
  const dispatch=useDispatch()
  const [body,setBody] = useState({
    keysChangePassword:"",
    newPassword:"",
    confirmPassword:"",
})
console.log(body);
const handleChangeNewPass=(e)=>{
  console.log(e.target.value);
  const value= e.target.value;
  setBody({...body, newPassword:value})
}
const handleChangeConfirmPass=(e)=>{
  console.log(e.target.value);
  const value= e.target.value;
  const idReset =router.query.resetId
  setBody({...body, confirmPassword:value,keysChangePassword:idReset })
}
const handleChangePass=()=>{

  console.log(body)
  dispatch(changePasswordEmailAction(body))
      .then((result) => {
        console.log("ini ", result.value.data.data);
        const data = result.value.data.data;
        console.log("data kamu isinya apa",data);
        alert("succes", result);
        // router.push('/login')
      })
      .catch((err) => console.log(err));
    };
  return <div>
      <Layout title="Change Password forgot">
          
          <div className="d-flex justify-content-center">
              <div>
              <div className={`${styles["profile-section"]}`}>
          <p className={`${styles["profile-title"]}`}>Change Password</p>
          <p className={`${styles["profile-desc"]}`}>
            You must enter your current password and then type your new password twice.
          </p>
          <div className={`${styles["change-password"]}`}>
            <div className={`${styles["input-password"]}`}>
              <input type="password" className={styles.input} onChange={(e)=>handleChangeNewPass(e)} placeholder="New password"/>
            </div>
            <div className={`${styles["input-password"]}`}>
              <input type="password"  className={styles.input}  onChange={(e)=>handleChangeConfirmPass(e)} placeholder="Repeat new password" />
            </div>
            <button href="./profile.html" onClick={handleChangePass} id="confirm1" className={`${styles["change-btn"]}`}>Change Password</button>
          </div>
        </div>
              </div>
          </div>
          <Footer/>
      </Layout>

  </div>;
}

export default ChangePasswordEmail;
