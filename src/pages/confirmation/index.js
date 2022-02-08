import Navbar from "../../modules/navbar";
import Footer from "../../modules/footer";
import SideBar from "../../modules/sidebar";
import Layout from "../../modules/layout";
import Image from "next/image";
import image from "../../commons/assets/image/default-user.png";
import styles from "../../commons/styles/transfer.module.css";
import { useSelector } from "react-redux";
import dayjs from "dayjs";

function Confirmation() {
  const allState = useSelector((state) => state);
  const { userData } = allState.userTransfer;  
  const { transaction } = allState.userTransfer;
  
  const handleContinue = () => {
    // manggil modal
  };

  const handleTransfer = () => {
    // check pin
    // Create transfer
  };
  return (
    <div>
      <Layout title={"Confirmation "} />
      <Navbar />
      <div className="d-flex">
        <SideBar />
        <div>
          <div className={`${styles["history-section"]}`}>
            <div className={`${styles["transaction-history"]}`}>
              <p>Transfer To</p>
            </div>
            <div className={`${styles["this-week"]}`}>
              <div className={`${styles["history"]}`}>
                <div className={`${styles["transaction-history"]}`}>
                  <div className={styles.history}>
                    <Image src={userData.image !== null ? `${process.env.NEXT_PUBLIC_HEROKU_IMAGE}${userData.image}` : image}  width={100}height={100}quality={100} alt="" />
                    <div className={styles.transaction}>
                      <p className={styles.name1}>{`${userData.firstName} ${userData.lastName}`}</p>
                      <p className={styles.phone}>{userData.noTelp}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className={`${styles["text-detail"]}`}>Details</p>
            <div className={`${styles["trf-detail"]}`}>
              <p className={`${styles["title-trf"]}`}>Amount</p>
              <p className={`${styles["detail-trf"]}`}>Rp. {transaction.amount}</p>
            </div>
            <div className={`${styles["trf-detail"]}`}>
              <p className={`${styles["title-trf"]}`}>Balance Left</p>
              <p className={`${styles["detail-trf"]}`}>Rp. {userData.balance - transaction.amount}</p>
            </div>
            <div className={`${styles["trf-detail"]}`}>
              <p className={`${styles["title-trf"]}`}>Date & Time</p>
              <p className={`${styles["detail-trf"]}`}>{dayjs().format('MMM DD, YYYY - HH.mm')}</p>
            </div>
            <div className={`${styles["trf-detail"]}`}>
              <p className={`${styles["title-trf"]}`}>Notes</p>
              <p className={`${styles["detail-trf"]}`}>{transaction.notes}</p>
            </div>
            <a href="#" className={styles.continue}>
              <p>Continue</p>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Confirmation;
