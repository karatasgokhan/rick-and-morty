import React from "react";
import { Container, Row, Col } from "react-grid-system";

function Home() {
  return (
    <>
      <div className="mainContent">
        <Container>
          <Row>
            <Col sm={12}>Welcome to Rick And Morty App</Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Home;
