import React, { useState } from "react";
import "./styles/Navbar.css";

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
    <nav>
      <div className="container_navbar">
        <div className={`menu ${btnMenu ? "activo" : ""}`} onClick={toggleMenu}>
          <div className="barra"></div>
          <div className="barra"></div>
          <div className="barra"></div>
        </div>

        <ul className={`navbar_link ${btnMenu ? "active" : ""}`}>
          <li className="li_1">
            <a className="link_a" onClick={toggleMenu} href="#TurismoSections">
              Inicio
            </a>
          </li>
          <li className="li_2">
            <a onClick={toggleMenu} href="#TurismoSections" className="link_a">
              Busca
            </a>
          </li>
          <li className="li_3">
            <a onClick={toggleMenu} href="#Turismo2Section" className="link_a">
              Destinos
            </a>
          </li>
          <li className="li_4">
            <a onClick={toggleMenu} href="#SectionMaps" className="link_a">
              Mapa
            </a>
          </li>
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
