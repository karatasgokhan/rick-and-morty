import React from "react";
import { Container, Row, Col } from "react-grid-system";
import LocationTable from "../../components/tables/LocationTable";
import SubPageHeader from "../../components/header/SubPageHeader";

function Locations() {
  return (
    <>
      <div className="mainContent">
        <Container>
          <Row>
            <Col sm={12}>
              <SubPageHeader title="Location Table" back={false} />
              <LocationTable />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Locations;
