import Navbar from "../../modules/navbar";
import Footer from "../../modules/footer";
import SideBar from "../../modules/sidebar";
import Layout from "../../modules/layout";
import styles from "../../commons/styles/history.module.css";
import Image from "next/image";
import icon4 from "../../commons/assets/image/arrow-up.svg";
import Link from "next/link";
import image from "../../commons/assets/image/default-user.png";
import { useDispatch, useSelector } from "react-redux";
import { getHistoryAction } from "../../redux/actions/history";
import { useEffect, useState } from "react";
import { route } from "next/dist/server/router";
import { useRouter } from "next/router";

function History() {
  const router = useRouter();
  const dispatch = useDispatch();
  const allState = useSelector((state) => state);
  const { data, paginations } = allState.getHistory;
  const [param, setParam] = useState({
    page: 1,
    filter: "YEAR",
    ...router.query,
  });

  const onClickNext = () => {
    if (parseInt(param.page) <= paginations.totalPage) {
      let counterPage = parseInt(param.page) + 1;
      const newParam = {
        ...param,
        page: counterPage,
      };
      setParam(newParam);
      router.query = newParam;
      router.push({
        pathname: router.pathname,
        query: router.query,
      });
      console.log(param.page);
    } else {
      alert("page habis");
    }
  };
  const onClickPrev = () => {
    if (parseInt(param.page) > 1) {
      let counterPage = parseInt(param.page) - 1;
      const newParam = {
        ...param,
        page: counterPage,
      };
      setParam(newParam);
      router.query = newParam;
      router.push({
        pathname: router.pathname,
        query: router.query,
      });
    } else {
      alert("page gak ada ");
    }
  };
  const handlerHistoryId = (id) => {
    router.push(`/transactionsucces/${id}`);
  };
  const gethistory = () => {
    const newParam = {
      page: param.page,
      per_page: 6,
      filter:param.filter??"YEAR",
    };
    const token = JSON.parse(localStorage.getItem("token"));
    dispatch(getHistoryAction(newParam, token));
  };

  const rupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(number);
  };
  const handlesort = (e) => {
    const cek = e.target.value;
    const newParam = {
      ...param,
      filter: cek,
    };
    console.log(newParam);
    setParam(newParam)
      router.query = newParam;
      router.push({
        pathname: router.pathname,
        query: router.query
      });
  };

  useEffect(() => {
    if (router.isReady) {
    gethistory();
    }
  }, [router.isReady, param]);
  return (
    <div>
      <Layout title="History">
        <Navbar />
        <div className="d-flex">
          <SideBar />
          <div>
            <div className={`${styles["history-section"]}`}>
              <div className={`${styles["transaction-history"]}`}>
                <p>Transaction History</p>
                <select
                  className={styles.sortby}
                  name="sortBy"
                  id="history"
                  onChange={(e) => handlesort(e)}
                >
                  <option id={"filter"} disabled selected>
                    Select Filter
                  </option>
                  <option value="WEEK">Week</option>
                  <option value="MONTH">Month</option>
                  <option value="YEAR">Year</option>
                </select>
              </div>
              <div className={`${styles["this-week"]}`}>
                {Array.isArray(data) &&
                  data.length > 0 &&
                  data.map((data, idx) => (
                    <div
                      className={`${styles["history"]}`}
                      key={idx}
                      onClick={() => handlerHistoryId(data.id)}
                    >
                      <div className={`${styles["transaction-history"]}`}>
                        <div className={styles.history}>
                          <Image
                            src={
                              data.image !== null
                                ? `${process.env.NEXT_PUBLIC_HEROKU_IMAGE}${data.image}`
                                : image
                            }
                            onError={() => image}
                            width={100}
                            height={100}
                            quality={100}
                            alt=""
                          />
                          <div className={styles.transaction}>
                            <p className={styles.name1}>{data.fullName}</p>
                            <p className={styles.desc}>{data.type}</p>
                          </div>
                          <p
                            className={
                              data.type == "topup" ? styles.green : styles.red
                            }
                          >
                            {data.type == "topup" || data.type == "accept"
                              ? `+ ${rupiah(data.amount)}`
                              : `- ${rupiah(data.amount)}`}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                <div className={`${styles["pagination-list"]}`}>
                  <button
                    className={`${styles["pagination-prev"]}`}
                    onClick={onClickPrev}
                  >
                    Previous
                  </button>
                  <button
                    className={`${styles["pagination-next"]}`}
                    onClick={onClickNext}
                  >
                    Next page
                  </button>
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

export default History;
