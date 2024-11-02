import React, { useState } from "react";
import * as tts from "@diffusionstudio/vits-web";
import voiceimg from "../assets/voiceAI.png";
import Header from "./Header";
import Footer from "./Footer";

const VoiceGenerator = () => {
  const [text, setText] = useState("");
  const [audioUrl, setAudioUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [downloadProgress, setDownloadProgress] = useState(null);

  const handleGenerateVoice = async () => {
    setLoading(true);
    try {
      // Limpiar el audio anterior
      setAudioUrl("");

      // Descargar el modelo de voz
      await tts.download("en_US-hfc_female-medium", (progress) => {
        setDownloadProgress(
          Math.round((progress.loaded * 100) / progress.total)
        );
      });

      // Restablecer el progreso de descarga una vez completado
      setDownloadProgress(null);

      const wav = await tts.predict({
        text: text,
        voiceId: "en_US-hfc_female-medium",
      });

      // Crear un Blob directamente desde la respuesta de audio
      const audioBlob = new Blob([wav], { type: "audio/wav" });
      setAudioUrl(URL.createObjectURL(audioBlob));
    } catch (error) {
      console.error("Error al generar voz:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <main>
        <section className="my-10 bg-transparent flex items-center justify-center slit-in-vertical">
          <div className="bg-gray-100 p-8 rounded shadow-lg w-full max-w-xl">
            <picture className="flex justify-center ">
              <img
                src={voiceimg}
                alt="Generador de Voz AI"
                className="w-1/2 h-auto m-4 rounded-full"
              />
            </picture>
            <h1 className="text-2xl font-bold mb-4 text-center text-black">
              Prueba Nuestro Generador de Voz AI 
            </h1>
            <p className="text-center text-gray-700 mb-4">
              Ingresa texto para generar una voz AI realista.
            </p>
            <textarea
              className="w-full p-2 border rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-800 text-white"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Escribe el texto aquí"
              aria-label="Entrada de texto para generación de voz AI"
            />
            <button
              className="w-full bg-[#A52A2A] text-white p-2 rounded hover:bg-blue-600 transition duration-300"
              onClick={handleGenerateVoice}
              disabled={loading}
              aria-busy={loading}
            >
              {loading ? "Generando Voz..." : "Generar Voz"}
            </button>
            {downloadProgress !== null && (
              <div className="mt-4 text-center text-sm text-gray-500">
                Descargando modelo: {downloadProgress}%
              </div>
            )}
            {audioUrl && (
              <div className="mt-4">
                <audio controls className="w-full">
                  <source src={audioUrl} type="audio/wav" />
                  Tu navegador no soporta el elemento de audio.
                </audio>
              </div>
            )}
            <p className="mt-4 text-center text-sm text-gray-500">
              Considera donar para apoyar este sitio.
            </p>
          </div>
        </section>

        {/* Nueva sección */}
        <section className="bg-gray-50 py-12 mt-5 mb-5">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Explora Más Herramientas Útiles</h2>
            <div className="mt-6 grid grid-cols-1 gap-y-8 md:grid-cols-3 md:gap-x-6">
              <article className="rounded-lg border border-gray-300 bg-white p-6 shadow-md">
                <h3 className="text-lg font-semibold text-gray-800">Reflexiones y Creaciones en "El Escritorio"</h3>
                <p className="mt-2 text-gray-600">
                  Visita mi espacio personal, donde comparto reflexiones, investigaciones, teorías y novedades.
                </p>
                <a href="/blog" className="mt-4 inline-block rounded bg-orange-600 px-4 py-2 text-white hover:bg-orange-700">
                  Leer Ahora
                </a>
              </article>
              <article className="rounded-lg border border-gray-300 bg-white p-6 shadow-md">
                <h3 className="text-lg font-semibold text-gray-800">Herramientas de CSS para Delivery</h3>
                <p className="mt-2 text-gray-600">
                  Descubre nuestras herramientas de CSS diseñadas específicamente para mejorar la experiencia de entrega en tu aplicación.
                </p>
                <a href="/developer-tools" className="mt-4 inline-block rounded bg-orange-600 px-4 py-2 text-white hover:bg-orange-700">
                  Ver Herramientas
                </a>
              </article>
              <article className="rounded-lg border border-gray-300 bg-white p-6 shadow-md">
                <h3 className="text-lg font-semibold text-gray-800">Calculadora de Interés Compuesto</h3>
                <p className="mt-2 text-gray-600">
                  Utiliza nuestra calculadora de interés compuesto para planificar tu futuro financiero y maximizar tus ahorros.
                </p>
                <a href="/calculadora-de-interes-compuesto-online" className="mt-4 inline-block rounded bg-orange-600 px-4 py-2 text-white hover:bg-orange-700">
                  Calcular Ahora
                </a>
              </article>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default VoiceGenerator;
