import React from "react";
import "./styles.css";
import owlImage from "./owl.png"; // Изображение совы

function Header() {
  return (
    <header className="header bg-dark text-light">
      <div className="container header-content d-flex align-items-center justify-content-center">
        <img
          src={owlImage}
          alt="Owl"
          className="owl-image"
        />
        <h1 className="header-title ms-3">Not Wise</h1>
      </div>
    </header>
  );
}

export default Header;
