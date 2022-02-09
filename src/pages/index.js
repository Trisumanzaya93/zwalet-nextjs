import Head from "next/head";
import Image from "next/image";
import styles from "../commons/styles/Landing.module.css";
import bg1 from "../../public/Group9.svg";
import bg2 from "../../public/Group 51.svg";
import phone from "../../public/png-phone (1).svg";
import phone1 from "../../public/png-phone2 (1).svg";
import icon1 from "../../public/Group 10.svg";
import icon2 from "../../public/Group 11.svg";
import icon3 from "../../public/Group 12.svg";
import icon4 from "../../public/arrow-left.svg";
import photo from "../../public/1.svg";
import icon5 from "../../public/arrow-right.svg";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  console.log("aso");
  const handleClick = () => {
    console.log("ahahha");
    router.push("/login");
  };
  const handleSignUp = () => {
    console.log("ahahha");
    router.push("/signup");
  };
  return (
    <div className={styles.bodyContainer}>
      <div className="container">
        {/* <nav className="navbar navbar-light z-index-2"> */}
        <nav className="navbar navbar-light z-index-2">
          <p className="navbar-brand text-white">Zwallet</p>
          <div className="nav-inline">
            <button
              className={`btn btn-light my-2 my-sm-0 ${styles.btn1}`}
              onClick={() => handleClick()}
            >
              Login
            </button>
              <button
                className={`btn btn-light my-2 my-sm-0 ${styles.btn2}`}
                onClick={() => handleSignUp()}
                type="submit"
              >
                Sign Up
              </button>
          </div>
        </nav>
      </div>
      <div className={`${styles.jumbotron} jumbotron-fluid`}>
        <div className="container">
          <h1 className={styles.display4}>Awesome App For Saving Time.</h1>
          <p className={styles.lead}>
            We bring you a mobile app for banking problems that oftenly wasting
            much of your times.
          </p>
        <div className={styles.wraperPhone}>
        <Image width={1000} height={1000} quality={100} src={phone} alt="" />
        </div>
        </div>
      </div>
      <div className="container">
        <Image className="panel" src={bg2} alt="" />
      </div>

      <section className={`${styles.benefits} pb-5 pt-5`}>
        <div className="container">
          <h1 className="text-center h1">
            <span className={styles.textSpan}>About</span> the Application.
          </h1>
          <p className="mt-5 text-center">
            We have some great features from the application and it’s totally
            free
          </p>
          <p className="mt-3 text-center">
            to use by all users around the world.
          </p>

          <div className="row mt-5">
            <div className="col">
              <div className={styles.wraperIconlanding}>
                
              <Image
                src={icon1}
                alt="Phone"
                layout=""
                className="d-block mx-auto"
              />
              </div>
              <h3 className="text-center mb-4">24/7 Support</h3>
              <p className="text-center">We have 24/7 contact support so you</p>
              <p className="text-center">can contact us whenever you want</p>
              <p className="text-center">and we will respond it.</p>
            </div>
            <div className="col">
              <div className={styles.wraperIconlanding}>
              <Image
                src={icon2}
                alt="Phone"
                layout=""
                className="d-block mx-auto"
              />
              </div>
              <h3 className="text-center mb-4">Data Privacy</h3>
              <p className="text-center">
                We make sure your data is safe in our
              </p>
              <p className="text-center">database and we will encrypt any</p>
              <p className="text-center">data you submitted to us.</p>
            </div>
            <div className="col">
              <div className={styles.wraperIconlanding}>
                
              <Image
                src={icon3}
                alt="Phone"
                layout=""
                className="d-block mx-auto"
              />
              </div>
              <h3 className="text-center mb-4">Easy Download</h3>
              <p className="text-center">
                Zwallet is 100% totally free to use it’s
              </p>
              <p className="text-center">now available on Google Play Store</p>
              <p className="text-center">and App Store.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <div className="d-flex  mt-5">
            <div className="col-5">
              <Image className={`${styles["img-phone"]}`} src={phone1} alt="" />
              <Image className={`${styles["img-phone"]}`} src={phone} alt="" />
            </div>
            <div className="text-container">
              <h1>
                All The <span>Great</span>
                <br />
                Zwallet Features.
              </h1>
              <div className={styles.box}>
                <p className={styles.title1}>
                  <span>1. </span> Small Fee
                </p>
                <p className={styles.desc}>
                  We only charge 5% of every success transaction done in Zwallet
                  app.
                </p>
              </div>
              <div className={styles.box}>
                <p className={styles.title1}>
                  <span>2. </span> Data Secured
                </p>
                <p className={styles.desc}>
                  All your data is secured properly in our system and it’s
                  encrypted.
                </p>
              </div>
              <div className={styles.box}>
                <p className={styles.title1}>
                  <span>3. </span> User Friendly
                </p>
                <p className={styles.desc}>
                  Zwallet come up with modern and sleek design and not
                  complicated.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="users pb-5">
        <h1 className={`${styles.h1} text-center mt-5 mb-4`}>
          What Users Are <span className={styles.textSpan}>Saying.</span>
        </h1>
        <p className="text-center">
          We have some great features from the application and it’s totally free
          to use by all users around the world.
        </p>
        <div className="container">
          <div className="row justify-content-center mt-5">
            <div className="col-1 d-flex align-items-center justify-content-center">
              <Image src={icon4} className="shadow-sm" alt="" />
            </div>
            <div className="col-8 ">
              <div >
                <div className={styles.wraperTestimoni}>
                <Image
                  src={photo}
                  alt="Profile"
                  className="d-block mx-auto mb-3"
                />
                </div>
                <p className="font-weight-bold text-center">Alex Hansinburg</p>
                <p className="small text-center text-muted mb-5">Designer</p>
                <p className="text-center text-muted">
                  “This is the most outstanding app that I’ve ever try in my
                  live, this app is such an amazing masterpiece and it’s
                  suitable for you who is bussy with their bussiness and must
                  transfer money to another person aut there. Just try this app
                  and see the power!”
                </p>
              </div>
            </div>
            <div className="col-1 d-flex align-items-center justify-content-center">
              <Image src={icon5} className="shadow-sm" alt="" />
            </div>
          </div>
        </div>
      </section>
      <footer className={`${styles.footer} p-5`}>
        <div className="container">
          <h2 className={`${styles.h2}`}>Zwallet</h2>
          <p className="text-light">Simplify financial needs and saving</p>
          <p className="text-light">Much time in banking needs with</p>
          <p className="text-light">one single app.</p>
          <hr className={styles.hr} />
          <div className="row">
            <div className="col-md-8">
              <p className="text-white">2020 Zwallet. All right reserved.</p>
            </div>
            <div className="col-md-2">
              <p className="text-white text-center">+62 5637 8882 9901</p>
            </div>
            <div className="col-md-2">
              <p className="text-white text-center">contact@zwallet.com</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
