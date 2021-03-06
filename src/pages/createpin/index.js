import styles from "../../commons/styles/login.module.css";
import Sidelogin from "../../modules/sidelogin";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updatePinAction } from "../../redux/actions/users";
import { useRouter } from "next/router";

function Createpin() {
  const router = useRouter()
  const dispatch=useDispatch()
  const [disableConfirm, setDisableConfirm] = useState(false);
  const [pin, setPin] = useState(['','','','','','']);
  const allState = useSelector((state) => state);
  const { userData } = allState.auth;

  const handlePinInput = (index, e) => {
    const newPin = pin;
    newPin[index - 1] = e.target.value;
    setPin(newPin);
  }

  function getCodeBoxElement(index) {
    if (typeof window !== 'undefined'){
      return document.getElementById('codeBox' + index);
    }
  }

  function onKeyUpEvent(index, event) {
    const eventCode = event.which || event.keyCode;
    
    if (typeof window !== 'undefined'){
    let confirm = document.getElementById('confirm');
    if (getCodeBoxElement(index).value.length === 1) {
      if (index !== 6) {
        getCodeBoxElement(index+ 1).focus();
      } else {
        getCodeBoxElement(index).blur();
        // Submit code
        confirm.classList=`${styles["btn-1"]}`;
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

    try {
      const checkPin =  await dispatch(updatePinAction(id,body,token))
      if(checkPin.value.data.status === 200) {
          alert('succes set pin');
          router.push('/home')
          
      }else{
        alert("deprii")
      }
    } catch (error) {
      alert('Pin gagal')
    }
  }

  return (
    <div>
      <div className={styles.containerLogin}>
        <Sidelogin />
        <form className={`${styles["form-container"]}`}>
          <p className={styles.text2}>
            Did You Forgot Your Password? Don???t Worry, You Can Reset Your
            Password In a Minutes.
          </p>
          <p className={styles.text3}>
            To reset your password, you must type your e-mail and we will send a
            link to your email and you will be directed to the reset password
            screens.
          </p>
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
            <button
              onClick={(e) => handleUpdatePin(e)}
              className={styles.btnDisable}
              id="confirm"
            >
              Confirm
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Createpin;
