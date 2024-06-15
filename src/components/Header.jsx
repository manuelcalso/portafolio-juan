import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "NoFooter.com", href: "https://nofooter.com/#gsc.tab=0" },
  { name: "PlasticBeach.shop", href: "https://plasticbeach.shop/" },
  { name: "English version", href: "https://juancalleros.vercel.app/" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="hover:bg-green-900  bg-white hover:text-white text-black slide-in-top kalnia-medium rounded-border-about mx-auto ">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between p-6 lg:px-8  "
        aria-label="Global"
      >
        <a href="https://www.linkedin.com/in/juan-manuel-calleros-solache-790133254/">
          <img
            src="https://res.cloudinary.com/dgzghl0ur/image/upload/v1718419676/portafolio/Manuel_Calleros_transparent_bcelia.png"
            alt="manuel calleros logo"
            className="w-40 m-0 pr-4"
          />
        </a>
        <div className="flex flex-1">
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                className="text-xl leading-6   slide float p-2 rounded-full hover:bg-green-800 hover:text-white hover:text-3xl"
              >
                <span>{item.name}</span>
              </a>
            ))}
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
        <a href="#" className="-m-1.5 p-1.5">
          <span className="sr-only">JuanCalleros.com</span>
          <img
            className="h-20 w-auto rounded-full"
            src="https://res.cloudinary.com/dgzghl0ur/image/upload/v1704476428/portafolio/Foto_flfttc.jpg"
            alt="juan calleros img"
          />
        </a>
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
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto rounded-full "
                src="https://res.cloudinary.com/dgzghl0ur/image/upload/v1702673530/portafolio/icono_tbcmzg.jpg"
                alt=""
              />
            </a>
          </div>
          <div className="mt-2 space-y-2 kalnia-medium">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
              >
                {item.name}
              </a>
            ))}
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
