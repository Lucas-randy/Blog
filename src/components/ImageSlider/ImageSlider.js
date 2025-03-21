import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';  // Assure-toi d'importer framer-motion

function ImageSlider({ images }) {

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);  // Change l'image après 3 secondes
    }, 3000);  // 3000 ms = 3 secondes

    return () => clearInterval(interval); // Nettoie l'intervalle à la désactivation du composant
  }, [images.length]);

  return (
    <motion.img
      src={images[currentImageIndex]}  // Affiche l'image actuelle
      alt="Fitness"
      style={{ 
        width: "100%",
        objectFit: "cover", 
        height: "600px",
        maxWidth: "600px" 
      }}
      initial={{ scale: 0 }}  // Début de l'animation (image est petite)
      animate={{ scale: 1 }}  // L'image prend sa taille normale
      transition={{ duration: 2 }}  // Durée de l'animation
    />
  );
}

export default ImageSlider;  // Exporte le composant