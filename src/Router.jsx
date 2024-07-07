import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import WhatsAppFAB from "./components/WhatsAppFAB";
import Tools from "./components/Tools";

export default function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cotizacion" element={<WhatsAppFAB />} />
          <Route path="/tools" element={<Tools />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
