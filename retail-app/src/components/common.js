// import React,{ useState } from 'react';
// import Modal from 'react-bootstrap/Modal';
// import icon1 from '../debit.png'
// import icon2 from '../credit.png'
// import "../css/common.css"
// import { Link,useNavigate } from "react-router-dom";
// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import Offcanvas from 'react-bootstrap/Offcanvas';
// // import Box from '@mui/material/Box';
// // import BottomNavigation from '@mui/material/BottomNavigation';
// // import BottomNavigationAction from '@mui/material/BottomNavigationAction';
// // import RestoreIcon from '@mui/icons-material/Restore';
// // import FavoriteIcon from '@mui/icons-material/Favorite';
// // import LocationOnIcon from '@mui/icons-material/LocationOn';
// // import ContactEmergencyIcon from '@mui/icons-material/ContactEmergency';
// // import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
// // import HomeIcon from '@mui/icons-material/Home';
// // import MessageIcon from '@mui/icons-material/Message';

// // import { makeStyles } from '@material-ui/core/styles';

  
// // const useStyles = makeStyles({

// //   btmnav:{
// //     borderRadius: '50px',
    
// //   }

// // })


// export default function Common() {

//  const classes = useStyles();
//  const [value, setValue] = React.useState(0);
//  const [show, setShow] = useState(false);y

//  const handleClose = () => setShow(false);
//  const handleShow = () => setShow(true);
//  const navigate = useNavigate()

 
//   const back = () => window.history.back()

//   const [file, setFile] = useState();
//   function handleChange(e) {
//     console.log(e.target.files);
//     setFile(URL.createObjectURL(e.target.files[0]));
//   }

//   let currentTime = new Date();
//   let options = { timeStyle: 'short', hour12: true };
//   let timeString = currentTime.toLocaleTimeString('en-US', options);

//   //////////////////////////////////////////////////////////////////////////////////////////////////////
//   const [formState, setFormState] = useState({});

//   const changeHandler = (event) => {
//     setFormState({ ...formState, [event.target.name]: event.target.value });
//     console.log(formState)
//   };

// const handleclick = (event) =>{
//   event.preventDefault();
  
//     window.Email.send({  
//     SecureToken:"27d68705-c0fb-42ce-9398-0a80e7930099 ",
//     To: "ja84don@gmail.com",
//     From: `${formState.email}`,
//     Subject: "This is the Feedback",
//     Body: `${formState.fedMessage}`,
//     }).then(()=>alert("msg send sucessfully"));
    
//     }

//     //////////////////////////////////////////////////////////////////////////


//   return (
//     <>

//       <div className='box'>
//         <h6 className='time'>{timeString}</h6>

//         <Navbar key={false} expand={false} bg="primary" data-bs-theme="dark">
//           <Container fluid>
//             <Navbar.Brand href="#"><img src='https://dragonflywellbeing.co.uk/wp-content/uploads/2021/02/Dragonfly-Wellbeing-Logo.png' alt='logo' width={130} id="logo" /></Navbar.Brand>
//             <Navbar.Toggle aria-controls={`offcanvasNavbar-false-${false}`} style={{ borderColor: 'white' }} />

//             <Navbar.Offcanvas
//               id={`offcanvasNavbar-false-${false}`}
//               aria-labelledby={`offcanvasNavbarLabel-false-${false}`}
//               placement="end"
//             >
//               <Offcanvas.Header closeButton>
//                 <Offcanvas.Title id={`offcanvasNavbarLabel-false-${false}`}>
//                   <img src='https://dragonflywellbeing.co.uk/wp-content/uploads/2021/02/Dragonfly-Wellbeing-Logo.png' alt='logo' width={130} />
//                 </Offcanvas.Title>
//               </Offcanvas.Header>
//               <Offcanvas.Body>
//                 <Nav className="justify-content-end flex-grow-1 pe-3">
//                   <input type="file" onChange={handleChange} hidden />
//                   <img src={file} alt='img' style={{ width: "100px", height: "100px", borderRadius: "50%" }} />
//                   <Nav.Link href="#action1">Home</Nav.Link>
//                   <Nav.Link href="#action2">Link</Nav.Link>

//                   <NavDropdown
//                     title="Dropdown"
//                     id={`offcanvasNavbarDropdown-false-${false}`}
//                   >
//                     <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
//                     <NavDropdown.Item href="#action4">
//                       Another action
//                     </NavDropdown.Item>
//                     <NavDropdown.Divider />
//                     <NavDropdown.Item href="#action5">
//                       Something else here
//                     </NavDropdown.Item>
//                   </NavDropdown>
//                 </Nav>
//                 <Form className="d-flex">
//                   <Form.Control
//                     type="search"
//                     placeholder="Search"
//                     className="me-2"
//                     aria-label="Search"
//                   />
//                   <Button variant="outline-success">Search</Button>
//                 </Form>
//               </Offcanvas.Body>
//             </Navbar.Offcanvas>
//           </Container>
//         </Navbar>


//       </div>

//       <div className='feedback' >
//         {/* <button data-bs-toggle="modal" data-bs-target="#displyfeedback" className="feedback-style" >Feedback &nbsp;&nbsp;  <i style={{fontSize:"18px"}} class="fa-solid fa-comment-medical"></i></button> */}

      
//       <Button  onClick={handleShow} id="feedback-style" >
//       Feedback &nbsp;&nbsp;  <i style={{fontSize:"18px"}} class="fa-solid fa-comment-medical"></i>
        
//       </Button>
//       </div>
      
//       <Modal show={show} onHide={handleClose} className='formfeed'>
//         <Modal.Header closeButton>
//           <Modal.Title>Feedback</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//         <Form style={{ padding: "10px" }}  >
//               <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
//                 <Form.Label><b>Email address</b></Form.Label>
//                 <Form.Control
//                  type="email" 
//                  name="email" 
//                  onChange={changeHandler} 
//                  value={formState.email || ''} 
//                  placeholder="Enter Your Mail ID" />
//               </Form.Group>
//               <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
//                 <Form.Label><b>Message</b></Form.Label>
//                 <Form.Control 
//                 as="textarea" 

//                 name='fedMessage' 
//                 onChange={changeHandler} 
//                 rows={3}
//                 value={formState.fedMessage || ''} 
//                  />
//               </Form.Group>
//          </Form>
//           </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={handleclick}>
//             Save Changes
//           </Button>
//         </Modal.Footer>
//       </Modal>
//       {/* <div className='menubox' style={{ position: 'fixed', bottom: 0, left: '50%', transform: 'translateX(-50%)' }} >
//       <Box sx={{ width: 1000 }} >
//       <BottomNavigation
//       className={classes.btmnav} 
//         showLabels
//         value={value}
//         onChange={(event, newValue) => {
//           setValue(newValue);
//         }}
//       >
//         <BottomNavigationAction 
//         label="Recents" icon={<RestoreIcon />} />
//         <BottomNavigationAction component={Link}
//         to="/customerlist" label="Custumer" icon={<ContactEmergencyIcon />} />
//         <BottomNavigationAction component={Link}
//         to="/" label="Home" icon={<HomeIcon/>} /> */}
//         {/* <BottomNavigationAction component={Link}
//         to="/debitlist" label="credit" icon={<AccountBalanceWalletIcon/>} />
//         <BottomNavigationAction component={Link}
//         to="/msg" label="chat" icon={<MessageIcon />} />
//       </BottomNavigation> */}
// {/*       
//     </Box>
//     </div> */}
//       <div className='menubox' style={{ position: 'fixed', bottom: 0, left: '50%', transform: 'translateX(-50%)' }} >

//         <button onClick={back} style={{ backgroundColor: 'white' }} ><i class="fa-solid fa-arrow-left"></i></button>

//         <Link to={`/creditordebit`}><span><img src={icon1} alt='icon' /></span></Link>
//         <Link to={`/customerlist`}><i class="fa-solid fa-rectangle-list"></i></Link>

//         <Link to={`/`}><i class="fa-solid fa-house"></i></Link>
//         <Link to={`/msg`}><i class="fa-solid fa-message" ></i></Link>

//         <Link to={`/debitlist`}><span><img src={icon2} alt='icon' /></span></Link>


//         <button onClick={() => window.history.forward()} style={{ backgroundColor: 'white' }}><i class="fa-solid fa-arrow-right"></i></button>


//       </div>
//     </>
//   )
// }

