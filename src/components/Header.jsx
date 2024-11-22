import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Footer from "./Footer";
import WhatsAppFAB from "./WhatsAppFAB";
import Stacked from "./Stacked";
import Tetris from "../components/tetris/Tetris";

const navigation = [
  { name: "Blog 'El Escritorio'", href: "/blog" },
  { name: "Tetris Game", href: "/juan-calleros-tetris-online" },
  { name: "PlasticBeach", href: "https://plasticbeach.shop/" },
  { name: "English", href: "https://juancalleros.vercel.app/" },
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
            className="w-24 slide01 p-0 m-0"
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
                {item.name === "Tetris Game" ? (
                  <div className=" texto-animado flex flex-col justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="-10 0 44 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 0 1-.657.643 48.39 48.39 0 0 1-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 0 1-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 0 0-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 0 1-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 0 0 .657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 0 1-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 0 0 5.427-.63 48.05 48.05 0 0 0 .582-4.717.532.532 0 0 0-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 0 0 .658-.663 48.422 48.422 0 0 0-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 0 1-.61-.58v0Z" />
                    </svg>
                    <p>T<span> etris</span></p>
                  </div>
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
