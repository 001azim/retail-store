import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import '../css/home.css'
import Logo from '../components/logos.png';

export default function Home(){
  const navigate=useNavigate()

    return(
        <>
        <div className='bg'>
          <div className='backgroundhmge'>
            <Navbar >
            <Navbar.Brand href="#"><img src={Logo} alt='logo' width={90} id="logo"/></Navbar.Brand>
          
            </Navbar>
            <div className='buttonone'>
            
            <button className='btn btn-success' onClick={()=>navigate("/shopownerlogin")}>Sign in</button>
            </div>
            <div className='buttonsecond'>
            <button className='btn btn-success'  onClick={()=>navigate("/")}>About</button>
            </div>
                   
           
            <div className='quotes'>
              <h1 className='quote'>He who is quick</h1>
              <h1 className='quote'>To borrow</h1>
              <h1 className='quote'>is slow to pay</h1> 
            </div>
            <div className='letter'>
            <h6>Not registered yet? click here</h6>
            </div>
            <div className='buttonthird'>
            <button className='btn btn-primary' onClick={()=>navigate("/shopownerregister")}>Get started</button>
            </div>
            
        </div>
    </div>
      </>
    )
}