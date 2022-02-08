import styles from "../../commons/styles/login.module.css";
import Image from "next/image";
import vektor4 from "../../commons/assets/image/Vector 4.png";
import phone2 from "../../commons/assets/image/png-phone2.png";
import phone from "../../commons/assets/image/png-phone.png";
import mail from "../../commons/assets/image/mail.png";
import lock from "../../commons/assets/image/lock.png";
import eye from "../../commons/assets/image/eye-open.png";
import icon from "../../commons/assets/image/user.png";
import { signUpAction } from "../../redux/actions/auth";
import { useDispatch } from "react-redux";
import Sidelogin from "../../modules/sidelogin";

function Signup() {
  const dispatch = useDispatch();
  const signUpHandler = (e) => {
    console.log("disini");
    e.preventDefault();
    console.log(e.target);
    const body = {
      firstName: e.target.email.value,
      lastName: e.target.email.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };
    console.log(body);
    dispatch(signUpAction(body))
      .then((result) => {
        console.log("ini ", result.value.data.data);
        const data = result.value.data.data;
        alert("succes", data);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <div className={styles.containerLogin}>
        <Sidelogin />
        <form
          className={`${styles["form-container"]}`}
          onSubmit={signUpHandler}
        >
          <p className={styles.text2}>
            Start Accessing Banking Needs With All Devices and All Platforms
            With 30.000+ Users
          </p>
          <p className={styles.text3}>
            Transfering money is eassier than ever, you can access Zwallet
            wherever you are. Desktop, laptop, mobile phone? we cover all of
            that for you!
          </p>
          <div className={`${styles["form-input"]}`}>
            <div className={`${styles["login-input"]}`}>
              <div className={`${styles["wraper-icon"]}`}>
                <Image src={icon} width={80} height={60} alt="" />
              </div>
              <input
                className={`${styles["input-form-login"]}`}
                type="firstname"
                id="firstName"
                placeholder="Enter your firstname"
              />
            </div>
            <div className={`${styles["login-input"]}`}>
              <div className={`${styles["wraper-icon"]}`}>
                <Image src={icon} width={80} height={60} alt="" />
              </div>
              <input
                className={`${styles["input-form-login"]}`}
                type="lastname"
                id="lastName"
                placeholder="Enter your lastname"
              />
            </div>
            <div className={`${styles["login-input"]}`}>
              <div className={`${styles["wraper-icon"]}`}>
                <Image src={mail} width={80} height={60} alt="" />
              </div>
              <input
                className={`${styles["input-form-login"]}`}
                type="email"
                id="email"
                placeholder="Enter your email"
              />
            </div>
            <div className={`${styles["login-input"]}`}>
              <div className={`${styles["wraper-icon"]}`}>
                <Image src={lock} width={80} height={60} alt="" />
              </div>
              <input
                className={`${styles["input-form-login"]}`}
                type="password"
                id="password"
                placeholder="Enter your password"
              />
              <div className={`${styles["wraper-icon"]}`}>
                <Image
                  src={eye}
                  width={80}
                  height={60}
                  className={styles.eye}
                  id="togglePassword"
                  alt=""
                />
              </div>
            </div>
            <button type="submit" className={`${styles["btn-1"]}`}>
              Sign Up
            </button>
            <footer className={`${styles["sign-up"]}`}>
              <span>Already have an account? Let’s</span>
              <a href="./login">Login</a>
            </footer>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
