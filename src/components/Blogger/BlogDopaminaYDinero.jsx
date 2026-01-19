import { BookOpenIcon, CubeIcon } from "@heroicons/react/20/solid";
import libro2 from "../../assets/dopamoney.png";
import Footer from "../Footer";
import Header from "../Header";

export default function BlogDopaminaYDinero() {
  return (
    <>
      <Header />
      <div className="relative isolate overflow-hidden bg-gray-100 px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <svg
            className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-orange-300 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="pattern-dopamina"
                width={200}
                height={100}
                x="50%"
                y={-1}
                patternUnits="userSpaceOnUse"
              >
                <path d="M100 200V.5M.5 .5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
              <path
                d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect
              width="100%"
              height="100%"
              strokeWidth={0}
              fill="url(#pattern-dopamina)"
            />
          </svg>
        </div>

        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          {/* Header */}
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="lg:max-w-lg">
                <a
                  className="text-lg font-semibold leading-7 text-orange-600"
                  href="/blog"
                >
                  Regresar al blog
                </a>
                <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  La dopamina y el dinero: por qué gastamos cuando estamos
                  emocionalmente mal
                </h1>
                <p className="mt-6 text-xl leading-8 text-gray-700">
                  No siempre gastamos por necesidad. Muchas veces lo hacemos
                  para aliviar emociones como el estrés, la tristeza o la
                  ansiedad. En este artículo exploramos cómo la dopamina influye
                  en nuestras decisiones financieras.
                </p>
              </div>
            </div>
          </div>

          {/* Imagen */}
          <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
            <img
              className="w-[28rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[27rem]"
              src={libro2}
              alt="Dopamina y gasto emocional"
            />
          </div>

          {/* Contenido */}
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
                <p>
                  La dopamina no es la hormona del placer, sino de la
                  anticipación. Se activa cuando el cerebro espera una
                  recompensa. Comprar algo nuevo, recibir una notificación o
                  aprovechar una oferta genera ese pico químico que nos impulsa
                  a actuar.
                </p>

                <br />

                <p>
                  Cuando estamos emocionalmente mal, el cerebro busca alivio
                  inmediato. El gasto se convierte en una forma rápida de
                  recuperar control, distraernos o sentir una pequeña victoria
                  momentánea, aunque el efecto dure poco.
                </p>

                <ul role="list" className="mt-8 space-y-8 text-gray-600">
                  <h2 className="text-base font-semibold leading-7 text-orange-600">
                    Cómo se manifiesta el gasto emocional
                  </h2>

                  <li className="flex gap-x-3">
                    <CubeIcon className="mt-1 h-5 w-5 flex-none text-orange-600" />
                    <span>
                      <strong className="font-semibold text-gray-900">
                        Compras impulsivas:
                      </strong>{" "}
                      Gastar sin planificar para sentir alivio inmediato,
                      seguido muchas veces de culpa.
                    </span>
                  </li>

                  <li className="flex gap-x-3">
                    <CubeIcon className="mt-1 h-5 w-5 flex-none text-orange-600" />
                    <span>
                      <strong className="font-semibold text-gray-900">
                        Uso del dinero como anestesia:
                      </strong>{" "}
                      Comprar para no sentir ansiedad, soledad o frustración.
                    </span>
                  </li>

                  <li className="flex gap-x-3">
                    <CubeIcon className="mt-1 h-5 w-5 flex-none text-orange-600" />
                    <span>
                      <strong className="font-semibold text-gray-900">
                        Ciclo dopamina–culpa:
                      </strong>{" "}
                      El alivio es breve y genera la necesidad de repetir el
                      comportamiento.
                    </span>
                  </li>

                  <li className="flex gap-x-3">
                    <CubeIcon className="mt-1 h-5 w-5 flex-none text-orange-600" />
                    <span>
                      <strong className="font-semibold text-gray-900">
                        Sistema diseñado para explotarlo:
                      </strong>{" "}
                      Pagos en un clic, ofertas limitadas y estímulos constantes
                      refuerzan este patrón.
                    </span>
                  </li>
                </ul>

                <p className="mt-8">
                  Romper este ciclo no se trata de fuerza de voluntad, sino de
                  conciencia emocional. Identificar qué estás sintiendo antes de
                  gastar, introducir pausas y buscar fuentes de dopamina más
                  saludables puede cambiar radicalmente tu relación con el
                  dinero.
                </p>

                <h3 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                  El verdadero cambio financiero
                </h3>

                <p className="mt-6">
                  Cuando aprendes a regular tus emociones sin usar el dinero
                  como escape, tus finanzas comienzan a ordenarse casi de forma
                  natural. No se trata de ganar más, sino de gastar con
                  intención.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* FAQ */}
        <div className="mt-16 px-20">
          <h3 className="text-2xl font-bold tracking-tight text-gray-900">
            Preguntas frecuentes sobre dopamina y dinero
          </h3>

          <div className="mt-8 space-y-8 text-gray-700">
            <div>
              <h4 className="text-lg font-semibold text-gray-900">
                ¿Qué es el gasto emocional?
              </h4>
              <p className="mt-2">
                El gasto emocional ocurre cuando usamos el dinero para regular
                emociones como ansiedad, tristeza, aburrimiento o frustración.
                No responde a una necesidad real, sino a una búsqueda de alivio
                momentáneo.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-900">
                ¿La dopamina es mala para las finanzas?
              </h4>
              <p className="mt-2">
                No. La dopamina es necesaria para la motivación y la acción. El
                problema surge cuando dependemos exclusivamente de estímulos
                rápidos, como compras impulsivas, para sentir bienestar.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-900">
                ¿Por qué gastar dinero me hace sentir mejor solo por un momento?
              </h4>
              <p className="mt-2">
                Porque la dopamina se libera en la anticipación de la
                recompensa, no en su disfrute prolongado. Una vez que el
                estímulo desaparece, el cerebro vuelve a buscar otra fuente de
                alivio.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-900">
                ¿Cómo puedo evitar gastar cuando estoy emocionalmente mal?
              </h4>
              <p className="mt-2">
                El primer paso es reconocer la emoción antes de gastar.
                Introducir una pausa consciente, retrasar la compra y buscar
                alternativas como caminar, escribir o hacer ejercicio puede
                romper el patrón automático.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-900">
                ¿Esto significa que necesito ganar más dinero?
              </h4>
              <p className="mt-2">
                No necesariamente. Muchas personas con ingresos altos siguen
                atrapadas en el gasto emocional. La clave está en la relación
                con el dinero, no solo en la cantidad que ganas.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA herramientas */}
      <div className="bg-gray-50 py-12 mt-5 mb-5">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Explora más herramientas útiles
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-y-8 md:grid-cols-3 md:gap-x-6">
            <div className="rounded-lg border border-gray-300 bg-white p-6 shadow-md">
              <h3 className="text-lg font-semibold text-gray-800">
                Calculadora de Interés Compuesto
              </h3>
              <p className="mt-2 text-gray-600">
                Visualiza cómo pequeñas decisiones financieras pueden crecer con
                el tiempo.
              </p>
              <a
                href="/calculadora-de-interes-compuesto-online"
                className="mt-4 inline-block rounded bg-orange-600 px-4 py-2 text-white hover:bg-orange-700"
              >
                Calcular ahora
              </a>
            </div>

            <div className="rounded-lg border border-gray-300 bg-white p-6 shadow-md">
              <h3 className="text-lg font-semibold text-gray-800">
                Generador de Voz con IA
              </h3>
              <p className="mt-2 text-gray-600">
                Convierte texto en audio con ayuda de inteligencia artificial.
              </p>
              <a
                href="/voz-de-inteligencia-artificial"
                className="mt-4 inline-block rounded bg-orange-600 px-4 py-2 text-white hover:bg-orange-700"
              >
                Probar generador
              </a>
            </div>

            <div className="rounded-lg border border-gray-300 bg-white p-6 shadow-md">
              <h3 className="text-lg font-semibold text-gray-800">
                Herramientas para desarrolladores
              </h3>
              <p className="mt-2 text-gray-600">
                Recursos prácticos para optimizar tus proyectos digitales.
              </p>
              <a
                href="/developer-tools"
                className="mt-4 inline-block rounded bg-orange-600 px-4 py-2 text-white hover:bg-orange-700"
              >
                Ver herramientas
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
