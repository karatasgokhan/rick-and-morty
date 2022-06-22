import React from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-grid-system";
import Character from "../../components/character/Character";
import {
  useGetRickAndMortyCharacterQuery,
  useGetRickAndMortyLocationQuery,
} from "../../store/apis/RickAndMortyApi";
import BackButton from "../../components/backButton/BackButton";

function Residents() {
  const params = useParams();

  const { data: residentData } = useGetRickAndMortyLocationQuery(
    params.locationId
  );
  const residentsIds =
    residentData?.residents &&
    residentData.residents.map(
      (x) => x.split("https://rickandmortyapi.com/api/character/")[1]
    );
  const { data: characterData } =
    useGetRickAndMortyCharacterQuery(residentsIds);

  return (
    <>
      <div className="mainContent">
        <Container>
          <Row>
            <Col sm={12}>
              <BackButton title="Residents" />
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            {characterData?.map((item, index) => {
              return <Character item={item} index={index} />;
            })}
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Residents;
