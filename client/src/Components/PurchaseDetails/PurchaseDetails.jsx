import { useParams } from "react-router";
import "./PurchaseDetails.css";
import { useState, useEffect } from "react";
import axios from "axios";
export default function PurchaseDetails() {
  let [purchase, setPurchase] = useState([]);
  let [loading, setLoading] = useState(true);
  let params = useParams();
  useEffect(() => {
    const setup = async () => {
      await getData();
    };
    setup();
  }, []);
  async function getData() {
    setLoading(true);
    let purchase = await axios.get(
      `http://localhost:3001/store/purchases/${params.id}`
    );
    console.log(purchase);
    setPurchase(purchase.data.purchase);
    setLoading(false);
  }

  if (!loading) {
    console.log(purchase);
    let name = purchase.name;
    let email = purchase.email;
    let lines = purchase.receipt.lines;

    let products = purchase.receipt.productRows;

    return (
      <div class="dets">
        <h1 style={{ textAlign: "center" }}>Purchase Details</h1>
        <p>Name: {name}</p>
        <p>Email: {email}</p>
        {lines.map((item, index) => {
          return (
            <div>
              <p>{item}</p>
            </div>
          );
        })}
        <h2 style={{ textAlign: "center" }}>Purchased Products</h2>
        <div class="products">
          {products.map((item, index) => {
            return (
              <img class="p" src={item.image} width="400px" height="300px" />
            );
          })}
        </div>
      </div>
    );
  }
}
