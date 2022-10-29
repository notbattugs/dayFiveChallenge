import "./App.css";
import Header from "./Pages/Header";
import Content from "./Pages/Content";

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

    <div className=" secondPage" style={{width:"100%",height:"100vh",backgroundColor:"white"}}>
    <div className="pageTwoNews" style={{display:"flex", flexDirection:"column"}}>
      <h1 style={{width:"398px",height:"120px",fontSize:"48px"}}>Your Hub for teamwork</h1>
      <span style={{width:"465px",height:"145px",fontSize:"18px"}}>Give everyone you work with—inside and outside your company—a more productive way to stay in sync. Respond faster with emoji, keep conversations focused in channels, and simplify all your communication into one place.</span>
      <span style={{width:"87px",height:"28px",fontSize:"16px",color:"#4DA0FD"}}>Learn more </span>
    </div>
    <div>
      
    
    </div>
    </div>
    </>
}

export default App;
