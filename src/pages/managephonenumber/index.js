import Footer from "../../modules/footer"
import Layout from "../../modules/layout"
import Navbar from "../../modules/navbar"
import SideBar from "../../modules/sidebar"
import styles from "../../commons/styles/changepassword.module.css";
import Image from "next/image";
import trash from "../../commons/assets/image/trash.svg"
import { useDispatch, useSelector } from "react-redux";
import { updatePhoneAction } from "../../redux/actions/users";
import {toast, ToastContainer,} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from "next/router";


function Managephone() {
  const router=useRouter()
  const allState = useSelector((state) => state);
  const { userData } = allState.userById;
  const dispatch= useDispatch()

  const handlePhone=()=>{
    const token = JSON.parse(localStorage.getItem("token"));
    const id = JSON.parse(localStorage.getItem("id"));
    const body = {
      noTelp: ""
    }
    console.log(id,body,token)
    dispatch(updatePhoneAction(id,body,token))
        .then((result) => {
          console.log("ini ", result.value.data.data);
          const data = result.value.data.data;
          toast.success("delete phone number success", {
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
        <Layout title={"Manage Phone"}/>
        <Navbar/>
        <div className="d-flex">
            <SideBar/>
            <div className={`${styles["profile-section"]}`}>
          <div>
            <p className={`${styles["profile-title"]}`}>Manage Phone Number</p>
            <p className={`${styles["profile-desc"]}`}>You can only delete the phone number and then you must add another phone number.</p>
          </div>
          <div className="d-flex justify-content-between">
          <div>
              <p className={`${styles["profile-desc"]}`}>primary</p>
              <p className={`${styles["detail-field"]}`}>{userData.noTelp}</p>
          </div>
          <div className="mt-5">
            <Image src={trash} alt="" onClick={handlePhone}/>
          </div>
          <ToastContainer/>
          </div>
          </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Managephone