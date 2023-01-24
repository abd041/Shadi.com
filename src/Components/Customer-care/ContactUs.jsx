import React from "react";
import { Card, Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import "./customercare.css";

const ContactUs = () => {
  return (
    <>
      <Row>
        <Col md="12" className="customercare_title">
          <h4>Contact Us</h4>
        </Col>
      </Row>
      <Container className="c_care_contact_cont">
        <Card className="contact_us_card">
          <h5 className="contact_us_card_title">You Can Contact Us</h5>
          <span className="contact_us_card_subtitle">+00932932948992</span>
          <p className="para_contact_us_card">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text. All the Lorem Ipsum generators on the Internet tend
            to repeat predefined chunks as necessary, making this the first true
            generator on the Internet. It uses a dictionary of over 200 Latin
            words, combined with a handful of model sentence structures, to
            generate Lorem Ipsum which looks reasonable.
          </p>
        </Card>
        <Card className="contact_us_card">
          <div className="card_inner_links">
            <Link to="" className="contact_us_card_links">
              <h5>Submit a Request</h5>
            </Link>
            <span className="contact_us_card_subtitle">
              Write to customer care
            </span>
          </div>
          <div className="card_inner_links">
            <h5 className="contact_us_card_links">Need instant help?</h5>
            <span className="contact_us_card_subtitle">24/7 live Chat</span>
          </div>
          <div className="card_inner_links">
            <h5 className="contact_us_card_links">My Requests</h5>
            <span className="contact_us_card_subtitle">
              View Status of my prveious requests
            </span>
          </div>
        </Card>
        <Card className="contact_us_chat_card">
          <div className="col-12 chat_card_header">
            <h5>
              Shaadi<span className=".com">.com</span>
            </h5>
            <i className="fa fa-list-ul"></i>
          </div>
          <div className="col-12 chat_msgs_cont">
            <div className="msg_div1">
              <div className="text_msg">
                hello this is text message for test. hello this is text message
                for test.
              </div>
              <div className="time_div">
                <span>12:00</span>
              </div>
            </div>
            <div className="msg_div2">
              <div className="text_msg">
                hello this is text message for test. hello this is text message
                for test.
              </div>
              <div className="time_div">
                <span>12:00</span>
              </div>
            </div>
            <div className="msg_div1">
              <div className="text_msg">
                hello this is text message for test. hello this is text message
                for test.hello this is text message for test.
              </div>
              <div className="time_div">
                <span>12:00</span>
              </div>
            </div>
            <div className="msg_div2">
              <div className="text_msg">
                hello this is text message for test.
              </div>
              <div className="time_div">
                <span>12:00</span>
              </div>
            </div>
          </div>
        </Card>
      </Container>
    </>
  );
};

export default ContactUs;
