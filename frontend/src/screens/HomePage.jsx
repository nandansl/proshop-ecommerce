/* eslint-disable react/jsx-key */
import Product from "../components/Product.jsx";
import products from "../products.js";
import { Col, Row } from "react-bootstrap";

const HomePage = () => {
  return (
    <>
      <h1>Latest Product</h1>
      <Row>
        {products.map((product) => {
          return (
            <Col sm={12} md={6} lg={4} xl={3}>
              <Product product={product}/>
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default HomePage;
