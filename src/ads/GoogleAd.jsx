import React, { useEffect } from "react";

const GoogleAd = () => {
  useEffect(() => {
    // Carga el script de AdSense solo si no está ya en el DOM
    if (
      !document.querySelector(
        'script[src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6030131474192307"]'
      )
    ) {
      const script = document.createElement("script");
      script.src =
        "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6030131474192307";
      script.async = true;
      script.crossOrigin = "anonymous";
      document.body.appendChild(script);
    }

    // Re-inicializa los anuncios solo una vez
    const adsbygoogle = window.adsbygoogle || [];
    adsbygoogle.push({});
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block" }}
      data-ad-format="autorelaxed"
      data-ad-client="ca-pub-6030131474192307"
      data-ad-slot="1483141784"
    ></ins>
  );
};

export default GoogleAd;
