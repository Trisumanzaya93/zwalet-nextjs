import styles from "../../commons/styles/login.module.css";
import Image from "next/image";
import mail from "../../commons/assets/image/mail.png"
import lock from "../../commons/assets/image/lock.png"
import eye from "../../commons/assets/image/eye-open.png"
import { useDispatch } from "react-redux";
import { loginAction } from '../../redux/actions/auth'
import Sidelogin from "../../modules/sidelogin";
import { useRouter } from "next/router";
import {toast,ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
  const router = useRouter()
  const dispatch = useDispatch()
  const loginHandler = (e) => {
    console.log('disini');
    e.preventDefault();  
    const body = {
      email: e.target.email.value,
      password: e.target.password.value,
  };
    console.log(body);
    dispatch(loginAction(body)).then((result) => {
    console.log('ini ',result.value.data.data);
    const data = result.value.data.data
    localStorage.setItem("token", JSON.stringify(data.token));
    localStorage.setItem("id", JSON.stringify(data.id));
    toast.success("login success", {
      position: toast.POSITION.TOP_CENTER,
      autoClose : 2000
  });
    if(data.pin===null){
      setTimeout(()=> {
        router.push("/createpin")
       }, 3000)
    }else{
      setTimeout(()=> {
        router.push("/home")
       }, 3000)

    }
    // alert("succes")
;

}).catch((err) => {
  toast.error("Email atau Password salah", {
      position: toast.POSITION.TOP_CENTER,
      autoClose : 2000
  });
});
  
  }
  return <div>
      <div className={styles.containerLogin}>
        <Sidelogin/>
    <form className={`${styles["form-container"]}`} onSubmit={loginHandler}>
      <p className={styles.text2}>
        Start Accessing Banking Needs With All Devices and All Platforms With 30.000+ Users
      </p>
      <p className={styles.text3}>
        Transfering money is eassier than ever, you can access Zwallet wherever you are. Desktop, laptop, mobile phone? we cover all of that for you!
      </p>
      <div className={`${styles["form-input"]}`}>
        <div className={`${styles["login-input"]}`} >
          <div className={`${styles["wraper-icon"]}`}>
          <Image src={mail} width={80} height={60}  alt=""/>
          </div>
          <input className={`${styles["input-form-login"]}`} type="email" id="email" placeholder="Enter your email"/>
        </div>
        <div className={`${styles["login-input"]}`}>
        <div className={`${styles["wraper-icon"]}`}>
          <Image src={lock} width={80} height={60} alt=""/>
          </div>
          <input className={`${styles["input-form-login"]}`} type="password" id="password" placeholder="Enter your password"/>
          <div className={`${styles["wraper-icon"]}`}>
          <Image src={eye} width={80} height={60} className={styles.eye} id="togglePassword" alt=""/>
          </div>
        </div>
        <a href="./forgotpassword" className={`${styles["forgot-password"]}`}>
          <p>Forgot password?</p>
        </a>
        <button  type="submit" className={`${styles["btn-1"]}`}>Login
        </button>
        <ToastContainer />
        <footer className={`${styles["sign-up"]}`}>
          <span>
            Don’t have an account? Let’s
          </span>
          <a href="./signup">Sign Up</a>
        </footer>
      </div>
    </form>
  </div>
  </div>;
}

export default Login;
