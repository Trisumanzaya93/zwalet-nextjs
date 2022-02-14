import styles from "../commons/styles/sidebar.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { topUpAction } from "../redux/actions/topup";

function SideBar() {
  const router = useRouter();
  const dispatch=useDispatch()
  const [isHide,setIsHide]=useState(true)
  const [amount, setAmount]=useState(0)
  const modalTrigger = () => {
    setIsHide( !isHide );
    console.log(isHide);
  };
  const handleAmount =(e)=>{
    setAmount(e.target.value)
  }
  const handleTopUp = async ()=>{
    const token = JSON.parse(localStorage.getItem("token"));
    const response = await dispatch(topUpAction({amount}, token))
    const linkMidtrans = response.value.data.data.redirectUrl;
    window.open(linkMidtrans)
    setIsHide(true);
  }
  const handleLogout=()=>{
    console.log("apa");
    localStorage.removeItem("token");
    router.push("/")
    // window.location.reload();
  }
  return (
    <div className={styles["main"]}>
      <ul>
        <li>
          <Link href="/home">
            <a className={router.pathname == "/home" ? styles.active : ""}>
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className={`bi bi-columns-gap ${styles["icon"]} `} viewBox="0 0 16 16">
                <path d="M6 1v3H1V1h5zM1 0a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1H1zm14 12v3h-5v-3h5zm-5-1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-5zM6 8v7H1V8h5zM1 7a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H1zm14-6v7h-5V1h5zm-5-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1h-5z" />
              </svg>
              Dashboard
            </a>
          </Link>
        </li>
        <li>
          <Link href="/transfer">
            <a className={router.pathname == "/transfer" ? styles.active : ""}>
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className={`bi bi-arrow-up-short ${styles["icon"]} `} viewBox="0 0 16 16">
                <path fill="evenodd" d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z" />
              </svg>
              Transfer
            </a>
          </Link>
        </li>
        <li>
          <Link href={`${router.pathname}`}>
            <a onClick={modalTrigger}>
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className={`bi bi-plus ${styles["icon"]} `} viewBox="0 0 16 16">
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
              </svg>
              Top Up
            </a>
          </Link>
        </li>
        <li>
          <Link href="/profile">
            <a className={router.pathname == "/profile" ? styles.active : ""}>
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className={`bi bi-person ${styles["icon"]} `} viewBox="0 0 16 16">
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
              </svg>
              Profile
            </a>
          </Link>
        </li>
      </ul>

      <div className={styles.logout} onClick={handleLogout}>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className={`bi bi-arrow-bar-right ${styles["icon"]} `} viewBox="0 0 16 16">
          <path fill="evenodd" d="M6 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L12.293 7.5H6.5A.5.5 0 0 0 6 8zm-2.5 7a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5z" />
        </svg>
        <p>Logout</p>
      </div>
      {/* modal */}
      <div className={styles.bgContainer} hidden={isHide}>
        <div className={styles.modalContainer} hidden={isHide}>
          <p>Top Up</p>
          <h6>
            Enter the amount of money, and click <br /> submit
          </h6>
          <input type="number" className={`form-control ${styles["modal-input"]} shadow-none`} name="amount" id="exampleInputEmail1"onChange={(e)=>handleAmount(e)} aria-describedby="emailHelp"></input>
          <button className="btn btn-secondary" onClick={handleTopUp}>Submit</button>
        </div>
        </div>
    </div>
  );
}

export default SideBar;