import "./App.css";
import Header from "./Pages/Header";
import Content from "./Pages/Content";
import meetings from "./Assets/Meetings.png";
import arrow from "./Assets/arrow.png";
import PageThree from "./Assets/pageThree.png";
import PageFour from "./Assets/pageFour.png";
import './App.css';
import ScrolledContents from "./Pages/scrolledContacts";

function App() {
  return (
    <>
      {/* <div className="container">
        <Header
          Logo="HOME"
          GridOne=".Products"
          GridTwo="Services"
          GridThree="Contact"
          GridFour="Login"
          GridFive="Get Access"
        />
        <Content
          title="Instant collaborations for remote teams"
          text="All in one for your remote team chats, collaboration and track projects"
          button="Get early access"
          placeholder="Email"
          type="email"
        />
      </div> */}
      {/* 
      <div
        className=" secondPage"
        style={{
          width: "100%",
          height: "100vh",
          backgroundColor: "rgb(246,247,250)",
          display: "flex",
        }}
      >
        <div
          className="pageTwoNews"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <h1 style={{ width: "398px", height: "120px", fontSize: "48px" }}>
            Your Hub for teamwork
          </h1>
          <span style={{ width: "465px", height: "145px", fontSize: "18px" }}>
            Give everyone you work with—inside and outside your company—a more
            productive way to stay in sync. Respond faster with emoji, keep
            conversations focused in channels, and simplify all your
            communication into one place.
          </span>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <span
              style={{
                width: "87px",
                height: "28px",
                fontSize: "16px",
                color: "#4DA0FD",
              }}
              arrow="HOME"
            >
              Learn more{" "}
            </span>
            <img
              src={arrow}
              alt=""
              style={{ width: "15.78px", height: "6.59px" }}
            />
          </div>
        </div>
        <div className="pageTwoNewsPic">
          <img src={meetings} alt="Meeting pic" />
        </div>
      </div> */}
      {/* 
      <div
        className="PageThree"
        style={{ display: "flex", flexDirection: "row" }}
      >
        <img
          src={PageThree}
          alt={PageThree}
          style={{ width: "562", height: "567px" }}
        />

        <div
          className="pageThreeNews"
          style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: "700px",
            marginTop: "100px",
          }}
        >
          <h1 style={{ width: "398px", height: "120px", fontSize: "48px" }}>
            Simple task management
          </h1>
          <p style={{ width: "465px", height: "145px", fontSize: "18px" }}>
            Give everyone you work with—inside and outside your company—a more
            productive way to stay in sync. Respond faster with emoji, keep
            conversations focused in channels, and simplify all your
            communication into one place.
          </p>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <p
              style={{
                width: "87px",
                height: "28px",
                fontSize: "16px",
                color: "#4DA0FD",
              }}
              arrow="HOME"
            >
              Learn more{" "}
            </p>
            <img
              src={arrow}
              alt=""
              style={{ width: "15.78px", height: "6.59px" }}
            />
          </div>
        </div>
      </div> */}

      {/* <div
        className=" secondPage"
        style={{
          width: "100%",
          height: "100vh",
          backgroundColor: "rgb(246,247,250)",
          display: "flex",
        }}
      >
        <div
          className="pageTwoNews"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <h1 style={{ width: "398px", height: "120px", fontSize: "48px" }}>
            Scheduling that actually works
          </h1>
          <span style={{ width: "465px", height: "145px", fontSize: "18px" }}>
            Give everyone you work with—inside and outside your company—a more
            productive way to stay in sync. Respond faster with emoji, keep
            conversations focused in channels, and simplify all your
            communication into one place.
          </span>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <span
              style={{
                width: "87px",
                height: "28px",
                fontSize: "16px",
                color: "#4DA0FD",
              }}
              arrow="HOME"
            >
              Learn more{" "}
            </span>
            <img
              src={arrow}
              alt=""
              style={{ width: "15.78px", height: "6.59px" }}
            />
          </div>
        </div>
        <div className="pageTwoNewsPic">
          <img
            src={PageFour}
            alt="Meeting pic"
            style={{ width: "562px", height: "567px", marginLeft: "743px" }}
          />
        </div>
      </div> */}
    <div className="scrollBlogs">
      
      <div style={{width:"100%",height:"100px",display:"flex",justifyContent:"center"}}>
      <h1>What people say about us</h1>
      </div>

  <div className="ScrolledContents" style={{display:"flex",flexDirection:"row"}}>
      
  <ScrolledContents />
  <ScrolledContents />
  <ScrolledContents />
  <ScrolledContents />
  <ScrolledContents />
      </div>

    
   
  


    </div>
    </>
  );
}

export default App;

// import 'bootstrap/dist/css/bootstrap.min.css';
// import {useState} from 'react';

// import {Button} from 'react-bootstrap';

// function App () {
//   const [isDisabled, setIsDisabled] = useState(true);

//   return <>
//  {/* <Button variant='primary'>primary</Button>
//  <Button variant='secondary'>secondary</Button>
//  <Button variant='success'>success</Button>
//  <Button variant='warning'>warning</Button>
//  <Button variant='danger'>danger</Button>
//  <Button variant='info'>Info</Button>
//  <Button variant='light'>Light</Button>
//  <Button variant='dark'>Dark</Button> */}

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
