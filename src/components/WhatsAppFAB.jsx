import React from "react";
import Fab from "@mui/material/Fab";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

function WhatsAppFAB() {
  const phoneNumber = "525544475622";

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="flex justify-center items-center py-6">
      <Fab
        variant="extended"
        onClick={handleClick}
        sx={{
          backgroundColor: "#25D366",
          color: "white",
          px: 3,
          "&:hover": {
            backgroundColor: "#1ebe5d",
          },
        }}
      >
        <WhatsAppIcon sx={{ mr: 1, fontSize: 32 }} />
        <span className="text-base italic kalnia">
          ¿Tienes un proyecto? Escríbeme directo
        </span>
      </Fab>
    </div>
  );
}

export default WhatsAppFAB;
