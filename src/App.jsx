import "./App.css";
import Header from "./Pages/Header";
import Content from "./Pages/Content";

function App() {
  return (
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
  );
}

export default App;
