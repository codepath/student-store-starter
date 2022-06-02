import axios from "axios";
import React, { useEffect } from "react";
import "./PurchasePage.css";
import { useState } from "react";
import PurchaseCard from "../PurchaseCard/PurchaseCard";
export default function PurchasePage() {
  let [purchases, setPurchases] = useState([]);
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    const setup = async () => {
      await getData();
    };
    setup();
  }, []);
  async function getData() {
    setLoading(true);
    let purchases = await axios.get(`http://localhost:3001/store/purchases`);
    setPurchases(purchases.data.purchases);
    setLoading(false);
  }

  if (!loading) {
    return (
      <div class="wr">
        <h1 style={{ textAlign: "center" }}>Purchases</h1>
        <br />
        <div class="purchases">
          {purchases.map((item, index) => {
            return <PurchaseCard item={item} />;
          })}
        </div>
      </div>
    );
  }
}
