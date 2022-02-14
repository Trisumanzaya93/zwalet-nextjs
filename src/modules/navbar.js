import Link from "next/link";
import Image from "next/image";
import styles from "../commons/styles/navbar.module.css"
import image from "../commons/assets/image/default-user.png"
import icon from "../commons/assets/image/bell.svg"
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getUserByIdAction } from "../redux/actions/users";


function Navbar() {
  
  const dispatch = useDispatch();
  const allState = useSelector((state) => state);
  const { userData } = allState.userById;
  
  const checkLogin = () => {
    const token = JSON.parse(localStorage.getItem("token"));
    const id = JSON.parse(localStorage.getItem("id"));
    dispatch(
      getUserByIdAction(id,token)
    );
  };
  
  useEffect(() => {
    checkLogin();
  }, []);
  return <div>
      <nav className={styles.nav}>
        <p className={styles["title"]}>Zwallet</p>
        <div className={styles["profile"]}>
          <Link href="/profile" passHref>
            <div className="photo">
              <Image src={userData.image !== null ? `${process.env.NEXT_PUBLIC_HEROKU_IMAGE}${userData.image}` : image} 
               onError={()=>image}  width={52}height={52} quality={52} alt="foto profile" />
            </div>
          </Link>

          <p className={styles.name}>{`${userData.firstName} ${userData.lastName}`}</p>
          <p className={styles["phone"]}>{userData.noTelp ?? "-"}</p>
          <div className={styles["icon"]}>
            <Image src={icon} alt="bell" />
          </div>
        </div>
      </nav>
  </div>;
}

export default Navbar;
