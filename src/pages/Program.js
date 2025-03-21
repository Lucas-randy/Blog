import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import programmeImage from "../assets/running.jpg"; // Assurez-vous que le chemin de l'image est correct
import programmeImage2 from "../assets/running2.jpg"; // Assurez-vous que le chemin de l'image est correct

const ProgramPage = () => {
  return (
    <div>
      <Container fluid className="vh-100">
        <Row className="w-100 align-items-center">
          {/* Colonne gauche : Texte */}
          <Col md={6} className="text-center text-md-start">
            <h2 className="text-black fs-1 mb-5">
              Pourquoi suivre un programme d'entraînement ?
            </h2>
            <p className="text-black fs-2">
              Un programme structuré vous aide à atteindre vos objectifs plus
              rapidement. Il est conçu pour vous guider tout au long de votre
              parcours, en tenant compte de vos capacités et de vos besoins
              spécifiques. Que vous soyez débutant ou confirmé, un programme
              adapté à votre niveau peut faire toute la différence.
            </p>
          </Col>

          {/* Colonne droite : Image */}
          <Col md={6}>
            <img
              src={programmeImage}
              alt="Programme Fitness"
              className="img-fluid rounded"
              style={{ maxHeight: "100%", objectFit: "cover" }}
            />
          </Col>
        </Row>
      </Container>

      <Container fluid className="vh-100">
        <Row className="w-100 align-items-center">
          {/* Colonne droite : Image */}
          <Col md={6}>
            <img
              src={programmeImage2}
              alt="Programme Fitness"
              className="img-fluid rounded"
              style={{ maxHeight: "100%", objectFit: "cover" }}
            />
          </Col>
          {/* Colonne gauche : Texte */}
          <Col md={6} className="text-center text-md-start">
            <p className="text-black">
              <h2 className="fs-1 mb-5">
                Les avantages de suivre un bon programme d'entraînement
              </h2>
              <div>
                <h3 className="fs-3 mb-3">
                  1. Amélioration de la santé physique
                </h3>
                <h3 className="fs-3 mb-3">
                  2. Amélioration de la santé mentale
                </h3>
                <h3 className="fs-3 mb-3">
                  3. Prévention des blessures et vieillissement prématuré
                </h3>
              </div>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProgramPage;
