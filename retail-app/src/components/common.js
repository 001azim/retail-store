import React from 'react';
import { useState } from 'react';
import icon1 from '../images/debit.png'
import icon2 from '../images/credit.png'
import "../css/cus-list.css"
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Logo from '../images/logos.png'


export default function Common() {
  const back = () => window.history.back()
  const [file, setFile] = useState();
  function handleChange(e) {
    setFile(URL.createObjectURL(e.target.files[0]));
  }
  let currentTime = new Date();
  let options = { timeStyle: 'short', hour12: true };
  let timeString = currentTime.toLocaleTimeString('en-US', options);



  return (
    <>
      <div className='box'>
        <h6 className='time'>{timeString}</h6>
        <Navbar key={false} expand={false} bg="primary" data-bs-theme="dark">
          <Container fluid>
            <Navbar.Brand href="#"><img src={Logo} alt='logo' width={90} id="logo" /></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-false-${false}`} style={{ borderColor: 'white' }} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-false-${false}`}
              aria-labelledby={`offcanvasNavbarLabel-false-${false}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-false-${false}`}>
                  <img src='https://dragonflywellbeing.co.uk/wp-content/uploads/2021/02/Dragonfly-Wellbeing-Logo.png' alt='logo' width={130} />
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <input type="file" onChange={handleChange} hidden />
                  <img src={file} alt='img' style={{ width: "100px", height: "100px", borderRadius: "50%" }} />
                  <Nav.Link href="#action1">Home</Nav.Link>
                  <Nav.Link href="#action2">Link</Nav.Link>
                  <NavDropdown
                    title="Dropdown"
                    id={`offcanvasNavbarDropdown-false-${false}`}
                  >
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      </div>
      <div className='menubox' style={{ position: 'fixed', bottom: 0, left: '50%', transform: 'translateX(-50%)' }} >
        <button onClick={back} style={{ backgroundColor: 'white' }} ><i class="fa-solid fa-arrow-left"></i></button>
        <Link to={`/addcustomer`}><span><img src={icon1} alt='icon' /></span></Link>
        <Link to={`/customerlist`}><i class="fa-solid fa-rectangle-list"></i></Link>
        <Link to={`/`}><i class="fa-solid fa-house"></i></Link>
        <Link to={`/msg`}><i class="fa-solid fa-message"></i></Link>
        <Link to={`/debitlist`}><span><img src={icon2} alt='icon' /></span></Link>
        <button onClick={() => window.history.forward()} style={{ backgroundColor: 'white' }}><i class="fa-solid fa-arrow-right"></i></button>
      </div>
    </>
  )
}
