import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Grid () {

  return (
    <section>
      <Container fluid className="grid-container">
        <Row>
          <Col sm={12} md={4}>
            <h2>Why BC?</h2>
            <p>I'm not entirely sure what you mean by "boca code," as I'm not familiar with that specific term. However, "BOCA" could refer to the Building Officials and Code Administrators International, which is an organization that provides building codes and standards for the construction industry.</p>
          </Col>
            
            <Col sm={12} md={4}>
            <h2>Exciting Work Place?</h2>
            <p>Engaging work: Work that is challenging, varied, and allows employees to learn and grow can be very exciting. When employees are given meaningful work that aligns with their skills and interests, they are more likely to be engaged and feel fulfilled in their jobs.</p>
            </Col>
                
            <Col>
                <h2>Ideal Work Place?</h2>
                <p>Positive culture: A positive and supportive workplace culture can be very exciting. When employees feel like they are part of a community where their colleagues and managers care about their well-being, it can create a sense of excitement and belonging.</p>
            </Col>
        </Row>
      </Container>
    </section>
  )
}