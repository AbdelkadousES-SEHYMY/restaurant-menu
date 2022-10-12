import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Roll from "react-reveal/Roll";


const Category = ({ filterByCategory,allCategory }) => {
  const onFilterByCategory = (cat) => {
    filterByCategory(cat);
  }
  return (
    <Row className="m-2 mb-5">
      <Col sm="" className="d-flex justify-content-center">
        <div>
          <Roll>
            {allCategory.length >= 1 ? (
              allCategory.map((item) => (
                <button
                  onClick={() => onFilterByCategory(item)}
                  className="btn mx-2"
                  style={{ border: "1px solid #b45b35" }}
                >
                  {item}
                </button>
              ))
            ) : (
              <h2>There is no category</h2>
            )}
          </Roll>
        </div>
      </Col>
    </Row>
  );
};

export default Category
