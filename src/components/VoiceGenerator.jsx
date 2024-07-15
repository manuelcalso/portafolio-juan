import React, { useState } from "react";
import * as tts from "@diffusionstudio/vits-web";
import voiceimg from "../assets/voiceAI.png";
import Header from "./Header";
import Footer from "./Footer";

const VoiceGenerator = () => {
  const [text, setText] = useState("");
  const [audioUrl, setAudioUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerateVoice = async () => {
    setLoading(true);
    try {
      // Limpiar el audio anterior
      setAudioUrl("");

      const wav = await tts.predict({
        text: text,
        voiceId: "en_US-hfc_norman-medium",
      });

      // Crear un Blob directamente desde la respuesta de audio
      const audioBlob = new Blob([wav], { type: "audio/wav" });
      setAudioUrl(URL.createObjectURL(audioBlob));
    } catch (error) {
      console.error("Error generating voice:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <div className="my-10 bg-transparent flex items-center justify-center slit-in-vertical">
        <div className="bg-gray-100 p-8 rounded shadow-lg w-full max-w-xl">
          <picture className="flex justify-center ">
            <img
              src={voiceimg}
              alt="voiceai image"
              className="w-1/2 h-auto m-4 rounded-full"
            />
          </picture>
          <h1 className="text-2xl font-bold mb-4 text-center text-black">
            Test our AI Voice Generator *demo
          </h1>

          <textarea
            className="w-full p-2 border rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-800 text-white"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text here"
          />
          <button
            className="w-full bg-[#A52A2A] text-white p-2 rounded hover:bg-blue-600 transition duration-300"
            onClick={handleGenerateVoice}
            disabled={loading}
          >
            {loading ? "Generating Voice..." : "Generate Voice"}
          </button>
          {audioUrl && (
            <div className="mt-4">
              <audio controls className="w-full">
                <source src={audioUrl} type="audio/wav" />
                Your browser does not support the audio element.
              </audio>
            </div>
          )}
          <p className="mt-4 text-center text-sm text-gray-500">
            Do not forget to donate to keep this site alive.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default VoiceGenerator;
