import Footer from "../../modules/footer";
import Layout from "../../modules/layout";
import Navbar from "../../modules/navbar";
import SideBar from "../../modules/sidebar";
import styles from "../../commons/styles/changepassword.module.css";
import Image from "next/image";
import phone from "../../commons/assets/image/phone.svg"
import { useState } from "react";
import { updatePhoneAction } from "../../redux/actions/users";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import {toast, ToastContainer,} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Changenumber() {
  const router = useRouter()
  const dispatch=useDispatch()
  const [changePhone,setChangePhone]=useState("")
  console.log();
  const handlerChangePhone=(e)=>{
    setChangePhone(e.target.value)
  }

  const handlePhone=()=>{
    const token = JSON.parse(localStorage.getItem("token"));
    const id = JSON.parse(localStorage.getItem("id"));
    const body = {
      noTelp: changePhone
    }
    console.log(id,body,token)
    dispatch(updatePhoneAction(id,body,token))
        .then((result) => {
          console.log("ini ", result.value.data.data);
          const data = result.value.data.data;
          toast.success("update phone success", {
            position: toast.POSITION.TOP_CENTER,
            autoClose : 2000
        });
        setTimeout(()=> {
          router.push("/profile")
         }, 3000)
        })
        .catch((err) => alert("password gagal"));
      };

  return (
    <div>
      <Layout title={"Change Number Phone"} />
      <Navbar />
      <div className="d-flex">
        <SideBar />
        <div className={`${styles["profile-section"]}`}>
          <div>
            <p className={`${styles["profile-title"]}`}>Add Phone Number</p>
            <p className={`${styles["profile-desc"]}`}>
              Add at least one phone number for the transfer ID so you can start
              transfering your money to another user.
            </p>
          </div>
          <div className={`${styles["change-password"]}`}>
            <div className={`${styles["input-password"]}`}>
              <div className="mx-3 pt-2">
                <Image src={phone} alt=""/>
              </div>
              <input
                type="text"
                className={styles.input}
                placeholder="+62 Enter your phone number"
                onChange={(e)=>handlerChangePhone(e)}
              />
            </div>
            <button
              className={`${styles["change-btn"]}`}
              onClick={handlePhone}
            >
              Change Password
            </button>
            <ToastContainer/>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Changenumber;
