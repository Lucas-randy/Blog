import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import "../App.css";

import { Container, Row, Col, Button, Card, Carousel } from "react-bootstrap"; // Importation des composants Bootstrap

import pull_up from "../assets/pull_up.jpg"; // Importation des images
import push_up from "../assets/push_up.jpg";
import squat from "../assets/squat.jpg";

import "../components/Navbar.css"; // Fichier CSS pour le style

const HomePage = ({ images }) => {
  const safeImages = Array.isArray(images) ? images : [pull_up, push_up, squat]; // Force un tableau vide si ce n'est pas une liste

  const [showNavbar, setShowNavbar] = useState(true);

  return (
    <Container fluid>
      <div className="overlay"></div>{" "}
      {/* Assombrit légèrement pour plus de lisibilité */}
      <header className="App-header text-center py-5">
        {/* Titre animé */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="display-3"
        >
          Bienvenue sur mon Blog Fitness !
        </motion.h1>

        {/* Slider d'images */}
        {/* 🎯 Affichage du Carousel */}
        {safeImages.length > 0 ? (
          <Carousel>
            {safeImages.map((image, index) => (
              <Carousel.Item key={index}>
                <img
                  className="d-block w-100 custom-carousel-image"
                  src={typeof image === "string" ? image : image.src}
                  alt={`slide-${index}`}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        ) : (
          <p>Aucune image disponible.</p>
        )}
        {/* Section de contenu */}
        <Row className="mt-4">
          <Col md={4}>
            <Card className="custom-card">
              <Card.Body>
                <Card.Title>💪 Coaching en privé</Card.Title>
                <Card.Text>
                  Obtenez vos programmes personnalisés et détaillés à l'aide
                  d'un coach agréé !
                </Card.Text>
                <Button variant="primary" as={Link} to="/programme">
                  Réservez !
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="custom-card">
              <Card.Body>
                <Card.Title>🍽 Nourriture</Card.Title>
                <Card.Text>
                  Comment bien définir et préparer vos diets en fonction de vos
                  objectifs ?
                </Card.Text>
                <Button variant="primary" as={Link} to="/dietetique">
                  Découvrez !
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="custom-card">
              <Card.Body>
                <Card.Title>📞 Contact</Card.Title>
                <Card.Text>
                  N'hésitez pas à me contacter pour des conseils personnalisés.
                </Card.Text>
                <Button variant="primary" as={Link} to="/contact">
                  Contactez-moi !
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Introduction */}
        <p className="mt-5">
          Rejoignez-moi dans cette aventure de fitness pour atteindre vos
          objectifs !
        </p>
      </header>
    </Container>
  );
};

export default HomePage;
