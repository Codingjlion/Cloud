import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Map from './Map';

function App() {
  return (
    <Container>
      <Row className="mt-4 mb-4">
        <Col>
          <h1>Welcome to my landing page</h1>
          <p>Here you can find all the information you need</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <Map />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
