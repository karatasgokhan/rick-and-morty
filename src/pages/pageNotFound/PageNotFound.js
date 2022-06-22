import React from "react";
import { Container, Row, Col } from "react-grid-system";
import NotFound from "../../assets/rickAndMorty.png";
import * as ROUTES from "../../constans/routePath";
import s from "./PageNotFound.module.css";

function PageNotFound() {
  return (
    <>
      <div className="mainContent">
        <Container>
          <Row>
            <Col sm={12}>
              <div className={s.notFoundWrapper}>
                <p>404</p>
                <p>Page Not Found</p>
                <img src={NotFound} alt="Rick And Morty page not found" />
                <a href={ROUTES.HOME}>Click to Return to Homepage</a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default PageNotFound;
