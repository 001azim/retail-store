import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import '../css/home.css'

export default function Home(){
  const navigate=useNavigate()
    return(
        <>
        <div className='backgroundhmge'>
         <div>
        <Navbar >
      
          <Navbar.Brand >Debit relief</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <button id="sn" onClick={()=>navigate("/")}>sign in</button> 
              <button id="sn" onClick={()=>navigate("/shopownerregister")}>sign up</button> 
             
            </Nav>
          </Navbar.Collapse>
     
      </Navbar>
      </div>
        <div className='quotes'>
          <h1 className='quote'>He who is quick</h1>
          <h1 className='quote'>To borrow</h1>
          <h1 className='quote'>is slow to pay</h1>  
        </div>
    </div>
      </>
    )
}