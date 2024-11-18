import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles/MyCarrousel.css";
import imgcarr from "../../../public/ms.jpeg";
import imgcarr2 from "../../assets/aseo1.svg";
import imgcarr3 from "../../assets/aseo2.svg";
import imgcarr4 from "../../assets/aseo3.5.svg";

const MyCarrousel = () => {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Activa el desplazamiento automático
    autoplaySpeed: 2000, // Tiempo entre cada cambio (2000ms = 2 segundos)
    pauseOnHover: true, // Pausa el carrusel al pasar el cursor encima
    arrows: false,
  };

  return (
    <div className="carrousel_container" id="Carrousel">
      <Slider {...settings}>
        <div className="slick-slide">
          <img src={imgcarr} alt="Imagen 1" />
        </div>
        <div className="slick-slide">
          <img src={imgcarr2} alt="Imagen 1" />
        </div>
        <div className="slick-slide">
          <img src={imgcarr3} alt="Imagen 2" />
        </div>
        <div className="slick-slide">
          <img src={imgcarr4} alt="Imagen 3" />
        </div>
      </Slider>
    </div>
  );
};

export default MyCarrousel;
