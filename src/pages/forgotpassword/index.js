import styles from "../../commons/styles/login.module.css";
import Image from "next/image";
import vektor4 from "../../commons/assets/image/Vector 4.png"
import phone2 from "../../commons/assets/image/png-phone2.png"
import phone from "../../commons/assets/image/png-phone.png"
import mail from "../../commons/assets/image/mail.png"
import lock from "../../commons/assets/image/lock.png"
import eye from "../../commons/assets/image/eye-open.png"
import icon from '../../commons/assets/image/user.png'
import { forgotPasswordAction } from "../../redux/actions/auth";
import { useDispatch } from "react-redux";
import Sidelogin from "../../modules/sidelogin";

function ForgotPassword() {
    const dispatch = useDispatch()
    const forgotHandler = (e) => {
        console.log('disini');
        e.preventDefault();
        console.log(e.target);
        const body = {
            email: e.target.email.value,
            linkDirect:"http://localhost:3000/"
        };
        console.log(body);
        dispatch(forgotPasswordAction(body)).then((result) => {
            console.log('ini ',result.value.data.data);
            const data = result.value.data.data
            alert("succes")
        ;
        
        }).catch((err) => console.log(err));
    }

  return <div>
      <div className={styles.containerLogin}>
    <Sidelogin/>
    <form className={`${styles["form-container"]}`} onSubmit={forgotHandler}>
      <p className={styles.text2}>
      Did You Forgot Your Password? Don’t Worry, You Can Reset Your Password In a Minutes.
      </p>
      <p className={styles.text3}>
      To reset your password, you must type your e-mail and we will send a link to your email and you will be directed to the reset password screens.
      </p>
      <div className={`${styles["form-input"]}`}>
        <div className={`${styles["login-input"]}`} >
        <div className={`${styles["wraper-icon"]}`}>
          <Image src={mail} width={80} height={60} alt=""/>
          </div>
          <input className={`${styles["input-form-login"]}`} type="email" id="email" placeholder="Enter your email"/>
        </div>
        <button href="./dashboard.html" type="submit" className={`${styles["btn-1"]}`}>Confirm
        </button>
      </div>
    </form>
  </div>

  </div>;
}

export default ForgotPassword;
