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
    href: "/calculadora-de-interes-compuesto-online",
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
      <Popover.Button className="inline-flex items-center gap-x-1 text-2xl font-bold text-gray-900 md:hover:text-white sm:hover:text-gray-900">
        <span className="sr-only">Menu</span>
        <svg width="80px" height="80px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">

          <path d="m53.16 46.58c-2.46-2-6.63-1.46-6.63-1.46a2.57 2.57 0 0 0 -1.66-2.46 7.78 7.78 0 0 0 -2.5-.75s-.25-3.37-3.09-3.5a9.36 9.36 0 0 0 -5.28 1.71s.13-1.71-.29-1.91a2.4 2.4 0 0 0 -1.21-.05s-.87.09-.87 0 .25-1.37 0-1.58a5.75 5.75 0 0 0 -1.71-.25l-.22 4.17a8.45 8.45 0 0 0 -6.08-2.5 6 6 0 0 0 -5.13 3.54 15.25 15.25 0 0 0 -.33 1.67 7.22 7.22 0 0 0 -3.21.5 5.16 5.16 0 0 0 -2.54 2.62 6.77 6.77 0 0 0 -.17 1.67s-2.29 1-3 2.62a4.06 4.06 0 0 0 1.59 5.33c2.29 1.25 3.16 1.42 4 1.42a28.61 28.61 0 0 0 3.29-.5 6.5 6.5 0 0 0 3.25.63c1.87-.13 3.42-1.55 5-1.5s2.83.95 4.54.95a15.75 15.75 0 0 0 4.25-.95 4.34 4.34 0 0 0 3.29 1.21 6.66 6.66 0 0 0 3-.92c.12 0 2.29 1.17 3.71.83a4.78 4.78 0 0 0 2-.91s6.17.7 7.21-1.92 1.25-5.67-1.21-7.71zm-25.5-12.71a13 13 0 0 0 .17 3.13c.12.29.7-.05.91-.17a10.28 10.28 0 0 0 0-3c-.08-.5-.74-.08-1.08.04zm7-2.21s-.21 3.17-.17 3.38.8.5.92.29a17.53 17.53 0 0 0 0-4c-.17-.25-.41.08-.71.33zm-9.04-17.45a12.56 12.56 0 0 0 .16-2.3 9.82 9.82 0 0 1 1.22-3.25c.17-.33-.25-.29-.46-.25a5.34 5.34 0 0 0 -1.29 2.42c-.55 1.54-.75 3.17-.55 3.17s.79.33.92.21zm.21 14.5c.12 0 .79-.59 1-.88s.08-.87.08-1.33.79-.5.79-.5l.67 1.5 1.08.12.13 1.17a7.34 7.34 0 0 0 -.38 1.37 2.33 2.33 0 0 0 .8 2.21c.42.5.79 2.09 1.13 2.17s1.62-1 2.29-2.17.21-3 .33-3 0-1.33 0-1.33a4.14 4.14 0 0 0 .88-.42c.45-.29 1.12-1 1.25-1a8.69 8.69 0 0 1 1 1.83c.08.29.25.21.62.17s2.13-5.54 2.09-6.25-2.17-2.17-2.17-2.17a33.82 33.82 0 0 0 0-4.79c-.21-2.62-1.75-8.58-4.75-8.79s-4.59 2.67-5.67 6.17a20.68 20.68 0 0 0 -.62 7.42 24.77 24.77 0 0 0 -2.88 2c-.21.29-.16.66.38 2.12a34.7 34.7 0 0 0 1.95 4.38z" fill="#1d1d1b" />

          <path d="m31.62 40c.12 0 .75.2.75.33s0 5.46.91 6.21 1.3.33 1.55.12a5.36 5.36 0 0 1 2.33-.71c1 0 .92 3.13 1.42 3.21s3.37-.25 5 1.34a3.23 3.23 0 0 1 0 4.33c-.5.21-1.63-.5-2-.38s-.79 1.05-1 1.17a3.79 3.79 0 0 1 -2.58.5c-1.13-.29-4-1.12-3.59-3.12s1.25-2.13 1.62-2 .71.29.71.08 0-.63-.16-.71a3.29 3.29 0 0 0 -1.71 0c-.5.21-2.09 2.17-1.59 3.42a3.72 3.72 0 0 0 1 1.58 7.27 7.27 0 0 1 -3.5.67c-2-.13-3.91-1.17-4.87-1s-3.09 1.2-3.84 1.16-3.16-.16-3.33-2a3 3 0 0 1 2.67-3.33 3.44 3.44 0 0 1 2.21.58c0 .13-.09.42.45.25s1-.54.92-.79-2.5-1.46-1.29-3.21 3.5-1.54 4-1 1 1.12 1.5.87 1.5-1.5 1.91-3.91.51-3.66.51-3.66z" fill="#cbe7f5" />

          <path d="m25.62 52.16c.34-.17 2 .38 3.08-.54a4.76 4.76 0 0 0 1.42-2.08c.12.5.21.58.12 1a10.12 10.12 0 0 1 -.62 1.41s1.66 2.75 1.41 2.92-.25.46-.5.13a18.52 18.52 0 0 0 -1.53-2.46.92.92 0 0 0 -.45.21 13.48 13.48 0 0 1 1 2.21c-.17 0-.42.16-.67-.05a17.35 17.35 0 0 1 -1.25-2 9.52 9.52 0 0 1 -2 0c-.43-.12-.26-.62-.01-.75z" fill="#1d1d1b" />

          <path d="m30.33 51.79.45-.63s1.59 2.25 1.46 2.55-.08.37-.25.37a20.6 20.6 0 0 1 -1.66-2.29z" fill="#1d1d1b" />

          <path d="m31 50.29.34-.63s1.5 1.92 1.45 2.3-.12.66-.29.54-1.5-2.21-1.5-2.21z" fill="#1d1d1b" />

          <path d="m31.87 49s.25-.75.41-.75 1.25 1.37 1.17 1.62a2.28 2.28 0 0 1 -.25.5z" fill="#1d1d1b" />

          <path d="m34.16 41.12a8.91 8.91 0 0 1 4-1.66 3.36 3.36 0 0 1 3.12 1.33c.21.42.38 1.12.25 1.21s-.79 0-1.16.12a.71.71 0 0 0 -.46.34s-.54-1.71-.79-1.75a.7.7 0 0 0 -.5.16 13.54 13.54 0 0 1 .79 2c-.08.13-.38.92-.46.71s-1.21-2.54-1.5-2.5-.71.21-.62.42a20.56 20.56 0 0 0 2.41 3.37c.34.09.5-.5.5-.5a2.18 2.18 0 0 1 1.67-1.37c1.42-.38 3.21-.05 3.83 1.33s.21 2.58.42 2.75.71.37.79.25a11.75 11.75 0 0 0 .25-1.38s3.88-.45 5.67 1.38a6.24 6.24 0 0 1 1.41 5.58 6 6 0 0 1 -.62 1.5 31 31 0 0 0 -3.16-3.2c-.25 0-.62.41-.45.58s3 3 2.75 3-.5.21-.63.17-2.67-2.96-2.8-2.84-.67.34-.46.5 2.37 2.59 2.37 2.59l-1.12-.09a30 30 0 0 0 -2-2.25c-.17 0-.79.17-.63.34s1.84 2 1.46 2.16-1.41-.33-1.71-.29-.54.42-.75.54a1.64 1.64 0 0 1 -1.54.25s2.63-2.37 1.5-4.71a7.41 7.41 0 0 0 -3.16-3.29s-1.17-2-1.5-2.12-.71 0-.59.08a10.84 10.84 0 0 1 1.13 1.88 5.83 5.83 0 0 0 -1.13-.38h-.58s-1-2.17-1.83-2.46l-1-.37s-1.33-2.84-1.46-2.88-.63.17-.54.34l1.25 2.45-.58-.08s-1-2-1.21-2-.54.42-.41.54a6 6 0 0 1 .75 1.63c-.13 0-.88.71-.92.42s-.72-2.67-.05-3.8z" fill="#85bfe9" />

          <path d="m42.49 45.46c.17-.13.42-.5.54-.3s1.25 2.3 1 2.38-.8.25-.88 0-.66-2.08-.66-2.08z" fill="#1d1d1b" />

          <path d="m44 45.29s.54-.38.63-.08.7 1.75.54 1.87a.57.57 0 0 1 -.71-.17c-.13-.2-.46-1.62-.46-1.62z" fill="#1d1d1b" />

          <path d="m50.78 50.33c.13-.12.38-.58.5-.54s1.92 1.92 1.88 2.21-.08.46-.21.46-2.17-2.13-2.17-2.13z" fill="#1d1d1b" />

          <path d="m29.24 41.16a7.44 7.44 0 0 0 -4.08-1.95c-2.13-.09-4 .33-4.71 1.25a10.29 10.29 0 0 0 -1.33 2.66s.66 0 1.71 1.46 1.62 2.17 1.62 2.17l.46-.46s-1.29-2.29-1.13-2.54a.46.46 0 0 1 .5-.29c.21 0 1.09 2.41 1.21 2.33s.34-.17.38-.29-1-2.38-.88-2.54.42-.42.63-.25a18.36 18.36 0 0 1 1.08 2.41s.71-.21.63-.33a12.8 12.8 0 0 1 -.88-2.71.49.49 0 0 1 .55-.08 28.74 28.74 0 0 1 1 2.71s1 .12 1-.05a21.94 21.94 0 0 1 -1.08-3.2c.12-.09.87-.25 1-.09s.91 3.25 1.08 3.34.83.79.83.37-1.16-3.83-1.16-3.83a.33.33 0 0 1 .5 0c.2.29.91 2.33 1 2.12s.07-2.21.07-2.21z" fill="#85bfe9" />

          <path d="m22 47.33s-1.66-2.67-3.33-3a6.65 6.65 0 0 0 -4.58 1.21 3 3 0 0 0 -1 1.79 5.1 5.1 0 0 1 3.12.17c1.79.62 2.09 1.62 2.09 1.62l-.88.34a4 4 0 0 0 -2.67-1.09 4.93 4.93 0 0 0 -4.54 3.13 3.49 3.49 0 0 0 2.38 4.25 14.34 14.34 0 0 0 4.58.12s-1.76-2.87.53-4.87a5.79 5.79 0 0 1 4.3-1.63s-.67-1.46 0-2.04z" fill="#85bfe9" />

          <path d="m31.49 8.16c1.07-.25 3.38.8 3.92 4.88s.21 8-.5 9.92-1.63 3.29-1.91 3.29a17.73 17.73 0 0 1 -3-.13 19.6 19.6 0 0 1 -1.91-9c.15-4.66 1.99-8.62 3.4-8.96z" fill="#e7413e" />

          <path d="m31.16 9.66a.34.34 0 0 1 .58.34c-.08.5-.58 2.37-.79 2.33s-.46-.08-.5-.21a15.79 15.79 0 0 1 .71-2.46z" fill="#1d1d1b" />

          <path d="m24.78 22.87c.06-.26 1.55-1.25 1.63-1a21.38 21.38 0 0 1 .67 3c-.08.13-1.17 1.38-1.34 1.13a19.14 19.14 0 0 1 -.96-3.13z" fill="#fab900" />

          <path d="m37.33 21.37a24.47 24.47 0 0 1 -.8 2.75c-.41 1.09-.45 1.21-.45 1.21s.75 1.29.87 1.17 1-2.21 1.25-3a5.58 5.58 0 0 0 .33-1z" fill="#fab900" />

          <path d="m30.41 27.87a16.81 16.81 0 0 1 2.46 0c0 .17 0 1.13-.17 1.09s-2.29-.17-2.29-.17z" fill="#fab900" />

          <path d="m30.66 29.5c.48-.45 2.42-.38 2.08 1a4.72 4.72 0 0 1 -1.33 2.29 5.45 5.45 0 0 0 -.67-1.46 1.44 1.44 0 0 1 -.08-1.83z" fill="#f2910d" />

          <path d="m31 13.54a2.29 2.29 0 0 1 3 2c.17 1.75-1.7 4.25-3.54 2.75s-1.76-3.79.54-4.75z" fill="#1d1d1b" />

          <path d="m31.27 14.69a1.27 1.27 0 0 1 1.73 1.12c.09 1-.94 2.34-2 1.51a1.45 1.45 0 0 1 .27-2.63z" fill="#fab900" />

          <g fill="#1d1d1b">

            <path d="m29.64 19.16c.27-.23.71-.14.83.44s-.66.63-.87.42a.59.59 0 0 1 .04-.86z" />

            <path d="m31.66 19.48c.27-.23.71-.15.83.43s-.66.63-.87.42a.58.58 0 0 1 .04-.85z" />

            <path d="m33.24 18.75c.27-.23.71-.15.84.44s-.67.62-.88.41a.58.58 0 0 1 .04-.85z" />

            <path d="m34.45 17.12c.27-.23.71-.14.83.44s-.66.63-.87.42a.59.59 0 0 1 .04-.86z" />

            <path d="m32.49 21.12a3.59 3.59 0 0 1 1.4.88c0 .14 0 .54-.15.52a9.93 9.93 0 0 1 -1.58-.83c-.06-.13.25-.53.33-.57z" />

            <path d="m31.58 22.33c.1 0 1.83 1.19 1.81 1.46s-.08.46-.29.44a10.08 10.08 0 0 1 -2.1-1.42c0-.15.58-.48.58-.48z" />

            <path d="m30.49 23.44c.08-.05 2.21 1.45 2.11 1.62s-.27.4-.48.42a7.9 7.9 0 0 1 -2-1.65c-.02-.17.23-.31.37-.39z" />

          </g>

        </svg>
      </Popover.Button>
      <Popover.Panel
        transition
        className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
          <div className="p-4 m-5">
            {solutions.map((item) => (
              <div
                key={item.name}
                className="group relative flex gap-x-2 rounded-lg p-2 hover:bg-gray-50 "
              >
                <div className="mr-4 flex h-4 w-4 flex-none items-center justify-center rounded-lg group-hover:bg-white">
                  <item.icon
                    className="h-10 w-10 text-green-400 group-hover:text-indigo-600"
                    aria-hidden="true"
                  />
                </div>
                <div
                  className="ml-5">
                  <a
                    href={item.href}
                    className="font-semibold text-black font-bellerose text-sm"
                  >
                    {item.name}
                    <span className="absolute inset-0" />
                  </a>
                  <p className="text-gray-600 text-xs ">
                    {item.description}
                  </p>
                </div>

              </div>
            ))}
          </div>
        </div>
      </Popover.Panel>
    </Popover>
  );
}
