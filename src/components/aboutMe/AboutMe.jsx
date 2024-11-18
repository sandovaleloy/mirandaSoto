import React, { useState } from "react";
import "./styles/AboutMe.css";

const AboutMe = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const contents = [
    {
      title: "MISIÓN",
      text: `somos una empresa que presta servicios de alta calidad y confiabilidad en la organización y administración de nuestro desempeño laboral, dinamizando el carácter rector, a través de la planificación y ejecución para el desarrollo económico y social de nuestros clientes.`,
    },
    {
      title: "VISIÓN",
      text: `Ser una empresa con personal de alta profesionalidad, abiertos al cambio, flexible, con habilidades comunicativas acorde a los desafíos que afronta, la región y el país, a través de procesos de la planificación de la economía para lograr sostenibilidad y prosperidad en el desarrollo económico y social de la región y el país.`,
    },
    {
      title: "VALORES",
      text: `HONESTIDAD, CALIDAD, TRANSPARENCIA, PASIÓN, RESPONSABILIDAD SOCIAL, SOLIDARIDAD.`,
    },
  ];

  const handleNext = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % contents.length);
      setIsTransitioning(false);
    }, 300); // Duración de la transición
  };

  const handlePrev = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? contents.length - 1 : prevIndex - 1
      );
      setIsTransitioning(false);
    }, 300); // Duración de la transición
  };

  return (
    <div className="container_aboutMe" id="Aboutme">
      <div className={`aboutMe ${isTransitioning ? "fading" : ""}`}>
        <h3 className="aboutMe_title">{contents[currentIndex].title}</h3>
        <p className="aboutMe_parrafo">{contents[currentIndex].text}</p>
      </div>
      <div className="aboutMe_buttons">
        <button onClick={handlePrev}>
          <i className="bx bx-chevron-left"></i>
        </button>
        <button onClick={handleNext}>
          <i className="bx bx-chevron-right"></i>
        </button>
      </div>
    </div>
  );
};

export default AboutMe;
