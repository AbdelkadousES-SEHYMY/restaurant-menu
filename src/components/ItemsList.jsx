import React from 'react'
import { Card, Col, Row } from 'react-bootstrap';
import { Zoom } from 'react-reveal';

const ItemsList = ({ itemsData }) => {
  return (
    <Row className="my-3">
      <Col sm="12">
        <Zoom>
          {itemsData.length >= 1 ? (
            itemsData.map((item, index) => (
              <Card className="d-flex flex-row card-color my-2" key={index}>
                <Card.Img
                  className="img-item"
                  variant="top"
                  src={item.imgUrl}
                />
                <Card.Body>
                  <Card.Title className="justify-content-between d-flex">
                    <div className="item-title">{item.title}</div>
                    <div className="item-price">{item.price}</div>
                  </Card.Title>
                  <Card.Text className="py-2">
                    <p className="item-description">{item.description}</p>
                  </Card.Text>
                </Card.Body>
              </Card>
            ))
          ) : (
            <h2>There is no meals</h2>
          )}
        </Zoom>
      </Col>
    </Row>
  );
};

export default ItemsList
