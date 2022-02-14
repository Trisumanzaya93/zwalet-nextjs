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
  const { data,pagination } = allState.serchReciver;
  const [param,setParam] = useState({page: 1,...router.query})
  const onClickNext=()=>{
    console.log(pagination.totalPage,param);
    if(parseInt(param.page) <= pagination.totalPage){
      let counterPage= parseInt(param.page) +1
      const newParam = {
        ...param,
        page: counterPage
      }
      setParam(newParam)
      router.query = newParam;
      router.push({
        pathname: router.pathname,
        query: router.query
      });
      console.log(param.page);
    }else{
      alert('page habis')
    }
  }
  const onClickPrev=()=>{
    if(parseInt(param.page) > 1){
      let counterPage= parseInt(param.page) -1
      const newParam = {
        ...param,
        page: counterPage
      }
      setParam(newParam)
      router.query = newParam;
      router.push({
        pathname: router.pathname,
        query: router.query
      });
    }else{
      alert('page gak ada ')
    }
  }
  const onClickHandler = (id) => {
    router.push(`/transfer/${id}`);
  };
  const getUsers=()=>{
    console.log("diidi", router.query);
    const newParam = {...param, ...router.query};
    setParam(newParam)
    const token = JSON.parse(localStorage.getItem("token"))
    dispatch(
      searchReciverAction(newParam, token)
    );
  }
  const handleSearch=(e)=>{
    const newParam = {
      ...param,
      search: e.target.value
    }
    console.log('e.target.value', e.target.value);
    router.query = newParam;
    router.push({
      pathname: router.pathname,
      query: router.query
    });
  const token = JSON.parse(localStorage.getItem("token"))
    setParam(newParam)
    dispatch(
      searchReciverAction(newParam,token)
    );
  }
   
  useEffect(() => {
    if (router.isReady) {
      getUsers();
      onClickHandler;
      // getHistoryPopular();
      //  hendleDEtailVehicle ()
    }
  }, [router]);
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
                    value={param.search}
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
                      onError={()=>image} priority={true} width={100}height={100}quality={100} alt="" />
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
            <div className={`${styles["pagination-list"]}`}>
                  <button className={`${styles["pagination-prev"]}`} onClick={onClickPrev} >
                    Previous
                  </button>
                  <button className={`${styles["pagination-next"]}`} onClick={onClickNext}>
                    Next page
                  </button>
                </div>
          </div>
        </div>
        <Footer />
      </Layout>
    </div>
  );
}

export default Transfer;
