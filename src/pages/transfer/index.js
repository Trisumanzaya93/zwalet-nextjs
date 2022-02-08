import Navbar from "../../modules/navbar";
import Footer from "../../modules/footer";
import SideBar from "../../modules/sidebar";
import Layout from "../../modules/layout";
import styles from "../../commons/styles/transfer.module.css";
import Image from "next/image";
import image from "../../commons/assets/image/default-user.png";
import icon from "../../commons/assets/image/search.svg"
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { searchReciverAction } from "../../redux/actions/users";

function Transfer() {
  const router = useRouter();
  const dispatch= useDispatch()
  const allState = useSelector((state) => state);
  const { data } = allState.serchReciver;
  console.log(data);
  const [param,setParam] = useState({})
  const onClickHandler = (id) => {
    router.push(`/transfer/${id}`);
  };
  const getUsers=()=>{
    console.log("diidi");
    const token = JSON.parse(localStorage.getItem("token"))
    dispatch(
      searchReciverAction(param,token)
    );
  }
  const handleSearch=(e)=>{
    const newParam = {
      ...param,
      search: e.target.value
    }
  const token = JSON.parse(localStorage.getItem("token"))
    setParam(newParam)
    dispatch(
      searchReciverAction(newParam,token)
    );
  }

  useEffect(() => {
    getUsers();
    onClickHandler;
    // getHistoryPopular();
    //  hendleDEtailVehicle ()
  }, []);
  return (
    <div>
      <Layout title="Tranfer">
        <Navbar />
        <div className="d-flex">
          <SideBar />
          <div className={styles.wrapperFull}>
            <div className={`${styles["history-section"]}`}>
              <div className={`${styles["transaction-history"]}`}>
                <p>Search Receiver</p>
              </div>
              <div className={styles.search}>
                <div className={`${styles["nav-search"]}`}>
                  <Image src={icon} alt=""/>
                  {/* <img src="../../assets/img/search.svg"> */}
                  <input
                    type="search"
                    name="search"
                    className={`${styles["search-input"]}`}
                    placeholder="search receiver here"
                    onChange={(e)=> handleSearch(e)}
                  />
                </div>
              </div>
              {Array.isArray(data) &&
          data.length > 0 &&
          data.map((data, idx) => (
              <div className={`${styles["this-week"]}`} key={idx} onClick={()=> onClickHandler(data.id)}>
                <div className={`${styles["history"]}`}>
                  <div className={`${styles["transaction-history"]}`}>
                    <div className={styles.history}>
                      <Image src={data.image !== null ? `${process.env.NEXT_PUBLIC_HEROKU_IMAGE}${data.image}` : image}  
                      width={100}height={100}quality={100} alt="" />
                      <div className={styles.transaction}>
                        <p className={styles.name1}>{`${data.firstName} ${data.lastName}`}</p>
                        <p className={styles.phone}>{data.noTelp ?? "-"}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          ))}
            </div>
          </div>
        </div>
        <Footer />
      </Layout>
    </div>
  );
}

export default Transfer;
