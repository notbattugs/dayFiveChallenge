import prof from "../assets/proo.png";
import second from "../assets/Rectangle.png";
export const Services = () => {
  return (
    <>
      <div className="center">
        <div className="margin">
          <div style={{ "margin-top": "15%" }}>
            <h1 style={{}}>10 Secrets for managing a remote team </h1>
            <div className="row1" style={{ margin: "5%" }}>
              <img src={prof} className="pro1"></img>
              <p>Shedrack eze</p>
              <p style={{ marginLeft: "50px" }}>2nd January,2022</p>
            </div>
            <img src={second} style={{ width: "1000px" }}></img>

            <p style={{ marginTop: "5%" }}>
              If you’re thinking of starting a blog of your own, but just don’t
              have a clue on what to blog about, then fear not! In this article,
              I have included a whole load of blog examples from a wide variety
              of different niches, all run on different blogging platforms like
              WordPress, Joomla! and Drupal. Since the beginning of the
              internet, millions and millions and millions of blogs have been
              created. Many have died due to lost interest or their owners
              giving up on the idea, while others have thrived and continue to
              grow, making money and earning their owners a steady income. It’s
              a constant evolution of content that keeps people coming back for
              more, especially if these blogs contact highly resourceful
              material that people find useful and interesting. Each example
              listed in this blog post are all different in some way and all
              bring something unique to their readers & subscribers. I want to
              show you what is possible and how you can take inspiration from
              them and create an awesome blog of your own. Some of these blogs
              make over $100k a month, others are just a hobby for their owners,
              but all have the same purpose at their core… the love of writing
              and sharing information. Some of these blogs make over $100k a
              month, others are just a hobby for their owners, but all have the
              same purpose at their core… the love of writing and Some of these
              blogs make over $100k a month, others are just a hobby for their
              owners, but all have the same purpose at their core… the love of
              writing and sharing information. Some of these blogs make over
              $100k a month, others are just a hobby for their owners, but all
              have the same purpose at their core… the love of writing and
              sharing information.
            </p>
          </div>
        </div>
      </div>

      {/* 
p {
  margin: 10px;
  font-size: 20px;
}


.pro1 {
  width: 56px;
  height: 56px;
}

.center {
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  background-color: white;
}
.margin {
  margin-left: 30%;
  margin-right: 30%;
}

.row1 {
  flex-direction: row;
  align-items: center;
  display: flex;
} */}
    </>
  );
};
