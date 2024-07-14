import { Popover } from "@headlessui/react";
import "../index.css";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
  WrenchScrewdriverIcon,
  SpeakerWaveIcon,
  ChartBarIcon,
} from "@heroicons/react/20/solid";

const solutions = [
  {
    name: "Dev Tools",
    description: "Obten herramientas de desarrollo",
    href: "/developer-tools",
    icon: WrenchScrewdriverIcon,
  },
  {
    name: "Calculadora de interes compuesto",
    description: "Calcula el crecimiento de tu inversión",
    href: "/calculadora-de-interes-compuesto",
    icon: ChartBarIcon,
  },
  {
    name: "Voz de inteligencia artificial",
    description: "Prueba la voz generada con texto",
    href: "/voz-de-inteligencia-artificial",
    icon: SpeakerWaveIcon,
  },
];

export default function Stacked() {
  return (
    <Popover className="relative font-kalnia">
      <Popover.Button className="inline-flex items-center gap-x-1 text-2xl font-bold text-gray-900 md:hover:text-white sm:hover:text-gray-900 slide01">
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
                className="group relative flex gap-x-2 rounded-lg p-2 hover:bg-gray-50"
              >
                <div className="mr-4 flex h-10 w-10 flex-none items-center justify-center rounded-lg group-hover:bg-white">
                  <item.icon
                    className="h-4 w-4 text-green-400 group-hover:text-indigo-600"
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <a
                    href={item.href}
                    className="font-semibold text-black font-bellerose text-sm"
                  >
                    {item.name}
                    <span className="absolute inset-0" />
                  </a>
                  <p className="text-gray-600 text-xs ">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Popover.Panel>
    </Popover>
  );
}
