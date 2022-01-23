import React, { Component } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import Toggle from "../Toggle";
import PiImg from "../../assets/images/Raspberry_Pi.png";

export default class CartDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      itemCount: 1,
      subTotal: 40,
      falseShipping: true,
    };
  }

  render() {
    const { itemCount, subTotal } = this.state;
    const shippingTotal = Number(this.props.data);
    const orderTotal = subTotal + shippingTotal;

    return (
      <Container className="cart-details-container">
        <Toggle className="container-fluid">
          {({ on, off, toggle }) => (
            <div className="container-fluid">
              <h2 onClick={toggle}>
                <span>See item Details</span> {off && <span>+</span>}
                {on && <span>-</span>}
              </h2>
              {on && (
                <Container>
                  <Row>
                    <Col xs="9">
                      <div className="media">
                        <div className="media-body">
                          <img
                            src={PiImg}
                            className="img-fluid mr-3"
                            alt="raspberry pi"
                          />
                        </div>
                        <h5 className="mt-0">
                          Raspberry Pi 3 Model B Motherboard
                        </h5>
                      </div>
                      <div className="media-count">
                        <p>1</p>
                      </div>
                    </Col>
                    <Col xs="3">
                      <div className="conatiner-fluid">
                        <h6>$38.50</h6>
                      </div>
                    </Col>
                  </Row>
                </Container>
              )}
            </div>
          )}
        </Toggle>
        <Container className="mt-4">
          <Row>
            <Col xs="9">
              <h6>Subtotal ({itemCount} items):</h6>
            </Col>
            <Col xs="3">
              <h6>${subTotal}</h6>
            </Col>
          </Row>
          <Row>
            <Col xs="9">
              <h6>Shipping:</h6>
            </Col>
            <Col xs="3">
              <h6>
                {shippingTotal !== 0 ? (
                  "$" + Number(this.props.data)
                ) : (
                  <span>--</span>
                )}
              </h6>
            </Col>
          </Row>
          <Row>
            <Col xs="9">
              <h6>Total: </h6>
            </Col>
            <Col xs="3">
              <h6>${orderTotal}</h6>
            </Col>
          </Row>
        </Container>
        <Container>
          <div>
            <a href="/">100% Price Match Guarantee</a>
          </div>
          <div>
            <a href="/">90 Day Returns</a>
          </div>
        </Container>
        <Button
          className="mt-4"
          color="primary"
          href="https://buy.stripe.com/test_dR69Ej74u7gc4126oo"
          block
        >
          COMPLETE ORDER
        </Button>
      </Container>
    );
  }
}
