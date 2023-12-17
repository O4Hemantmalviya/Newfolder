import React from "react";
import { Row, Col, Button } from "react-bootstrap";

const Recharge = () => {
  return (
    <div>
      <Row>
        <Col sm={12}>
          <input type="text" placeholder="UPI ID xyz@4566" />
        </Col>
        <div>copy UPI ID </div>
        <Col sm={12}>
          Amount :<input type="text" />
        </Col>
        <Col sm={12}>
          UTI NO :<input type="text" />
        </Col>
        <Col sm={12}>
          <Button>Submit</Button>
        </Col>
      </Row>
    </div>
  );
};
export default Recharge;
