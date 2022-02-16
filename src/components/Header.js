import React from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';

export default function Header({setsearch}) {

  return (<>
      <Navbar expand="lg" fixed='top' style={{backgroundColor:'rgb(204, 133, 0)'}} >
  <Container fluid style={{margin:'0 12%'}}>
    <LinkContainer style={{color:'white'}} to='/'>
    <Navbar.Brand href="#" >Home</Navbar.Brand>
    </LinkContainer>
    <Navbar.Toggle aria-controls="navbarScroll" />
      <Form className="d-flex">
        <FormControl 
        onChange={(e)=>setsearch(e.target.value)}
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
      </Form>
  </Container>
</Navbar>
  </>);
}
