import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Row, Col } from "react-grid-system";
import Character from "../components/Character";
import {
  useGetRickAndMortyCharacterQuery,
  useGetRickAndMortyLocationQuery,
} from "../store/apis/RickAndMortyApi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import s from "./Residents.module.css";

function Residents() {
  const params = useParams();
  const navigate = useNavigate();

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
              <div>
                <div onClick={() => navigate(-1)} className={s.IconItem}>
                  <FontAwesomeIcon icon={faArrowLeft} />
                </div>
                <h2>Residents</h2>
              </div>
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
