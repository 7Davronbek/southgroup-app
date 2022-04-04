import React, { useEffect, useState } from "react";
import Catalog from "./components/Catalog";
import Header from "./components/Header";
import History from "./components/History";
import NewProduct from "./components/NewProduct";
import LastProduct from "./components/LastProduct";
import Number from "./components/Number";
import Partners from "./components/Partners";
import HashLoader from "react-spinners/HashLoader";
import Contacts from "./components/Contacts";

const App = () => {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 
    1000)
  }, [])
  return (
    <>
    {loading ? 
      <div className="loader">
        <HashLoader className='loader' loading={loading} size="40" color="red" />
      </div> : ''}
      <Header />
      <Catalog />
      <NewProduct />
      <History />
      {/* <LastProduct /> */}
      <Number />
      <Partners />
      <Contacts />
    </>
  );
};

export default App;
