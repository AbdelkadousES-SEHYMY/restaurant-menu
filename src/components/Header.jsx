import React from 'react'
import { Row } from 'react-bootstrap'

const Header = () => {
  return (
    <Row>
      <div className="justify-content-center text-center ">
        <div className="title">Food menu</div>
      </div>
      <div className="justify-content-center d-flex">
        <p className="underline  "></p>
      </div>
    </Row>
  );
}

export default Header
