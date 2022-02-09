import Navbar from "../../modules/navbar";
import Footer from "../../modules/footer";
import SideBar from "../../modules/sidebar";
import Layout from "../../modules/layout";
import Image from "next/image";
import image from "../../commons/assets/image/default-user.png";
import styles from "../../commons/styles/transfer.module.css";
import { useDispatch, useSelector } from "react-redux";
import dayjs from "dayjs";
import { useState } from "react";
import { checkPinAction } from "../../redux/actions/auth";
import { createTransferAction } from "../../redux/actions/transfer";
import { useRouter } from "next/router";

function Confirmation() {
  const router = useRouter()
  const dispatch=useDispatch()
  const allState = useSelector((state) => state);
  const { userData } = allState.userTransfer;
  const { transaction } = allState.userTransfer;

  const [isHide, setIsHide] = useState(true);
  const [pin, setPin] = useState(['','','','','','']);
  const modalTrigger = () => {
    setIsHide(!isHide);
    console.log(isHide);
  };
  const [disableConfirm, setDisableConfirm] = useState(false);
  function getCodeBoxElement(index) {
    if (typeof window !== "undefined") {
      return document.getElementById("codeBox" + index);
    }
  }

  const handlePinInput = (index, e) => {
    const newPin = pin;
    newPin[index - 1] = e.target.value;
    setPin(newPin);
  }

  function onKeyUpEvent(index, event) {
    const eventCode = event.which || event.keyCode;

    if (typeof window !== "undefined") {
      const confirm = document.getElementById("confirm");
      if (getCodeBoxElement(index).value.length === 1) {
        if (index !== 6) {
          getCodeBoxElement(index + 1).focus();
        } else {
          getCodeBoxElement(index).blur();
          // Submit code;
        }
      }
      if (eventCode === 8 && index !== 1) {
        getCodeBoxElement(index - 1).focus();
      }
    }
  }
  // function onKeyUpPin(index, event) {
  //   const eventCode = event.which || event.keyCode;
  //   let confirm = document.getElementById('confirm2');
  //   if (getCodeBoxElement(index).value.length === 1) {
  //     if (index !== 6) {
  //       getCodeBoxElement(index+ 1).focus();
  //     } else {
  //       getCodeBoxElement(index).blur();
  //       // Submit code
  //       confirm.classList="edit-btn1";
  //     }
  //   }
  //   if (eventCode === 8 && index !== 1) {
  //     getCodeBoxElement(index - 1).focus();
  //   }
  // }

  function onFocusEvent(index) {
    if (typeof window !== "undefined") {
      for (const item = 1; item < index; item++) {
        const currentElement = getCodeBoxElement(item);
        if (currentElement && !currentElement.value) {
          currentElement.focus();
          break;
        }
      }
    }
  }

  const handleContinue = () => {
    // manggil modal
  };

  const handleTransfer = async () => {
    // check pin
    const joinPin = pin.join('');
    const token = JSON.parse(localStorage.getItem("token"));
    try {
      const checkPin = await dispatch(checkPinAction(joinPin,token))
      if(checkPin.value.data.status === 200) {
          dispatch(createTransferAction(transaction, token))
          setIsHide(true);
          alert('Transaksi Selesai');
          router.push('/home')
          
      }
    } catch (error) {
      console.log(error);
      alert('Pin Salah')
    }
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
                    <Image
                      src={
                        userData.image !== null
                          ? `${process.env.NEXT_PUBLIC_HEROKU_IMAGE}${userData.image}`
                          : image
                      }
                      width={100}
                      height={100}
                      quality={100}
                      alt=""
                    />
                    <div className={styles.transaction}>
                      <p
                        className={styles.name1}
                      >{`${userData.firstName} ${userData.lastName}`}</p>
                      <p className={styles.phone}>{userData.noTelp}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className={`${styles["text-detail"]}`}>Details</p>
            <div className={`${styles["trf-detail"]}`}>
              <p className={`${styles["title-trf"]}`}>Amount</p>
              <p className={`${styles["detail-trf"]}`}>
                Rp. {transaction.amount}
              </p>
            </div>
            <div className={`${styles["trf-detail"]}`}>
              <p className={`${styles["title-trf"]}`}>Balance Left</p>
              <p className={`${styles["detail-trf"]}`}>
                Rp. {userData.balance - transaction.amount}
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
              <p className={`${styles["detail-trf"]}`}>{transaction.notes}</p>
            </div>
            <a className={styles.continue} onClick={modalTrigger}>
              <p>Continue</p>
            </a>
          </div>
        </div>
      </div>
      <Footer />
      <div className={styles.modalContainer} hidden={isHide}>
        <div className="d-flex flex-column">
          <span className={`${styles["text-modal1"]}`}>Enter PIN to Transfer</span>
          <span className={`${styles["text-modal2"]}`}>Enter your 6 digits PIN for confirmation to continue transferring money. </span>
        </div>
        <div className={`${styles["wrap-pin"]}`}>
          <input
            className={styles.inputPin}
            maxLength={1}
            onChange={(e) => handlePinInput(1, e)}
            onKeyUp={(event) => onKeyUpEvent(1, event)}
            onFocus={onFocusEvent(1)}
            id="codeBox1"
            type="number"
          />
          <input
            className={styles.inputPin}
            maxLength={1}
            onChange={(e) => handlePinInput(2, e)}
            onKeyUp={(event) => onKeyUpEvent(2, event)}
            onFocus={onFocusEvent(2)}
            id="codeBox2"
            type="number"
          />
          <input
            className={styles.inputPin}
            maxLength={1}
            onChange={(e) => handlePinInput(3, e)}
            onKeyUp={(event) => onKeyUpEvent(3, event)}
            onFocus={onFocusEvent(3)}
            id="codeBox3"
            type="number"
          />
          <input
            className={styles.inputPin}
            maxLength={1}
            onChange={(e) => handlePinInput(4, e)}
            onKeyUp={(event) => onKeyUpEvent(4, event)}
            onFocus={onFocusEvent(4)}
            id="codeBox4"
            type="number"
          />
          <input
            className={styles.inputPin}
            maxLength={1}
            onChange={(e) => handlePinInput(5, e)}
            onKeyUp={(event) => onKeyUpEvent(5, event)}
            onFocus={onFocusEvent(5)}
            id="codeBox5"
            type="number"
          />
          <input
            className={styles.inputPin}
            maxLength={1}
            onChange={(e) => handlePinInput(6, e)}
            onKeyUp={(event) => onKeyUpEvent(6, event)}
            onFocus={onFocusEvent(6)}
            id="codeBox6"
            type="number"
          />
        </div>

        <button onClick={() => handleTransfer()} id="confirm" className="btn btn-secondary px-5 py-2">Continue</button>
      </div>
    </div>
  );
}

export default Confirmation;
