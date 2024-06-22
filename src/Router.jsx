import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import WhatsAppFAB from "./components/WhatsAppFAB";
export default function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cotizacion" element={<WhatsAppFAB />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
