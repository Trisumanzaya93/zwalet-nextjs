import Navbar from "../../modules/navbar";
import Footer from "../../modules/footer";
import SideBar from "../../modules/sidebar";
import Layout from "../../modules/layout";
import styles from "../../commons/styles/profile.module.css";
import Image from "next/image";
import image from "../../commons/assets/image/1.svg";
import icon from "../../commons/assets/image/edit-2.svg";
import icon1 from "../../commons/assets/image/arrow-left.svg";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { getUserByIdAction, updateImageAction } from "../../redux/actions/users";
import { useRouter } from "next/router";
import {toast, ToastContainer,} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Profile() {
  const dispatch=useDispatch()
  const router= useRouter()
  const [dropdown, setDropdown] = useState(false);
  const toggleOpen = () => setDropdown(!dropdown);
  const allState = useSelector((state) => state);
  const { userData } = allState.userById;
  const [imageSend,setImageSend]=useState({})  
  const [isSave,setIsSave]=useState(false)  

  const handleImageChange = (e) =>{

    e.preventDefault();
    
    const file = e.target.files[0];
    console.log("tolak",file);
    setImageSend(file)
    setDropdown(!dropdown)
    setIsSave(true)
    // this.setState({imageSend : file ?? this.state.image })
  }
  const handleSave = () =>{

    console.log(imageSend);
    const token = JSON.parse(localStorage.getItem("token"));
    const id = JSON.parse(localStorage.getItem("id"));
    const body = new FormData();
    body.append("image", imageSend);
    console.log(id,body,token)
    dispatch(updateImageAction(id,body,token))
        .then((result) => {
          console.log("ini ", result.value.data.data);
          const data = result.value.data.data;
          toast.success("update image success", {
            position: toast.POSITION.TOP_CENTER,
            autoClose : 2000
        });
          console.log(data);
          dispatch(
            getUserByIdAction(id,token)
          );
          setIsSave(false)
        })
        .catch((err) => alert("password gagal"));
  }

  return (
    <div>
      <Layout title="Profile">
        <Navbar />
        <div className="d-flex">
          <SideBar />
          <div>
            <div className={`${styles["profile-section"]}`}>
              <div className={`${styles["profile-detail"]}`}>
                <div className={styles.wraperImg}>
                  <Image
                    src={
                      userData.image !== null
                        ? `${process.env.NEXT_PUBLIC_HEROKU_IMAGE}${userData.image}`
                        : image
                    }
                    width={100}
                    height={100}
                    quality={100}
                    alt="image"
                  />
                </div>
                <div className="d-flex">
                  <div className={styles.icon}>
                    <Image
                      src={icon}
                      width={20}
                      height={20}
                      quality={20}
                      alt=""
                    />
                  </div>
                  <div className="dropdown">
                  {isSave ? <button
                    className={styles.dropdownEdit}
                    onClick={handleSave}
                  >
                    save
                  </button> : 
                   <button
                   className={styles.dropdownEdit}
                   type="button"
                   onClick={toggleOpen}
                   id="dropdownMenuButton"
                   data-toggle="dropdown"
                   aria-haspopup="true"
                   aria-expanded="false"
                 >
                   edit
                 </button>}
                 <ToastContainer/>
                  <div className={`dropdown-menu ${dropdown ? "show" : ""}`}>
                    <input type="file" onChange={(e)=>handleImageChange(e)} />
                  </div>
                </div>
                </div>
                <p
                  className={`${styles["profile-name"]}`}
                >{`${userData.firstName} ${userData.lastName}`}</p>
                <p className={`${styles["profile-number"]}`}>
                  {userData.noTelp ?? "-"}
                </p>
                <div className={styles.more}>
                  <a
                    href="./detailprofile"
                    className={`${styles["more-detail"]}`}
                  >
                    <p className={`${styles["edit-p"]}`}>
                      Personal Information
                    </p>
                    <div className={styles.icon1}>
                      <Image
                        src={icon1}
                        width={20}
                        height={20}
                        quality={20}
                        alt=""
                      />
                    </div>
                  </a>
                  <a
                    href="./changepassword"
                    className={`${styles["more-detail"]}`}
                  >
                    <p className={`${styles["edit-p"]}`}>Change Password</p>
                    <div className={styles.icon1}>
                      <Image
                        src={icon1}
                        width={20}
                        height={20}
                        quality={20}
                        alt=""
                      />
                    </div>
                  </a>
                  <a href="./updatepin" className={`${styles["more-detail"]}`}>
                    <p className={`${styles["edit-p"]}`}>Change PIN</p>
                    <div className={styles.icon1}>
                      <Image
                        src={icon1}
                        width={20}
                        height={20}
                        quality={20}
                        alt=""
                      />
                    </div>
                  </a>
                  <a href="./login.html" className={`${styles["more-detail"]}`}>
                    <p className={`${styles["edit-p"]}`}>Logout</p>
                    <div className={styles.icon1}>
                      <Image
                        src={icon1}
                        width={20}
                        height={20}
                        quality={20}
                        alt=""
                      />
                    </div>
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

export default Profile;
