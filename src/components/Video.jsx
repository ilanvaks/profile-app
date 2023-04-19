import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

export default function Video () {

  return (
    <section>
      <Container className="video-container">
        <Row>
          <Col>
          <h2>Video</h2>
          <p>Rocky is undefeated!</p>
          <iframe width="100%" height="315" src="https://www.youtube.com/embed/vJHkTtvnUqA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

