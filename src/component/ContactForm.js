import React, { useState } from "react";
import "./ContactForm.css";
import { db } from "./Firebase";
import { Form, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    db.collection("contacts")
      .add({
        name: name,
        email: email,
        message: message,
      })
      .then(() => {
        alert("We will get back to you soon👍");
        setLoader(false);
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="contact-outer-layer">
      <Row>
        <Col lg={6} md={12}>
          <Col className="text-center">
            <h2>Catch Us Here.</h2>
            <p className="mb-0">Southern Multipacks Pvt Ltd.</p>
            <p className="mb-0">Thellakom P.O, Kottayam - 686630</p>
            <p className="mb-0">
              Phone:{" "}
              <a href="tel:956-796-6016" style={{ color: "black" }}>
                {" "}
                &nbsp;&nbsp;+91 9567966016
              </a>
            </p>
            <p>
              Email:
              <a
                href="mailto:southernmultipacks20@gmail.com"
                style={{ color: "black" }}
              >
                &nbsp;&nbsp;southernmultipacks20@gmail.com
              </a>
            </p>
          </Col>

          <iframe
            title="Southern Multipacks"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3395.6479522619866!2d76.53746341479132!3d9.645085793094989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b07d58fdf393e4d%3A0x59b52d6715dcf0a3!2sSouthern%20Multipacks!5e1!3m2!1sen!2sin!4v1610369890856!5m2!1sen!2sin"
            width="100%"
            height="450"
            frameborder="0"
            style={{ border: 0 }}
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
          ></iframe>
        </Col>
        <Col lg={6} md={12}>
          <Form className="form" onSubmit={handleSubmit}>
            <div className="contact-container">
              <h2>Contact Us</h2>
              <p className="mb-0">Let's talk business or just have a coffee.</p>
              <p className="form_sub_head">We would love to hear from you!</p>
              <Form.Group controlId="forName" className="col">
                <Form.Label>Name </Form.Label>
                <Form.Control
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="forEmail" className="col">
                <Form.Label>Email </Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="forEmail" className="col">
                <Form.Label>Message </Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <button
                className="btn__submit"
                type="submit"
                style={{ background: loader ? "#ccc" : "#000000" }}
              >
                Submit
              </button>
            </div>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default ContactForm;
