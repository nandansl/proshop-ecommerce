/* eslint-disable react/jsx-key */
import Product from "../components/Product.jsx";
import { useState,useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import axios from "axios";

const HomePage = () => {
  const [products,setProducts] = useState([]);
  useEffect(()=> {
    const fetchProducts = async()=>{
      const{data} = await axios.get("/api/products");
      console.log(data);
      setProducts(data);
  
    };
    fetchProducts();
  },[]);

  return (
    <>
      <h1>Latest Product</h1>
      <Row>
        {products && products.map((product) => {
          return (
            <Col sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default HomePage;
