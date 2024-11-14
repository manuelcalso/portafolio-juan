import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Footer from "./Footer";
import WhatsAppFAB from "./WhatsAppFAB";
import Stacked from "./Stacked";

const navigation = [
  { name: "Blog 'El Escritorio'", href: "/blog" },
  { name: "PlasticBeach.shop", href: "https://plasticbeach.shop/" },
  { name: "English version", href: "https://juancalleros.vercel.app/" },
];
export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="hover:bg-green-900 bg-white hover:text-white text-black slide-in-top kalnia-medium rounded-border-about">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-center gap-x-10 p-0 lg:px-8  "
        aria-label="Global"
      >
        <a href="/">
          <img
            src="https://storage.googleapis.com/portafilo/img-zB3Sv3B0ZvJj8dLRukBcSl3t-removebg-preview.png"
            alt="manuel calleros logo"
            className="w-40 slide01 p-0 m-0"
          />
        </a>
        <div className="flex">
          <div className="hidden lg:flex lg:gap-x-4 items-center">

            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                className="text-2xl slide01 float p-2 rounded-full hover:bg-green-800 hover:text-white hover:text-3xl hover:tracking-widest"
              >
                {item.name === "English version" ? (
                  <p className=" texto-animado">
                    <span>E</span>
                    <span>n</span>
                    <span>g</span>
                    <span>l</span>
                    <span>i</span>
                    <span>s</span>
                    <span>h</span>{" "}
                  </p>
                ) : (
                  item.name
                )}
              </a>
            ))}
            <Stacked />
          </div>
          <div className="flex lg:hidden p-1">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md text-gray-900 hover:text-white p-10"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                className="h-12 w-12 slide01 hover:text-white m-0"
                aria-hidden="true"
              />
            </button>
          </div>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 left-0 z-10 w-full overflow-y-auto bg-white px-6 py-6">

          <div className="flex items-center justify-between">
            <div className="flex flex-1">
              <button
                type="button"
                className="pt-4.5 rounded-md p-2.5 text-transparent"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <Stacked />
              </button>
            </div>
            <button
              type="button" // Cambiar a tipo botón
              className="-m-1.5 p-1.5 shadow-lg rounded-md border border-gray-400 bg-black"
              onClick={() => setMobileMenuOpen(false)}
            >
              <img
                className="h-10 w-auto rounded-full"
                src="https://storage.googleapis.com/portafilo/icono_tbcmzg.jpg"
                alt="juan logo"
              />
              Cerrar
            </button>
          </div>

          <div className="mt-4 space-y-2 kalnia-medium top-0 bg-white">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="-mx-3 flex rounded-xl border border-gray-600 px-3 py-2 text-black first:text-xl hover:text-2xl shadow-lg font-semibold leading-7 hover:bg-green-800 hover:text-white justify-center hover:leading-7"
              >
                {item.name === "English version" ? (
                  <p className=" hover:text-3xl texto-animado text-2xl p-0 m-0">
                    <span>E</span>
                    <span>n</span>
                    <span>g</span>
                    <span>l</span>
                    <span>i</span>
                    <span>s</span>
                    <span>h</span>
                  </p>
                ) : (
                  item.name
                )}
              </a>
            ))}
            <Footer />
          </div>


        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
