import { Col, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Product = () => {
  return (
    <div>
      <div className="vlog">
        <div className="title" style={{ fontSize: "48px", fontWeight: "800" }}>
          Blog posts
        </div>
        <div
          className="miniTitle text-muted"
          style={{ fontSize: "18px", lineHeight: "29px", fontWeight: "600" }}
        >
          Our latest updates and blogs about managing your team
        </div>
        <div className="d-flex justify-content-center align-items-center flex-column">
          <Container className="w-100 ">
            <Row>
              <Col
                className="gridText border bg-light m-5 rounded p-0"
                style={{ width: "360px", height: "440px" }}
              >
                <img
                  className="w-100 h-50 p-0"
                  src="https://s3-alpha-sig.figma.com/img/cc0b/9e01/3831d3730f0c674eae4e84fcc8bda76b?Expires=1668384000&Signature=AuXuQB9RVFJGw4tMJ4eJMiE7Pe7bga1fZk2sjAc2PV4TnojTQJbWd3y0B8r5fMogmqTpgqz0zrVIOYa6Lcw5GVECVKxqBru493yTim2WjI1-5VXxQ7i0d8KLaQS3KxHZh~oyebMSXv-hDC64zIfz4rC-rS2pUo8Sef0BQP8cAfPPorqFROu4l-fRjzEOjS7w8r9zqAXmYeKY7nbMLG4eCn~5asyMvKeZnpVhG1zAMJ2TlErMVbhfews7jf9bWrHPruNehel-rwRyqyySZfXpCI5ZsPKoI5jxojqSlgsPY0RJMvki6kzdh7UrmvGOdp3hVSlMJ8a-uY3ZB-qYdOTBuw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                  alt=""
                />
                <div
                  className="gridTitle m-2"
                  style={{ fontSize: "20px", lineHeight: "20px" }}
                >
                  The Emotional Toll of Being in UX
                </div>
                <div className="text-muted m-2">
                  There are times when our work impacts us deeply — sometimes in
                  ways we neither acknowledge nor understand
                </div>
                <a href="./blogPost.jsx">more</a>
              </Col>

              <Col
                className="gridText border bg-light m-5 rounded p-0"
                style={{ width: "360px", height: "440px" }}
              >
                <img
                  className="w-100 h-50 p-0"
                  src="https://s3-alpha-sig.figma.com/img/3a41/6d01/5b9ec700e102b1e73234bb9d3eadd836?Expires=1668384000&Signature=XP2n2SyTPSqjB93V4~OQ-qpomCXWDFcM4ytj9IcBm1V6b~xQl1UCFVbcs6eR-2Zdx-W6XnJxWyb0HStf774eDF6pJZ0A3nxXzsSI04jcGFRC4Kgx2BzScI5TED1qBc1ix7jvlFMIKYCl84LtF3JepgXERz7935XJZVfmNbhWVnioKvkP5UbOdLLjx4rA0RX0ZsPgiH3akoEdHiaoYMDs9mj4auFBnG3mOP53EqWBloNgiv~6piVOWMuWeQ8ixQ~IlzimX6uL2v~JDjzJ9WOT0ouuRqSRuyFNGvrEcIOaIO3e-6bEUN7JjJ0vH7Vkjoy831amIauiHH26JPgP~3Gb9Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                  alt=""
                />
                <div
                  className="gridTitle m-2"
                  style={{ fontSize: "20px", lineHeight: "20px" }}
                >
                  10 secret tips for managing a team remotely
                </div>
                <div className="text-muted m-2">
                  Our latest updates and blogs about managing your team Our
                  latest updates and blogs about managing your team
                </div>
              </Col>
              <Col
                className="gridText border bg-light m-5 rounded p-0"
                style={{ width: "360px", height: "440px" }}
              >
                <img
                  className="w-100 h-50 p-0"
                  src="https://s3-alpha-sig.figma.com/img/21bc/944f/b0aa2cf92f854c4158d5151d2fd9fa2c?Expires=1668384000&Signature=gUmrO3qti2hq2ItIiAWyrEFZcC7OcwLmvUJGzUtbF6I28YghTDosOHYao158e3Z8s1Ov9s0t33t3PNgf~NHZPujHnQFfr23C4cuPNhZIjL2MXsremEhLxWnttQAJsCMkATwcXON1tlQamV5TTndceDNu-dPPQOKmi-DvFOFKMljOsA4wBk75KMnoUndVEXIpffKLvgRJexhRewaN2XpPnrZp84T6gXchCRXyMu-Z~L1eZmoQER2XVQIdw6hl60IT-9nTqnafWGVbuKrTQkJwIk63x9Wg6qcVs2MHAJwy9AASnrHlD1DqX0eYY4Ms-fgj6AGYdhiv-b-1RJcc8n9OvQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                  alt=""
                />
                <div
                  className="gridTitle m-2"
                  style={{ fontSize: "20px", lineHeight: "20px" }}
                >
                  What Ever Happened to Steampunk?
                </div>
                <div className="text-muted m-2">
                  How the iPhone popularized steampunk… and how the iPhone
                  killed it off
                </div>
              </Col>
            </Row>
            <Row>
              <Col
                className="gridText border bg-light m-5 rounded p-0"
                style={{ width: "360px", height: "440px" }}
              >
                <img
                  className="w-100 h-50 p-0"
                  src="https://s3-alpha-sig.figma.com/img/99c0/043b/ca3e599bd53fc9e4457248e7a1ec2e97?Expires=1668384000&Signature=gGaGYZiniLSnqPIqjhzsGKPufJtfyUBZOr00jNXtRxRk19qtEOFcR8kGZIx~u9I0KnPcwmY7vmf9lU61HpqGLpLrw9T9PrOIeopqqCrCP7Jn80vtmr3uQiQ6KFpx4Xu9GApduoFeCZ55k4IImB~JEyvyvqBL5iJRtuImirLOvHoEKkkGnHvhjcSGUVGE1ATUrFhyrX82aVIS5XQiBz-v3LkntYyleYIrgnv4lH2uPDMuYhzdX87IIC0xOTbKh0v80d1EgiXrWQbq0DOIs8hgCmannwuIfE7~iv97knVIg5fnnqZdPJmgFrQbQmry5~QL6I3B-x5lH01ud6I0eLE2AQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                  alt=""
                />
                <div
                  className="gridTitle m-2"
                  style={{ fontSize: "20px", lineHeight: "20px" }}
                >
                  The 2020 Guide for White Men in Tech
                </div>
                <div className="text-muted m-2">
                  How to use centuries of unfair advantage to make the world a
                  more equal place
                </div>
              </Col>
              <Col
                className="gridText border bg-light m-5 rounded p-0"
                style={{ width: "360px", height: "440px" }}
              >
                <img
                  className="w-100 h-50 p-0"
                  src="https://s3-alpha-sig.figma.com/img/eac8/5bcb/b6e52b76239e0b3b47b548e54d7a5e85?Expires=1668384000&Signature=PFd1vdG5w8Csfe8cvZskw7qbjW2fUxdIVDTqDfnt3J1JAolrKc24slgbCxd5QAQ5ea66g4YkGN1OZ-GANzj9KX5YBrRjwJgmm5VwrGcs7X1h6WgeMVyp98qmxj2PxJ24LWJaeO8U~kZ3ZMNeFL5Qjzapv-QTu3MU26AenRZOow8v31843cSszZ09urB~TN8~PThWRfSsxhKxPGLsIWuqLGoVryjkurXnirQ08e4AJYGnTcIvOgAHR-bk224tY7ENHU3lX3~qhk1uF~DkEJXXCGJgqkKHdHGsb446RUHCZinwpo9AdXAho1k4IqME0iRyR0EDgLjph~AVOddX54sh7A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                  alt=""
                />
                <div
                  className="gridTitle m-2"
                  style={{ fontSize: "20px", lineHeight: "20px" }}
                >
                  Why Are Women Still Behind in the Design World?
                </div>
                <div className="text-muted m-2">
                  It’s 2020, but women designers still face lower pay and less
                  opportunity. What gives?
                </div>
              </Col>
              <Col
                className="gridText border bg-light m-5 rounded p-0"
                style={{ width: "360px", height: "440px" }}
              >
                <img
                  className="w-100 h-50 p-0"
                  src="https://s3-alpha-sig.figma.com/img/e683/59fe/5337cf67b84487b6f4ebc875d9eae109?Expires=1668384000&Signature=Cgxs6DAri~3nV0IcgmvUAkvqIoWJ74GIVCsB8fTeqzT0pvNDl5~x9Vnnd2JoxvlUR5i738QE11L82~V~qvBRlfwjSyE7rqzJPpsijnIi-ooVNYLeSmdlML0TdBDTZna4pQgZfgaDKQPkO-WtG5lck3meRR41dZXL~RlipOZ-l~pT7LIDEp73ZAwZ0FJyzyctbKL-oXtrz1WhbQN0CQ~iOfxKyrvqWRlm5a~CejcOsmfFTY6evGGSIKD13qVfMgC~6DP9XUksME~gvWgEgyVX9ZZzX8Yhf30J2dR0CvWdb2fYYHtDF5igz47ODUNI3czWA0Of1ku8mBxVknei9gYEuA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                  alt=""
                />
                <div
                  className="gridTitle m-2"
                  style={{ fontSize: "20px", lineHeight: "20px" }}
                >
                  The Ultimate Guide to Becoming a Great Designer
                </div>
                <div className="text-muted m-2">
                  Our latest updates and blogs about managing your team Our
                  latest updates and blogs about managing your team
                </div>
              </Col>
            </Row>
            <Row>
              <Col
                className="gridText border bg-light m-5 rounded p-0"
                style={{ width: "360px", height: "440px" }}
              >
                <img
                  className="w-100 h-50 p-0"
                  src="https://s3-alpha-sig.figma.com/img/6fb2/e23b/f477baae1703048392c9fbe1d64dc45e?Expires=1668384000&Signature=S61ka6H8oO3Fcmp~D~FV2LLqmQSWRnoEytoRjJykBQfhwRC4UIxihPWe35sLSwqq6o5y1EwJCWIfBtLhmGDBQjYjPV2mf2r3k-gpCikM-RyEGRMhoOHvIjMt76BZIpekihHoSAIzANS8DZuTvsByrN7OxQ12cqBulPla~HyVjFUE2pNMAHrC-Yir80FTabUL-Kbk8epBFWxn-PqjedZic3N2mo5L4nhGlHy1JY-FI~T9o3HkH-069mBXm3HKVlg2vdS-QPhGUEEVMfy6D7ZM8g55MKbz8JNtdcrHvuVhV06N7cYeLAm~w5zq-nn7sfk9cXct5kKW1wNx50wadG8nng__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                  alt=""
                />
                <div
                  className="gridTitle m-2"
                  style={{ fontSize: "20px", lineHeight: "20px" }}
                >
                  Data-Driven Design is Killing Our Instincts
                </div>
                <div className="text-muted m-2">
                  Our latest updates and blogs about managing your team Our
                  latest updates and blogs about managing your team
                </div>
              </Col>
              <Col
                className="gridText border bg-light m-5 rounded p-0"
                style={{ width: "360px", height: "440px" }}
              >
                <img
                  className="w-100 h-50 p-0"
                  src="https://s3-alpha-sig.figma.com/img/fa94/4ca5/5fdd713a34853608218d0fb14ff241f4?Expires=1668384000&Signature=Joz3PI8oVLWbK3wS0PoTLetRhTZ8oAtLUuiG17LvAeW~c5aFQMu0nhQzDhCQyeLYE9RK-i2LrHMU~FLEwmSArbFJhYXOY-ccPZ1F7XxyqqrA0HX56Zpt0-guYvNodSjPM4iEmqHXwJJWlU~d11od6pMzsDFuhyPDq330Mi9m~KyynhkTncmZBBNhVC3AQOF0YcOhZXKDB5AJox3xnKXLc4AkpW8QgD6OTtDPomKwjUIreiwWhHTPI1CNID0EQhILjUunChY1d7o5zRfHBDTKtfhMFI26m0sAk4LLNLOR5yJcxLlUoTt7bl3Gs3DnbBLW61VZVEfqFITG4zMR9aekbw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                  alt=""
                />
                <div
                  className="gridTitle m-2"
                  style={{ fontSize: "20px", lineHeight: "20px" }}
                >
                  Finding the Blank Spots in Big Data
                </div>
                <div className="text-muted m-2">
                  Artists and designers are working to address a major problem
                  for marginalized communities in the data economy: ‘If the data
                  does not exist…
                </div>
              </Col>
              <Col
                className="gridText border bg-light m-5 rounded p-0"
                style={{ width: "360px", height: "440px" }}
              >
                <img
                  className="w-100 h-50 p-0"
                  src="https://s3-alpha-sig.figma.com/img/3952/4af5/620d10a9f75b67312f2b5397a23ae4da?Expires=1668384000&Signature=Nptu-Gg7d0CZr4dq0d1423tAeWDFz~~SPlfdVLcAE1Ccnf-Yl9tgK4tb3v2PPw7aQORVBNil5KrJyAziCGjEIGXVHNAwtdAwApIyD~k58riNCwH7HPWAklVnt6aSoaVrGz7yEY8VQh8uC8y4HCUcvgBQkAJJ7JcEWjYRMZtjxW6vYgWMoI3ggqLqGx8AIfkp-FEYCy94z3ZT3z0dJkwaDX0sw5Quz~WfDvm8bYSF3~Dah9E0e0unLE0GtU9sPweGxhCNL4EOjTZoY0j6oHlc8lPBmJwFtSKmKGbr2vR78~AgejE22acskvvB-snKFyHkxD9XO6QJZrO8af7pEPqVAw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                  alt=""
                />
                <div
                  className="gridTitle m-2"
                  style={{ fontSize: "20px", lineHeight: "20px" }}
                >
                  3 Lessons We Learned From Rebranding Gusto{" "}
                </div>
                <div className="text-muted m-2">
                  You might not know the music, but designers have certainly
                  taken notice of this small but visceral movement from the late
                  ’80s
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Product;
