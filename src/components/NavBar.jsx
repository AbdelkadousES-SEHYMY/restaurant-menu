import React, { useState } from 'react'
import {  Container, Form, Nav, Navbar, Row } from 'react-bootstrap'

const NavBar = ({ filterBySearch }) => {
  const [keyWord, setkeyWord] = useState('')
  const onSearch = (e) => {
    e.preventDefault();
    filterBySearch(keyWord);
    setkeyWord('')
  }
  return (
    <Row>
      <Navbar bg="dark" expand="lg">
        <Container>
          <Navbar.Brand>
            <div className="brand-color">Resturant</div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="mx-2 form-control"
                onChange={(e) => setkeyWord(e.target.value)}
                value={keyWord}
              />
              <button className="btn-search" onClick={(e)=>onSearch(e)}>
                Search
              </button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Row>
  );
};

export default NavBar
