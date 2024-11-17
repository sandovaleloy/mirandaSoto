import React, { useState } from "react";
import "./styles/Navbar.css";
import icon from "../../../public/ms.jpeg";

const Navbar = () => {
  const [btnMenu, setBtnMenu] = useState(false);

  const toggleMenu = () => {
    setBtnMenu(!btnMenu);
  };

  const [menuActivo, setMenuActivo] = useState(false);

  // Función que cambia el estado al hacer clic en el botón del menú
  const toggleMenu2 = () => {
    setBtnMenu(!btnMenu);
  };

  return (
    <nav className="conatiner_nav">
      <div className="container_navbar">
        {/* <div className="container_logo">
          <img src={icon} alt="" />
        </div> */}

        <div className={`menu ${btnMenu ? "activo" : ""}`} onClick={toggleMenu}>
          <div className="barra"></div>
          <div className="barra"></div>
          <div className="barra"></div>
        </div>

        <ul className="navbar_link1">
          <li className="">
            <a className="link_a" onClick={toggleMenu} href="#Carrousel">
              Inicio
            </a>
          </li>
          <li className="">
            <a onClick={toggleMenu} href="#Aboutme" className="link_a">
              sobre nosotros
            </a>
          </li>
          <li className="">
            <a onClick={toggleMenu} href="#Frame" className="link_a">
              Redes sociales
            </a>
          </li>
          {/* <li className="">
            <a onClick={toggleMenu} href="#SectionMaps" className="link_a">
              Mapa
            </a>
          </li> */}
          <li className="">
            <a onClick={toggleMenu} href="#Footer" className="link_a">
              Información
            </a>
          </li>
        </ul>

        <ul className={`navbar_link2 ${btnMenu ? "active" : ""}`}>
          <li className="li_1">
            <a className="link_a" onClick={toggleMenu} href="#Carrousel">
              Inicio
            </a>
          </li>
          <li className="li_2">
            <a onClick={toggleMenu} href="#Aboutme" className="link_a">
              sobre nosotros
            </a>
          </li>
          <li className="li_3">
            <a onClick={toggleMenu} href="#Frame" className="link_a">
              redes sociales
            </a>
          </li>
          {/* <li className="li_4">
            <a onClick={toggleMenu} href="#SectionMaps" className="link_a">
              Mapa
            </a>
          </li> */}
          <li className="li_5">
            <a onClick={toggleMenu} href="#Footer" className="link_a">
              Información
            </a>
          </li>
        </ul>
      </div>

      {/* <div className="nabvar_redes-container">
        <h5 className="navbar_redes-h5">siguenos:</h5>
        <div className="navbar_redes">
          <i className="bx bxl-facebook"></i>
          <i className="bx bxl-instagram"></i>
          <i className="bx bxl-twitter"></i>
          <i className="bx bxl-youtube"></i>
        </div>
      </div> */}
    </nav>
  );
};

export default Navbar;
