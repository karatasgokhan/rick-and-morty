import React from "react";
import { Container, Row, Col } from "react-grid-system";
import HomeImage from "../assets/rickAndMorty.png";
import s from "./Home.module.css";

function Home() {
  return (
    <>
      <div className="mainContent">
        <Container>
          <Row>
            <Col sm={12}>
              <div className={s.dashboardWrapper}>
                <h1>Welcome to Rick And Morty App</h1>
                <img src={HomeImage} alt="Rick And Morty home page" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Home;
