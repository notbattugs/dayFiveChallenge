import "./App.css";
import Header from "./Pages/Header";
import Content from "./Pages/Content";
import meetings from "./Assets/Meetings.png";



function App() {
  return <>
    <div className="container">
      <Header
        Logo="HOME"
        GridOne="Products"
        GridTwo="Services"
        GridThree="Contact"
        GridFour="Log in"
        GridFive="Get Access"
      />
      <Content
        title="Instant collaborations for remote teams"
        text="All in one for your remote team chats, collaboration and track projects"
        button="Get early access"
        placeholder="Email"
        type="email"
      />
    </div>

    <div className=" secondPage" style={{width:"100%",height:"100vh",backgroundColor:"white",display:"flex"}}>
    <div className="pageTwoNews" style={{display:"flex", flexDirection:"column"}}>
      <h1 style={{width:"398px",height:"120px",fontSize:"48px"}}>Your Hub for teamwork</h1>
      <span style={{width:"465px",height:"145px",fontSize:"18px"}}>Give everyone you work with—inside and outside your company—a more productive way to stay in sync. Respond faster with emoji, keep conversations focused in channels, and simplify all your communication into one place.</span>
    <div style={{display:"flex",flexDirection:"row"}}>
      <span style={{width:"87px",height:"28px",fontSize:"16px",color:"#4DA0FD"}} arrow="HOME">Learn more </span>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9u-Eiw4HE-g8o-qHJYv5arQgXg5H1B59lbg&usqp=CAU"  alt="" style={{width:"15.78px",height:"6.59px"}}/>
    </div>
        
      
    </div>
    <div className="pageTwoNewsPic">
      <div className="eventOne">
        <span>11:00 AM - 11:30 AM</span>
      </div>
      <img src={meetings}  alt="Meeting pic" />
    </div>
   
    </div>
    </>
}

export default App;


