import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import WhatsAppFAB from "./components/WhatsAppFAB";
import Tools from "./components/Tools";
import Calculator from "./components/Calculadora";

export default function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cotizacion" element={<WhatsAppFAB />} />
          <Route path="/developer-tools" element={<Tools />} />
          <Route path="/calculadora-de-interes-compuesto" element={<Calculator />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
