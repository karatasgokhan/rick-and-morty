import React from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-grid-system";
import Character from "../components/Character";
import {
  useGetRickAndMortyCharacterQuery,
  useGetRickAndMortyLocationQuery,
} from "../store/apis/RickAndMortyApi";

function Residents() {
  const params = useParams();
  const {
    data: residentData,
    isLoading: residentLoading,
    isSuccess: residentIsSuccess,
  } = useGetRickAndMortyLocationQuery(params.locationId);
  const residentsIds =
    residentData?.residents &&
    residentData.residents.map(
      (x) => x.split("https://rickandmortyapi.com/api/character/")[1]
    );
  const {
    data: characterData,
    isLoading: characterIsLoading,
    isSuccess: characterIsSuccess,
  } = useGetRickAndMortyCharacterQuery(residentsIds);

  return (
    <>
      <div className="mainContent">
        <Container>
          <Row>
            {<Character characterData={[characterData ? characterData : []]} />}
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Residents;
