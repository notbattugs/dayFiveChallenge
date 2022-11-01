// import "./App.css";
// import Header from "./Pages/Header";
// import Content from "./Pages/Content";
// import meetings from "./Assets/Meetings.png";



// function App() {
//   return <>
//     <div className="container">
//       <Header
//         Logo="HOME"
//         GridOne="Products"
//         GridTwo="Services"
//         GridThree="Contact"
//         GridFour="Log in"
//         GridFive="Get Access"
//       />
//       <Content
//         title="Instant collaborations for remote teams"
//         text="All in one for your remote team chats, collaboration and track projects"
//         button="Get early access"
//         placeholder="Email"
//         type="email"
//       />
//     </div>

//     <div className=" secondPage" style={{width:"100%",height:"100vh",backgroundColor:"white",display:"flex"}}>
//     <div className="pageTwoNews" style={{display:"flex", flexDirection:"column"}}>
//       <h1 style={{width:"398px",height:"120px",fontSize:"48px"}}>Your Hub for teamwork</h1>
//       <span style={{width:"465px",height:"145px",fontSize:"18px"}}>Give everyone you work with—inside and outside your company—a more productive way to stay in sync. Respond faster with emoji, keep conversations focused in channels, and simplify all your communication into one place.</span>
//     <div style={{display:"flex",flexDirection:"row"}}>
//       <span style={{width:"87px",height:"28px",fontSize:"16px",color:"#4DA0FD"}} arrow="HOME">Learn more </span>
//       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9u-Eiw4HE-g8o-qHJYv5arQgXg5H1B59lbg&usqp=CAU"  alt="" style={{width:"15.78px",height:"6.59px"}}/>
//     </div>
        
      
//     </div>
//     <div className="pageTwoNewsPic">
//       <div className="eventOne">
//         <span style={{marginLeft:"15px",  marginTop:"100px" ,color:"#868686"}}>11:00 AM - 11:30 AM</span>

//       </div>
//       <img src={meetings}  alt="Meeting pic" />
//     </div>
   
//     </div>
//     </>
// }

// export default App;






// import 'bootstrap/dist/css/bootstrap.min.css';
// import {useState} from 'react';

// import {Button} from 'react-bootstrap';




// function App () {
//   const [isDisabled, setIsDisabled] = useState(true);

//   return <>
//  {/* <Button variant='primary'>primary</Button>
//  <Button variant='secondary'>secondary</Button>
//  <Button variant='success'>suckess</Button>
//  <Button variant='warning'>warning</Button>
//  <Button variant='danger'>danger</Button>
//  <Button variant='info'>Info</Button>
//  <Button variant='light'>Light</Button>
//  <Button variant='dark'>big black dildo</Button> */}
 
//  <Button variant='primary' onClick={() => setIsDisabled(true)}>disable</Button>
//  <Button variant='primary' onClick={() => setIsDisabled(false)}>Enabled</Button>
//  <Button variant='warning' disabled={isDisabled}>MY BUTTON</Button>
//     </>
// }

// export default App;


// import 'bootstrap/dist/css/bootstrap.min.css';

// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';


// function App() {
//   return (
//     <Container>
//     {/* Stack the columns on mobile by making one full-width and the other half-width */}
//     <Row>
//       <Col xs={12} md={8}>
//         xs=12 md=8
//       </Col>
//       <Col xs={6} md={4}>
//         xs=6 md=4
//       </Col>
//     </Row>

//     {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
//     <Row>
//       <Col xs={6} md={4}>
//         xs=6 md=4
//       </Col>
//       <Col xs={6} md={4}>
//         xs=6 md=4
//       </Col>
//       <Col xs={6} md={4}>
//         xs=6 md=4
//       </Col>
//     </Row>

//     {/* Columns are always 50% wide, on mobile and desktop */}
//     <Row>
//       <Col xs={6}>xs=6</Col>
//       <Col xs={6}>xs=6</Col>
//     </Row>
//   </Container>
//   );
// }

// export default App;