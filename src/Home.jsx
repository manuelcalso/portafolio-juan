import React, { useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Blog from "./components/Blog";
import WhatsAppFAB from "./components/WhatsAppFAB";
import Fab from "@mui/material/Fab";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { fetchWeatherData } from "../apis/fetchWeatherData";


export default function Home() {
  const phoneNumber = "525544475622"; // Reemplaza con tu número de teléfono

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}`;
    window.open(url, "_blank");
  };

  useEffect(() => {
    fetchWeatherData();
  }, []);
  return (
    <>
      <Header />
      <div className="fixed bottom-20 right-5 z-50 w-48 flex justify-center items-center bg-[#2E7D32] hover:bg-[#1B5E20] rounded-lg heartbeat">
        <Fab
          color="success"
          aria-label="whatsapp"
          size="large"
          onClick={handleClick}
        >
          <WhatsAppIcon />
          <p className="text-2xl">cotizacion</p>
        </Fab>
      </div>
      <Blog />
      <div className="weather"></div>
      <Footer />
    </>
  );
}
