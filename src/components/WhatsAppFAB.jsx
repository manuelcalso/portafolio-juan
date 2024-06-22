import React from "react";
import Fab from "@mui/material/Fab";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import NavigationIcon from "@mui/icons-material/WhatsApp";

import TrendingUpIcon from "@mui/icons-material/TrendingUp";

function WhatsAppFAB() {
  const phoneNumber = "525544475622"; // Reemplaza con tu número de teléfono

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}`;
    window.open(url, "_blank");
  };

  return (
    <>
      <div className=" flex flex-col justify-center items-center p-auto pt-5 pb-5 bg-gradient-to-r from-lime-300 to-green-400 bounce">
        <Fab variant="extended" color="primary" onClick={handleClick}>
          <NavigationIcon sx={{ fontSize: 60, color: "#6FD4B0" }} />
          <h1 className="m-5 text-2xl">
            <span className="text-gray-100">¡Contactanos!</span>
          </h1>
          <WhatsAppIcon sx={{ fontSize: 60 }} />
        </Fab>
        <div className="px-20 border rounded-full bg-gradient-to-t from-cyan-400 to-blue-500 kalnia-medium ">
          <TrendingUpIcon sx={{ fontSize: 60, color: "#6FD4B0" }} />
          <p className="text-3xl  justify-start">
            ¿Listo para llevar tu negocio al siguiente nivel digital?
            ¡Contáctanos hoy mismo y descubre cómo podemos ayudarte a alcanzar
            tus objetivos!
          </p>
        </div>
      </div>
    </>
  );
}

export default WhatsAppFAB;
