import React from "react";
import "./styles/Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="page_footer">
        <div className="footer-first">
          <div className="row">
            <section className="field_item">
              <h3 className="title_variant-1">lineas de atenciom</h3>
              <ul className="list_variant-1">
                <li className="list_variant-li">
                  Calle 28 No 13A - 15 Piso 35-36
                  <br />
                  Bogotá - Colombia
                </li>
                <li className="list_variant-li">
                  <a href="">3023352133</a>
                </li>
                <li className="list_variant-li">
                  fax
                  <a href="">3023352133</a>
                </li>
                <li>Lun - Vi 8:30 A.M. - 5:30 P.M</li>
              </ul>
              <p>&nbsp;</p>
              <ul className="list_variant-2">
                <li>
                  <i className="bx bxl-facebook"></i>
                </li>
                <li>
                  <i className="bx bxl-instagram"></i>
                </li>
                <li>
                  <i className="bx bxl-whatsapp"></i>
                </li>
                <li>
                  <i className="bx bxl-youtube"></i>
                </li>
                <li>
                  <i className="bx bxl-telegram"></i>
                </li>
              </ul>
            </section>
            <section className="field_item">
              <h3 className="title_variant-1">nuestros clientes</h3>
              <ul className="list_variant-1">
                <li className="list_variant-li">
                  <a href="">procolombia</a>
                </li>
                <li className="list_variant-li">
                  <a href="">inversion</a>
                </li>
                <li className="list_variant-li">
                  <a href="">exportaciones</a>
                </li>
                <li className="list_variant-li">
                  <a href="">turismo</a>
                </li>
                <li className="list_variant-li">
                  <a href="">marca pais</a>
                </li>
              </ul>
            </section>
            <section className="field_item">
              <h3 className="title_variant-1">enlaces de interes</h3>
              <ul className="list_variant-1">
                <li className="list_variant-li">
                  <a href="">servicio al ciudadano</a>
                </li>
                <li className="list_variant-li">
                  <a href="">informe de sostenibilidad</a>
                </li>
                <li className="list_variant-li">
                  <a href="">preguntas frecuentes</a>
                </li>
                <li className="list_variant-li">
                  <a href="">PQRFS</a>
                </li>
                <li className="list_variant-li">
                  <a href="">contacto</a>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
      <div className="footer_copyrigth">
        <div>
          Términos y condiciones - Lee sobre los cambios en nuestra Política de
          Tratamiento y Privacidad
        </div>
      </div>
    </footer>
  );
};

export default Footer;
