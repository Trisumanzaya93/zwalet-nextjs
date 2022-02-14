import Footer from "../../modules/footer";
import Layout from "../../modules/layout";
import Navbar from "../../modules/navbar";
import SideBar from "../../modules/sidebar";
import styles from "../../commons/styles/profile.module.css";
import css from "../../commons/styles/changepassword.module.css";
import { useState } from "react";
import { updatePinAction } from "../../redux/actions/users";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";

function Updatepin() {
  const dispatch=useDispatch()
  const router=useRouter()
  const [pin, setPin] = useState(["", "", "", "", "", ""]);
  const handlePinInput = (index, e) => {
    const newPin = pin;
    newPin[index - 1] = e.target.value;
    setPin(newPin);
  };

  function getCodeBoxElement(index) {
    if (typeof window !== "undefined") {
      return document.getElementById("codeBox" + index);
    }
  }

  function onKeyUpEvent(index, event) {
    const eventCode = event.which || event.keyCode;

    if (typeof window !== "undefined") {
      let confirm = document.getElementById("confirm");
      if (getCodeBoxElement(index).value.length === 1) {
        if (index !== 6) {
          getCodeBoxElement(index + 1).focus();
        } else {
          getCodeBoxElement(index).blur();
          // Submit code
          confirm.classList = `${styles["btn-1"]}`;
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
  
  const handleUpdatePin = async (e) => {
    // check pin
    console.log('fuuuu');
    e.preventDefault();
    const token = JSON.parse(localStorage.getItem("token"));
    const id = JSON.parse(localStorage.getItem("id"));
    const joinPin = pin.join('');
    const body={
      pin:joinPin
    }
    console.log(body,token,id);

    try {
      const checkPin =  await dispatch(updatePinAction(id,body,token))
      if(checkPin.value.data.status === 200) {
          alert('succes set pin');
          router.push('/profile')
          
      }
    } catch (error) {
      alert('Pin gagal')
    }
  }

  return (
    <div>
      <Layout title={"update pin"}/>
      <Navbar />
      <div className="d-flex">
        <SideBar />
        <div className={`${styles["profile-section"]}`}>
        <div >
          <p className={`${css["profile-title"]}`}>Change Pin</p>
          <p className={`${css["profile-desc"]}`}>
            Enter your current 6 digits Zwallet PIN below <br />
            to continue to the next steps.
          </p>
        </div>
        <div className="d-flex justify-content-center">
        <form className={styles.wraperInput}>
          <div className={`${styles["form-input"]}`}>
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
          <button
            onClick={(e) => handleUpdatePin(e)}
            className={styles.btnDisable}
            id="confirm"
          >
            Confirm
          </button>
        </form>
        </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Updatepin;
