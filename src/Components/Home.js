import React from "react";
import { Col, Row, Button} from "react-bootstrap";
import "./Home.css";
import { Link } from "react-router-dom";


import one from "../assets/one.jpg";

const Home = () => {
  return (
    <div>
      <Row className="heading">
        <Col sm={6}>Start making Money</Col>
        <Col sm={6}> <Link to="/Recharge"> Recharge</Link></Col>
      </Row>
      <Row className="Superplan">
        <Col sm={12}>Super Plan</Col>
      </Row>
      <Row>
        <Col sm={12}>
          <img src={one} />
        </Col>
        <Col className="daily" sm={12}>
          Daily Withdrawal of income
        </Col>
        <Col className="price" sm={6}>
          Trading Price 700
        </Col>
        <Col className="price" sm={6}>
          {" "}
          Daily income 25
        </Col>
        <Col className="price" sm={6}>
          Revenue Cycle 365 days
        </Col>
        <Col className="price" sm={6}>
          {" "}
          Total income 9125
        </Col>
        <Col sm={12}>
          <Button>Confirm Purchase</Button>
        </Col>
      </Row>
    </div>
  );
};
export default Home;
