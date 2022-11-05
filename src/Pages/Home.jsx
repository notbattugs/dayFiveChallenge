import Content from "./content";
import Teamprops from "../components/teamprops";
import Teamprops2 from "../components/teamprops2";
import Teamprops3 from "../components/teamprops3";
import Teamprops4 from "../components/teamprops4";
import { Col, Container } from "react-bootstrap";

const Home = () => {
  return (
    <div>
      <Content
        title="Instant collaborations for remote teams"
        text="All in one for your remote team chats, collaboration and track projects"
        button="Get early access"
        placeholder="Email"
        type="email"
      />

      <Teamprops
        header="Your hub for Teamwork"
        content="Give everyone you work with—inside and outside your company—a more productive way to stay in sync. Respond faster with emoji, keep conversations focused in channels, and simplify all your communication into one place."
        button="Learn more ->"
      />
      <Teamprops2
        header2="Simple task management"
        content2="Give everyone you work with—inside and outside your company—a more productive way to stay in sync. Respond faster with emoji, keep conversations focused in channels, and simplify all your communication into one place."
        button2="Learn more ->"
      />
      <Teamprops3
        header3="Scheduling that actually works"
        content3="Give everyone you work with—inside and outside your company—a more productive way to stay in sync. Respond faster with emoji, keep conversations focused in channels, and simplify all your communication into one place."
        button3="Learn more ->"
        title2="What people say about us"
      />

      <Container className="Textboxcontainer">
        <Col>
          <Teamprops4
            name4="Amy Klassen"
            content4="Give everyone you work with—inside and outside your emoji, keep conversations focused in channels, and simplify all your communication into one place."
            Profile=""
            stars={[0, 1, 2, 3, 4]}
          />
        </Col>
        <Col>
          <Teamprops4
            name4="Amy Klassen"
            content4="Give everyone you work with—inside and outside your emoji, keep conversations focused in channels, and simplify all your communication into one place."
            Profile=""
            stars={[0, 1, 2, 3, 4]}
          />
        </Col>
        <Col>
          <Teamprops4
            name4="Amy Klassen"
            content4="Give everyone you work with—inside and outside your emoji, keep conversations focused in channels, and simplify all your communication into one place."
            Profile=""
            stars={[0, 1, 2, 3, 4]}
          />
        </Col>
        <Col>
          <Teamprops4
            name4="Amy Klassen"
            content4="Give everyone you work with—inside and outside your emoji, keep conversations focused in channels, and simplify all your communication into one place."
            Profile=""
            stars={[0, 1, 2, 3, 4]}
          />
        </Col>
        <Col>
          <Teamprops4
            name4="Amy Klassen"
            content4="Give everyone you work with—inside and outside your emoji, keep conversations focused in channels, and simplify all your communication into one place."
            Profile=""
            stars={[0, 1, 2, 3, 4]}
          />
        </Col>
        <Col>
          <Teamprops4
            name4="Amy Klassen"
            content4="Give everyone you work with—inside and outside your emoji, keep conversations focused in channels, and simplify all your communication into one place."
            Profile=""
            stars={[0, 1, 2, 3, 4]}
          />
        </Col>
        <Col>
          <Teamprops4
            name4="Amy Klassen"
            content4="Give everyone you work with—inside and outside your emoji, keep conversations focused in channels, and simplify all your communication into one place."
            Profile=""
            stars={[0, 1, 2, 3, 4]}
          />
        </Col>
        <Col>
          <Teamprops4
            name4="Amy Klassen"
            content4="Give everyone you work with—inside and outside your emoji, keep conversations focused in channels, and simplify all your communication into one place."
            Profile=""
            stars={[0, 1, 2, 3, 4]}
          />
        </Col>
        <Col>
          <Teamprops4
            name4="Amy Klassen"
            content4="Give everyone you work with—inside and outside your emoji, keep conversations focused in channels, and simplify all your communication into one place."
            Profile=""
            stars={[0, 1, 2, 3, 4]}
          />
        </Col>
        <Col>
          <Teamprops4
            name4="Amy Klassen"
            content4="Give everyone you work with—inside and outside your emoji, keep conversations focused in channels, and simplify all your communication into one place."
            Profile=""
            stars={[0, 1, 2, 3, 4]}
          />
        </Col>
      </Container>
    </div>
  );
};
export default Home;
