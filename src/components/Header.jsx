import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import Footer from "./Footer";
import Stacked from "./Stacked";

const navigation = [
  {
    name: "Calculadora de IC",
    href: "/calculadora-de-interes-compuesto-online",
    type: "cta",
  },
  {
    name: "Minigames",
    href: "/play-sand-online",
    type: "internal",
  },
  {
    name: "Tetris",
    href: "/play-tetris-online",
    type: "internal",
  },
  {
    name: "Shop",
    href: "https://proyecto-5-ecommerce.netlify.app/",
    type: "external",
  },
  {
    name: "Blog",
    href: "/blog",
    type: "internal",
  },
  {
    name: "English",
    href: "https://juancalleros.vercel.app/",
    type: "external",
  },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white text-black hover:bg-green-900 hover:text-white kalnia-medium transition-colors">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <img
            src="https://storage.googleapis.com/portafilo/img-zB3Sv3B0ZvJj8dLRukBcSl3t-removebg-preview.png"
            alt="Manuel Calleros logo"
            className="w-24"
          />
        </a>

        {/* Desktop navigation */}
        <div className="hidden lg:flex items-center gap-x-4">
          {navigation.map((item) => {
            if (item.type === "cta") {
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className="ml-4 rounded-full bg-green-700 px-6 py-3 text-white text-xl font-semibold hover:bg-green-600 transition"
                >
                  Calcula tu inversión 💰
                </a>
              );
            }

            return (
              <a
                key={item.name}
                href={item.href}
                target={item.type === "external" ? "_blank" : undefined}
                rel={
                  item.type === "external" ? "noopener noreferrer" : undefined
                }
                className="text-lg px-3 py-2 rounded-full hover:bg-green-800 hover:text-white transition"
              >
                {item.name}
              </a>
            );
          })}
          <Stacked />
        </div>

        {/* Mobile button */}
        <div className="lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="p-2 rounded-md text-gray-900 hover:text-white"
          >
            <Bars3Icon className="h-10 w-10" />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10 bg-black/30" />
        <Dialog.Panel className="fixed inset-y-0 left-0 z-20 w-full bg-white px-6 py-6 overflow-y-auto">
          {/* Top */}
          <div className="flex items-center justify-between">
            <img
              src="https://storage.googleapis.com/portafilo/icono_tbcmzg.jpg"
              alt="Juan logo"
              className="h-10 w-10 rounded-full"
            />
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-md bg-black px-4 py-2 text-white"
            >
              Cerrar
            </button>
          </div>

          {/* CTA first (mobile) */}
          <a
            href="/calculadora-de-interes-compuesto-online"
            className="block w-full text-center bg-green-700 text-white py-4 rounded-xl text-2xl font-semibold my-6 hover:bg-green-600 transition"
          >
            Calcula tu inversión 💰
          </a>

          {/* Mobile links */}
          <div className="space-y-3">
            {navigation
              .filter((item) => item.type !== "cta")
              .map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target={item.type === "external" ? "_blank" : undefined}
                  rel={
                    item.type === "external" ? "noopener noreferrer" : undefined
                  }
                  className="block text-center border border-gray-400 rounded-xl px-4 py-3 text-lg font-semibold bg-green-800 hover:text-white transition"
                >
                  {item.name}
                </a>
              ))}
          </div>

          <div className="mt-8">
            <Footer />
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
