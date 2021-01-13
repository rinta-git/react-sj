import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Modal, Row, Col } from "react-bootstrap";

function CardItem(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <li className="cards__item">
        <Link className="cards__item__link" to={props.path}>
          <figure className="cards__item__pic-wrap">
            <img
              className="cards__item__img"
              alt="Product Images"
              src={props.src}
              onClick={handleShow}
            />
          </figure>
          <div className="cards__item__info">
            <h5 className="cards__item__text">{props.text}</h5>
          </div>
        </Link>
      </li>

      <Modal size="md" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.text}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col>
              <img
                className="modal__img"
                alt="Product Images"
                src={props.src}
                onClick={handleShow}
              />
            </Col>
            <Col>
              <p> Color : {props.color}</p>
              <p> Available sizes : {props.size}</p>
              <p> Material : {props.material}</p>
              <p> Price : {props.rate}/- INR</p>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default CardItem;
