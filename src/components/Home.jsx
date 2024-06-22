import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Blog from "./Blog";
import WhatsAppFAB from "./WhatsAppFAB";
import Fab from "@mui/material/Fab";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export default function Home() {
  const phoneNumber = "525544475622"; // Reemplaza con tu número de teléfono

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}`;
    window.open(url, "_blank");
  };
  return (
    <>
      <Header />
      <div className="fixed bottom-4 right-4 z-50">
        <Fab color="primary" aria-label="whatsapp" onClick={handleClick}>
          <WhatsAppIcon />
        </Fab>
      </div>
      <Blog />
      <Footer />{" "}
    </>
  );
}
