import "./Mainpage.css";
import Content from "../Content/Content";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Subnav from "../Subnav/Subnav";
import { BrowserRouter as Router } from "react-router-dom";
import { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import axios from "axios";

function Mainpage() {
  let [products, setProducts] = useState(undefined);
  let [loading, setLoading] = useState(true);

  async function getData() {
    setLoading(true);
    axios.get("http://localhost:3001/store").then((data) => {
      setProducts(data.data.products);
    });
  }
  useEffect(() => {
    const setup = async () => {
      await getData();
    };
    setup();
  }, []);

  useEffect(() => {
    if (products) {
      setLoading(false);
      console.log(products);
    }
  }, [products]);

  if (!loading) {
    return (
      <Router>
        <Sidebar />
        <Navbar />
        <Subnav />
        <Content products={products} />
        <Footer />
      </Router>
    );
  } else {
    return;
  }
}

export default Mainpage;
