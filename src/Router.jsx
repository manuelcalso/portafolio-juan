import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Tools from "./components/Tools";
import Calculator from "./components/Calculadora";
import VoiceGenerator from "./components/VoiceGenerator";
import Blogger from "./components/Blogger";
import BlogAppDelivery from "./components/Blogger/BlogAppDelivery";
import BlogAnalisisCatedralTurin from "./components/Blogger/BlogAnalisisCatedralTurin";
import Tetris from "./components/tetris/Tetris";

export default function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blogger />} />
          <Route path="/blog-app-delivery" element={<BlogAppDelivery />} />
          <Route
            path="/blog-analisis-libro-catedral-de-turin"
            element={<BlogAnalisisCatedralTurin />}
          />
          <Route path="/developer-tools" element={<Tools />} />
          <Route
            path="/calculadora-de-interes-compuesto-online"
            element={<Calculator />}
          />
          <Route
            path="/juan-calleros-tetris-online"
            element={<Tetris />}
          />
          <Route
            path="/voz-de-inteligencia-artificial"
            element={<VoiceGenerator />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}
