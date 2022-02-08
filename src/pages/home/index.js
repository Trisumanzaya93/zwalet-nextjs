import Navbar from "../../modules/navbar";
import Footer from "../../modules/footer";
import SideBar from "../../modules/sidebar";
import Layout from "../../modules/layout";
import styles from "../../commons/styles/home.module.css";
import Image from "next/image";
import icon4 from "../../commons/assets/image/arrow-up.svg";
import Link from "next/link";
import image from "../../commons/assets/image/1.svg";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUserByIdAction } from "../../redux/actions/users";
import { getHistoryAction } from "../../redux/actions/history";

function Home() {
  const dispatch = useDispatch();
  const allState = useSelector((state) => state);
  const { userData } = allState.userById;
  const { data } = allState.getHistory;

  const checkLogin = () => {
    const token = JSON.parse(localStorage.getItem("token"));
    const id = JSON.parse(localStorage.getItem("id"));
    // if (getToken) {
    console.log("diidi");
    dispatch(getUserByIdAction(id, token));
  };
  const gethistory = () => {
    const param ={
      page:1,
      per_page:4
    }
    const token = JSON.parse(localStorage.getItem("token"));
    dispatch(getHistoryAction(param,token));
  };

  useEffect(() => {
    checkLogin();
  }, []);

  useEffect(() => {
    gethistory();
  }, []);

  return (
    <div>
      <Layout title="Home">
        <Navbar />
        <div className="d-flex">
          <SideBar />
          <div>
            <header className={`${styles["main-head"]}`}>
              <div className={`${styles["head-balance"]}`}>
                <p>Balance</p>
                <p className={styles.amount}>Rp.{userData.balance}</p>
                <p className={styles.phone}>{userData.noTelp ?? "-"}</p>
              </div>
              <div className={`${styles["head-button"]}`}>
                <button className={`${styles["head-button-button"]}`}>
                  <Image
                    src={icon4}
                    className={`${styles["head-button-button-img"]}`}
                    alt=""
                  />
                  <p className={`${styles["head-button-button-p"]}`}>
                    Transfer
                  </p>
                </button>
                <button className={`${styles["head-button-button"]}`}>
                  {/* <img src="../../assets/img/plus.svg" alt="topup"> */}
                  <p className={`${styles["head-button-button-p"]}`}>Top Up</p>
                </button>
              </div>
            </header>
            <div className={`${styles["main-section"]}`}>
              <div className={styles.article}>
                <div className={styles.resume}>
                  <div className={styles.income}>
                    <Image
                      src={icon4}
                      className={`${styles["income-img"]}`}
                      alt=""
                    />
                    {/* <img src="../../assets/img/arrow-up.svg" alt="income"> */}
                    <p className={`${styles["title-resume"]["income-p"]}`}>
                      Income
                    </p>
                    <p className={styles.amount2}>Rp2.120.000</p>
                  </div>
                  <div className="expense">
                    <Image
                      src={icon4}
                      className={`${styles["expense-img"]}`}
                      alt=""
                    />
                    {/* <img src="../../assets/img/arrow-up.svg" alt="expense"> */}
                    <p className={`${styles["title-resume"]["income-p"]}`}>
                      Expense
                    </p>
                    <p className={styles.amount2}>Rp1.560.000</p>
                  </div>
                </div>
              </div>
              <div className={styles.aside}>
                <div className={styles.transaction}>
                  <p className="history">Transaction History</p>
                  <Link href="/history" passHref>
                    <p className={`${styles["see-all"]}`}>See All</p>
                  </Link>
                </div>
                {Array.isArray(data) &&
          data.length > 0 &&
          data.map((data, idx) => (
                <div className={styles.transaction} key={idx}>
                  <div className={styles.history}>
                    <Image src={data.image !== null ? `${process.env.NEXT_PUBLIC_HEROKU_IMAGE}${data.image}` : image}  
                      width={100}height={100}quality={100} alt="" />
                    <div className={styles.name1}>
                      <p>{data.fullName}</p>
                      <p className={styles.desc}>{data.type}</p>
                    </div>
                    <p className={styles.green}>Rp.{data.amount}</p>
                  </div>
                </div>
          ))}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </Layout>
    </div>
  );
}

export default Home;
