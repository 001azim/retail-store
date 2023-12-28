import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import '../css/home.css'
import 'bootstrap/dist/css/bootstrap.min.css';  


export default function Home(){
  const navigate=useNavigate()
    return(
        <>
        <div className='backgroundhmge'>
         <div>
        <Navbar className='bg-black'>
        
          <Navbar.Brand href="#home">Debit relief</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <button id="sn" onClick={()=>navigate("/")}>sign in</button>
              <button id="sn" onClick={()=>navigate("/shopownerregister")}>sign up</button>
              
            </Nav>
          </Navbar.Collapse>
        
      </Navbar>
      
      </div>
      
   
    <div>
    <h1 style={{fontSize:"100px"}}><i>If you are going to be rich you need to be Accountable for your MONEY</i></h1>
    </div>
    </div>
      </>
    )
}