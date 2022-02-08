import Navbar from "../../modules/navbar";
import Footer from "../../modules/footer";
import SideBar from "../../modules/sidebar";
import Layout from "../../modules/layout";
import styles from "../../commons/styles/history.module.css";
import Image from "next/image";
import icon4 from "../../commons/assets/image/arrow-up.svg";
import Link from "next/link";
import image from "../../commons/assets/image/1.svg";
import { useDispatch, useSelector } from "react-redux";
import { getHistoryAction } from "../../redux/actions/history";
import { useEffect } from "react";

function History() {
  const dispatch = useDispatch();
  const allState = useSelector((state) => state);
  const { data } = allState.getHistory;

  const gethistory = () => {
    const param = {
      page: 1,
      per_page: 6,
    };
    const token = JSON.parse(localStorage.getItem("token"));
    dispatch(getHistoryAction(param, token));
  };

  useEffect(() => {
    gethistory();
  }, []);
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
                <select className={styles.sortby} name="sortBy" id="history">
                  <option value="" disabled selected>
                    Select Filter
                  </option>
                  <option value="name">Name</option>
                  <option value="walet">Walet</option>
                </select>
              </div>
              <div className={`${styles["this-week"]}`}>
              {Array.isArray(data) &&
          data.length > 0 &&
          data.map((data, idx) => (
                <div className={`${styles["history"]}`}key={idx}>
                  <div className={`${styles["transaction-history"]}`}>
                    <div className={styles.history}>
                      <Image src={data.image !== null ? `${process.env.NEXT_PUBLIC_HEROKU_IMAGE}${data.image}` : image}  
                      width={100}height={100}quality={100} alt="" />
                      <div className={styles.transaction}>
                        <p className={styles.name1}>{data.fullName}</p>
                        <p className={styles.desc}>{data.type}</p>
                      </div>
                      <p className={styles.green}>Rp.{data.amount}</p>
                    </div>
                  </div>
                </div>
          ))}
                <div className={`${styles["pagination-list"]}`}>
                  <button className={`${styles["pagination-prev"]}`}>
                    Previous
                  </button>
                  <button className={`${styles["pagination-next"]}`}>
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
