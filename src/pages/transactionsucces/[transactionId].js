import dayjs from "dayjs";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import image from "../../commons/assets/image/success.svg";
import styles from "../../commons/styles/transfer.module.css";
import Footer from "../../modules/footer";
import Layout from "../../modules/layout";
import Navbar from "../../modules/navbar";
import SideBar from "../../modules/sidebar";
import { getHistoryByIdAction } from "../../redux/actions/history";
import { downloadPdfAction } from "../../redux/actions/topup";

function TransactionsuccesById() {
    const router = useRouter();
    const dispatch =useDispatch();
  const allState = useSelector((state) => state);
  const { userData } = allState.userById;
  const { data } = allState.getHistoryById;
  
//   const { transactionId } = router.query;
  const getHistoryById=()=>{
      console.log(router.query);
      const id =router.query.transactionId ?? '' ;
    const token = JSON.parse(localStorage.getItem("token"));
    
    console.log("apaaaa",id);
    if (id) {
        dispatch(
          getHistoryByIdAction(id,token)
        );
    }
  }

  const handleDownload = async ()=>{
    const token = JSON.parse(localStorage.getItem("token"));
    const id =router.query.transactionId ?? '' ;
    try{
      const response = await dispatch(downloadPdfAction(id, token))
      console.log(response);
      const linkDownload = response.value.data.data.url;
      window.open(linkDownload)
    }
    catch(error){alert("bukan transaksi keluar")}
  }

  const handleHome = async ()=>{
    router.push("/home")
  }

  const rupiah = (number)=>{
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR"
    }).format(number);
  }

  useEffect(() => {
    getHistoryById();
  }, []);
  return (
    <div>
      <Layout title={"transaction succes"} />
      <Navbar />
      <div className="d-flex">
        <SideBar />
        <div>
          <div className={`${styles["history-section"]}`}>
            <div className={`${styles["this-week"]}`}>
              <div>
                <div className={`${styles["transaction-history"]}`}>
                  <div className="d-flex justify-content-center ">
                    <Image
                      src={image}
                      width={100}
                      height={100}
                      quality={100}
                      alt=""
                    />
                  </div>
                  <div className="d-flex justify-content-center mt-5">
                    <p className={styles.name1}>Transaction Success</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={`${styles["trf-detail"]}`}>
              <p className={`${styles["title-trf"]}`}>Amount</p>
              <p className={`${styles["detail-trf"]}`}>
              {rupiah(data.amount)}
              </p>
            </div>
            <div className={`${styles["trf-detail"]}`}>
              <p className={`${styles["title-trf"]}`}>Balance Left</p>
              <p className={`${styles["detail-trf"]}`}>
                {rupiah(userData.balance - data.amount)}
              </p>
            </div>
            <div className={`${styles["trf-detail"]}`}>
              <p className={`${styles["title-trf"]}`}>Date & Time</p>
              <p className={`${styles["detail-trf"]}`}>
                {dayjs().format("MMM DD, YYYY - HH.mm")}
              </p>
            </div>
            <div className={`${styles["trf-detail"]}`}>
              <p className={`${styles["title-trf"]}`}>Notes</p>
              <p className={`${styles["detail-trf"]}`}>{data.notes}</p>
            </div>
            <div className="d-flex justify-content-end">
                <div className="d-flex mx-5">
                    <button className={`${styles["btn-2"]}`} onClick={handleDownload}>Download PDF</button>
                    <button className={`${styles["btn-3"]}`} onClick={handleHome}>Back To Home</button>
                </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default TransactionsuccesById;
