import React from "react";
import { Component } from "react";
//import {Link} from 'react-router-dom';
import {Nav, Navbar,NavDropdown, Container, Form, FormControl, Button} from 'react-bootstrap';
//import bootstrap from 'react-bootstrap';



class Header extends Component{
render(){

  const logout=()=>{
    localStorage.clear();
    window.location.replace('/customer/login');
  }

  var menu;
  if(localStorage.getItem('token')){

    menu=(
      <Navbar bg="black" varient={"dark"} expand="lg">
  <Container className="texthead">
    <Navbar.Brand href="/" className="fitcolor">FIT-NESS</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="customer/register">register</Nav.Link>
        <Nav.Link href="customer/login">Login</Nav.Link>
        <NavDropdown title="Supplement" id="basic-nav-dropdown">
          <NavDropdown.Item href="/Addsupplement">Addsupplement</NavDropdown.Item>
          <NavDropdown.Item href="/showsupplement">Showsupp</NavDropdown.Item>
          <NavDropdown.Item href="/updatesupplement">UpdateSupplement</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="Product" id="basic-nav-dropdown">
          <NavDropdown.Item href="/addproduct">addproduct</NavDropdown.Item>
          <NavDropdown.Item href="/showproduct">Show Product</NavDropdown.Item>

    </NavDropdown>

    <NavDropdown title="Workout" id="basic-nav-dropdown">
          <NavDropdown.Item href="/Addsupplement">Addsupplement</NavDropdown.Item>
          <NavDropdown.Item href="/showsupplement">Show supplement</NavDropdown.Item>

    </NavDropdown>

    <li class="nav-item active">
        <button onClick={logout}>Log out</button>
      </li>
      </Nav>

      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
 
</Navbar>


    )

  }
  else{
    menu=(
      <Navbar bg="green" varient={"dark"} expand="lg">
  <Container className="texthead">
    <Navbar.Brand href="/">FIT-NESS</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="customer/register">register</Nav.Link>
        <Nav.Link href="customer/login">Login</Nav.Link>
    
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
 
</Navbar>

    )
  }
return(
 
<>
<div className="container">

<div className="row">    


  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>


  {menu}


</div>
</div>
 </>
)
}
}
export default Header;