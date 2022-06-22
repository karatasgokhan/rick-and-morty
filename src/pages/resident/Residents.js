import React from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-grid-system";
import Character from "../../components/character/Character";
import {
  useGetRickAndMortyCharacterQuery,
  useGetRickAndMortyLocationQuery,
} from "../../store/apis/RickAndMortyApi";
import SubPageHeader from "../../components/header/SubPageHeader";
import PageNotFound from "../pageNotFound/PageNotFound";

function Residents() {
  const params = useParams();

  const { data: residentData, isError } = useGetRickAndMortyLocationQuery(
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
      {!isError ? (
        characterData && (
          <div className="mainContent">
            <Container>
              <Row>
                <Col sm={12}>
                  <SubPageHeader title="Residents" back={true} />
                </Col>
              </Row>
            </Container>
            <Container>
              <Row>
                {characterData[0] ? (
                  characterData?.map((item, index) => {
                    return <Character item={item} key={index} index={index} />;
                  })
                ) : (
                  <Character item={characterData} index={0} />
                )}
              </Row>
            </Container>
          </div>
        )
      ) : (
        <PageNotFound />
      )}
    </>
  );
}

export default Residents;
