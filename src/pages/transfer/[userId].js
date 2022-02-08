import Navbar from "../../modules/navbar";
import Footer from "../../modules/footer";
import SideBar from "../../modules/sidebar";
import Layout from "../../modules/layout";
import Image from "next/image";
import image from "../../commons/assets/image/1.svg";
import styles from "../../commons/styles/transfer.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { userTransferAction } from "../../redux/actions/users";
import { setTransferParam } from "../../redux/actions/transfer";

function InputTransfer() {
  const dispatch = useDispatch()
  const router = useRouter();
  const allState = useSelector((state) => state);
  const { userData, transaction } = allState.userTransfer;
  const { userData: userLogin } = allState.userById;
  const [transfer, setTransfer] = useState(transaction)
  console.log('userLogin', userLogin);
  const getReceiver = () => {
    const token = JSON.parse(localStorage.getItem("token"));
    const id = router.query.userId ?? '' ;
    setTransfer({...transfer, receiverId: id})
    console.log("diidi");
    dispatch(
      userTransferAction(id,token)
    );
  };
  const handleAmount = (e) => {
    const param = {...transfer, amount: parseInt(e.target.value)};
    setTransfer(param)
    dispatch(
      setTransferParam(param)
    );
  };
  
  const handleNotes = (e) => {
    const param = {...transfer, notes: e.target.value};
    setTransfer(param)
    dispatch(
      setTransferParam(param)
    );
  };
  
  const handleContinue = () => {
    if(userLogin.balance < transfer.amount){
      alert('Balance tidak cukup')
    } else {
      dispatch(
        setTransferParam(transfer)
      );
      router.push('/confirmation')
    }
  };

  useEffect(() => {
    getReceiver();
  }, []);


  return (
    <div>
      <Layout title={"Transfer amount"} />
      <Navbar />
      <div className="d-flex">
        <SideBar />
        <div>
          <div className={`${styles["history-section"]}`}>
            <div className={`${styles["transaction-history"]}`}>
              <p>Transfer Money</p>
            </div>
            <div className={`${styles["this-week"]}`}>
              <div className={`${styles["history"]}`}>
                <div className={`${styles["transaction-history"]}`}>
                  <div className={styles.history}>
                    <Image src={userData.image !== null ? `${process.env.NEXT_PUBLIC_HEROKU_IMAGE}${userData.image}` : image}
                    width={100}height={100}quality={100}   
                    alt="" />
                    <div className={styles.transaction}>
                      <p className={styles.name1}>{`${userData.firstName} ${userData.lastName}`}</p>
                      <p className={styles.phone}>{userData.noTelp}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className={`${styles["trf-desc"]}`}>
              Type the amount you want to transfer and then press continue to
              the next steps.
            </p>
            <div className={`${styles["amount-desc"]}`}>
              <input className={`${styles["amount-desc-input"]}`} type="number" placeholder="0.00" onChange={handleAmount}/>
              <p className={`${styles["amount-desc-p"]}`}>Rp{userLogin.balance} Available</p>
              <div className={`${styles["trf-input"]}`}>
                {/* <img src="./assets/image/edit-2.svg" className="login-label"> */}
                <input type="text" className={`${styles["trf"]}`} placeholder="Add some notes" onChange={handleNotes}/>
              </div>
            </div>
            <a className={styles.continue} onClick={handleContinue}>
              <p>Continue</p>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default InputTransfer;
