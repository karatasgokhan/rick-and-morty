import React from "react";
import { Container, Row, Col } from "react-grid-system";
import LocationTable from "../../components/tables/LocationTable";

function Locations() {
  return (
    <>
      <div className="mainContent">
        <Container>
          <Row>
            <Col sm={12}>
              <div>
                <h2>Location Table</h2>
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
