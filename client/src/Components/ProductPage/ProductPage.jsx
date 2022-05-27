import axios from "axios";
import React, { useEffect } from "react";
import "./ProductPage.css";
import { useParams } from "react-router";
import { useState } from "react";
export default function ProductPage() {
  let [product, setProduct] = useState(undefined);
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
    let product = await axios.get("http://localhost:3001/store/" + params.id);
    setProduct(product.data.product);
  }
  useEffect(() => {
    if (product) {
      setLoading(false);
    }
  }, [product]);

  if (!loading) {
    let name = product.name;
    let category = product.category;
    let image = product.image;
    let description = product.description;
    let price = product.price;
    console.log(name);
    console.log(category);
    return (
      <div class="www">
        <div class="container">
          <img class="mm" src={image} alt="" />
          <h1>{name}</h1>
          <h2>{category}</h2>
          <p>{description}</p>
          <p>${price}</p>
        </div>
      </div>
    );
  }
}
