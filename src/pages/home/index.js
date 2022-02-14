import Navbar from "../../modules/navbar";
import Footer from "../../modules/footer";
import SideBar from "../../modules/sidebar";
import Layout from "../../modules/layout";
import styles from "../../commons/styles/home.module.css";
import Image from "next/image";
import icon4 from "../../commons/assets/image/arrow-up.svg";
import Link from "next/link";
import image from "../../commons/assets/image/default-user.png";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getUserByIdAction } from "../../redux/actions/users";
import {
  getHistoryAction,
  getHistoryByIdAction,
} from "../../redux/actions/history";
import { useRouter } from "next/router";
import { getDashboardAction } from "../../redux/actions/dashboard";
import {
  Chart,
  BarElement,
  LinearScale,
  CategoryScale,
  BarController,
  Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";

function Home() {
  const router = useRouter();
  const dispatch = useDispatch();
  const allState = useSelector((state) => state);
  const { userData } = allState.userById;
  const { data } = allState.getHistory;
  const { dataDashboard } = allState.getDashboard;
  Chart.register(
    LinearScale,
    CategoryScale,
    BarElement,
    BarController,
    Tooltip
  );
  const chartData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Income",
        borderWidth: {
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
        },
        borderSkipped: false,
        borderRadius: "15",
        data: (dataDashboard.listIncome ?? []).map((x) => x.total),
        backgroundColor: [
          "#6379F4",
          "#6379F4",
          "#6379F4",
          "#6379F4",
          "#6379F4",
          "#6379F4",
        ],
      },
      {
        label: "Expense",
        borderWidth: {
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
        },
        borderRadius: "15",
        borderSkipped: false,
        data: (dataDashboard.listExpense ?? []).map((x) => x.total),
        backgroundColor: [
          "#9DA6B5",
          "#9DA6B5",
          "#9DA6B5",
          "#9DA6B5",
          "#9DA6B5",
          "#9DA6B5",
        ],
      },
    ],
  };
  const options = {
    maintainAspecRatio: false,
    legend: { display: true },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          display: false,
        },
        display: false,
      },
      x: {
        grid: {
          display: false,
          drawBorder: false,
        },
        gridLines: {},
      },
    },
    plugins: {
      tooltip: {
        usePointStyle: true,
        enabled: true,
      },
    },
    hover: {
      mode: "nearest",
      intersec: true,
    },
    responsive: true,
    legend: {
      label: {
        fontSize: 14,
        fontFamily: "Nunito Sans",
      },
    },
  };
  const checkLogin = () => {
    const token = JSON.parse(localStorage.getItem("token"));
    const id = JSON.parse(localStorage.getItem("id"));
    // if (getToken) {
    console.log("diidi");
    dispatch(getUserByIdAction(id, token));
  };
  const gethistory = () => {
    const param = {
      page: 1,
      per_page: 4,
      filter: "MONTH",
    };
    const token = JSON.parse(localStorage.getItem("token"));
    dispatch(getHistoryAction(param, token));
  };

  const getDasboard = () => {
    const token = JSON.parse(localStorage.getItem("token"));
    const id = JSON.parse(localStorage.getItem("id"));
    dispatch(getDashboardAction(id, token));
  };

  const handlerHistoryId = (id) => {
    router.push(`/transactionsucces/${id}`);
  };

  const rupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(number);
  };

  useEffect(() => {
    checkLogin();
  }, []);

  useEffect(() => {
    gethistory();
  }, []);

  useEffect(() => {
    getDasboard();
  }, []);

  useEffect(() => {
    if (allState.getDashboard.isFulfilled) {
      // handleChart();
    }
  }, [allState.getDashboard.isFulfilled]);

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
                <p className={styles.amount}>{rupiah(userData.balance)}</p>
                <p className={styles.phone}>{userData.noTelp ?? "-"}</p>
              </div>
              <div className={`${styles["head-button"]}`}>
                <button className={`${styles["head-button-button"]}`} onClick={()=> router.push("/transfer")} >
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
                    <p className={`${styles["title-resume"]["income-p"]}`}>
                      Income
                    </p>
                    <p className={styles.amount2}>
                      {rupiah(dataDashboard.totalIncome)}
                    </p>
                  </div>
                  <div className="expense">
                    <Image
                      src={icon4}
                      className={`${styles["expense-img"]}`}
                      alt=""
                    />
                    <p className={`${styles["title-resume"]["income-p"]}`}>
                      Expense
                    </p>
                    <p className={styles.amount2}>
                      {rupiah(dataDashboard.totalExpense)}
                    </p>
                  </div>
                </div>
                <div>
                  <Bar
                    id="myChart"
                    height={200}
                    data={chartData}
                    options={options}
                  />
                </div>
              </div>
              <div className={styles.aside}>
                <div className={styles.wraperTransaction}>
                  <p className="history">Transaction History</p>
                  <Link href="/history" passHref>
                    <p className={`${styles["see-all"]}`}>See All</p>
                  </Link>
                </div>
                {Array.isArray(data) &&
                  data.length > 0 &&
                  data.map((data, idx) => (
                    <div
                      className={styles.transaction}
                      key={idx}
                      onClick={() => handlerHistoryId(data.id)}
                    >
                      <div className={styles.history}>
                        <div className={styles.wraperImage}>
                        <Image
                          src={
                            data.image !== null
                              ? `${process.env.NEXT_PUBLIC_HEROKU_IMAGE}${data.image}`
                              : image
                          }
                          onError={() => image}
                          width={200}
                          height={200}
                          quality={10}
                          alt=""
                        />
                        </div>
                        <div className={styles.name1}>
                          <p>{data.fullName}</p>
                          <p className={styles.desc}>{data.type}</p>
                        </div>
                        <div className={styles.name1}>
                          <p
                            className={
                              data.type == "topup" ? styles.green : styles.red
                            }
                          >
                            {data.type == "topup" || data.type == "accept"
                              ? `+ ${rupiah(data.amount)}`
                              : `-  ${rupiah(data.amount)}`}
                          </p>
                        </div>
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
