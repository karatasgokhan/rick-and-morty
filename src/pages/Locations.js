import React from "react";
import { Container, Row, Col } from "react-grid-system";
import LocationTable from "../components/tables/LocationTable";

function Locations() {
  return (
    <>
      <div className="mainContent">
        <Container>
          <Row>
            <Col sm={12}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <h1>Location Table</h1>
              </div>
              <LocationTable />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Locations;
