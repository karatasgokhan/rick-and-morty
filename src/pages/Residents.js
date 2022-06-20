import React from "react";
import { Container, Row, Col } from "react-grid-system";
import { useGetRickAndMortyCharacterQuery } from "../store/apis/RickAndMortyApi";
import s from "./Residents.module.css";

function Residents() {
  const { data, isLoading, isSuccess } = useGetRickAndMortyCharacterQuery(2);

  return (
    <>
      <div className="mainContent">
        <Container>
          <Row>
            <Col sm={4}>
              <div className={s.residentCartBlock}>
                <div className={s.imgBlock}>
                  <img
                    src="https://rickandmortyapi.com/api/character/avatar/2.jpeg"
                    alt={`character avatar ${"index"}`}
                  />
                </div>
                <div className={s.textBlock}>
                  <div className={s.textItem}>
                    <h2>Name</h2>
                    <div className={s.statusItem}>
                      <span className={`${s.circle} ${s.unknown}`}></span>
                      Unknown
                    </div>
                    <span>species</span>
                    <span>type</span>
                    <span>gender</span>
                    <span>origin</span>
                  </div>
                </div>
              </div>
            </Col>
            <Col sm={4}>
              <div className={s.residentCartBlock}>
                <div className={s.imgBlock}>
                  <img
                    src="https://rickandmortyapi.com/api/character/avatar/2.jpeg"
                    alt={`character avatar ${"index"}`}
                  />
                </div>
                <div className={s.textBlock}>
                  <div className={s.textItem}>
                    <h2>Name</h2>
                    <div className={s.statusItem}>
                      <span className={`${s.circle} ${s.alive}`}></span> Alive
                    </div>
                    <span>species</span>
                    <span>type</span>
                    <span>gender</span>
                    <span>origin</span>
                  </div>
                </div>
              </div>
            </Col>
            <Col sm={4}>
              <div className={s.residentCartBlock}>
                <div className={s.imgBlock}>
                  <img
                    src="https://rickandmortyapi.com/api/character/avatar/2.jpeg"
                    alt={`character avatar ${"index"}`}
                  />
                </div>
                <div className={s.textBlock}>
                  <div className={s.textItem}>
                    <h2>Name</h2>
                    <div className={s.statusItem}>
                      <span className={`${s.circle} ${s.dead}`}></span> Dead
                    </div>
                    <span>species</span>
                    <span>type</span>
                    <span>gender</span>
                    <span>origin</span>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Residents;
