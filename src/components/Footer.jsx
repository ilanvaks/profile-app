import { Col, Container, Row } from "react-bootstrap";

export default function Footer () {
  const currentYear = new Date().getFullYear();
  const gitHubURL = "https://github.com/ilanvaks"

  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center">
          <p>&copy; {currentYear} Ilan Vaks 
          <br/>
          <a href={gitHubURL} target="_blank">Code in Github</a></p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}