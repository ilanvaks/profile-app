import { Container, Row, Col } from "react-bootstrap";

export default function Quote () {

  return (
    <section>
      <Container className="quote-container">
        <Row className="text-center">
          <Col>
          <p><q>
          It's not about how hard you hit. It's about how hard you can get hit and keep moving forward. How much you can take and keep moving forward.</q> - Rocky Balboua </p>
          </Col>
        </Row>
      </Container>
      <h2></h2>
    </section>
  )
}