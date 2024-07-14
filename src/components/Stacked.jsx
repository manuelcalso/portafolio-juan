import { Popover } from "@headlessui/react";
import "../index.css";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
  WrenchScrewdriverIcon
} from "@heroicons/react/20/solid";

const solutions = [
  {
    name: "Dev Tools",
    description: "Obten herramientas de desarrollo CSS para tu pagina web!",
    href: "/developer-tools",
    icon: WrenchScrewdriverIcon,
  },
  {
    name: "Calculadora des interes compuesto",
    description: "Calcula el crecimiento de tu inversión con nuestra herramienta de interés compuesto",
    href: "/calculadora-de-interes-compuesto",
    icon: PlayCircleIcon,
  },
];

export default function Stacked() {
  return (
    <Popover className="relative font-kalnia">
      <Popover.Button className="inline-flex items-center gap-x-1 text-2xl font-bold leading-6 text-gray-900 md:hover:text-white sm:hover:text-gray-900 slide01">
        <span>Tools</span>
        <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
      </Popover.Button>
      <Popover.Panel
        transition
        className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
          <div className="p-4">
            {solutions.map((item) => (
              <div
                key={item.name}
                className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50"
              >
                <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                  <item.icon
                    className="h-6 w-6 text-green-400 group-hover:text-indigo-600"
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <a
                    href={item.href}
                    className="font-semibold text-black font-bellerose text-lg"
                  >
                    {item.name}
                    <span className="absolute inset-0" />
                  </a>
                  <p className="mt-1 text-gray-600 text-md ">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Popover.Panel>
    </Popover>
  );
}
