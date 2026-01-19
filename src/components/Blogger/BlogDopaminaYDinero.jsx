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
                  El dinero no se gasta solo con lógica. Gran parte de nuestras
                  decisiones financieras están influenciadas por emociones,
                  química cerebral y sistemas diseñados para captar nuestra
                  atención. Entender este proceso es clave para recuperar el
                  control.
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
                  La dopamina suele llamarse erróneamente “la hormona del placer”.
                  En realidad, es el químico de la anticipación. Se activa cuando
                  el cerebro espera una recompensa, no cuando la disfruta. Esto
                  explica por qué planear una compra puede sentirse mejor que
                  poseer el objeto.
                </p>

                <p className="mt-6">
                  Cuando atravesamos estrés, tristeza, ansiedad o vacío
                  emocional, el cerebro entra en modo de supervivencia. Busca
                  alivio inmediato, no soluciones a largo plazo. El dinero,
                  especialmente en forma de compras rápidas o experiencias
                  inmediatas, se convierte en un atajo químico.
                </p>

                <p className="mt-6">
                  Este patrón no indica falta de disciplina ni ignorancia
                  financiera. Es una respuesta humana predecible. El problema
                  surge cuando el gasto emocional se vuelve repetitivo y
                  automático, creando consecuencias financieras que agravan el
                  malestar inicial.
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
                      Adquirir productos o servicios sin planificación,
                      motivados por una emoción intensa más que por una
                      necesidad real.
                    </span>
                  </li>

                  <li className="flex gap-x-3">
                    <CubeIcon className="mt-1 h-5 w-5 flex-none text-orange-600" />
                    <span>
                      <strong className="font-semibold text-gray-900">
                        Uso del dinero como anestesia emocional:
                      </strong>{" "}
                      Gastar para evitar sentir aburrimiento, soledad,
                      frustración o sensación de pérdida de control.
                    </span>
                  </li>

                  <li className="flex gap-x-3">
                    <CubeIcon className="mt-1 h-5 w-5 flex-none text-orange-600" />
                    <span>
                      <strong className="font-semibold text-gray-900">
                        Ciclo dopamina–culpa–repetición:
                      </strong>{" "}
                      El alivio es breve. Luego aparece la culpa, que paradójicamente
                      puede detonar un nuevo gasto.
                    </span>
                  </li>

                  <li className="flex gap-x-3">
                    <CubeIcon className="mt-1 h-5 w-5 flex-none text-orange-600" />
                    <span>
                      <strong className="font-semibold text-gray-900">
                        Sistemas diseñados para explotarlo:
                      </strong>{" "}
                      Pagos en un clic, recompensas instantáneas, notificaciones y
                      ofertas limitadas amplifican este comportamiento.
                    </span>
                  </li>
                </ul>

                <p className="mt-8">
                  El verdadero problema no es gastar, sino gastar de forma
                  inconsciente. Cuando no entendemos qué emoción estamos
                  intentando regular, el dinero se convierte en una muleta
                  emocional costosa.
                </p>

                <h3 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                  Cómo romper el ciclo dopaminérgico del gasto
                </h3>

                <p className="mt-6">
                  Romper este patrón no requiere fuerza de voluntad extrema.
                  Requiere conciencia. Introducir pequeñas pausas entre el
                  impulso y la acción reduce drásticamente la intensidad del
                  deseo.
                </p>

                <p className="mt-6">
                  Preguntas simples como “¿qué estoy sintiendo ahora?” o “¿esto
                  seguirá siendo importante mañana?” activan la corteza
                  prefrontal, la parte racional del cerebro, reduciendo la
                  dominancia emocional.
                </p>

                <p className="mt-6">
                  Además, sustituir fuentes de dopamina rápida por dopamina
                  sostenible —ejercicio, aprendizaje, progreso personal—
                  reconstruye una relación más sana con el dinero.
                </p>

                <h3 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                  El verdadero cambio financiero
                </h3>

                <p className="mt-6">
                  Cuando dejas de usar el dinero para regular emociones, tus
                  finanzas comienzan a ordenarse casi sin esfuerzo. Ahorrar deja
                  de sentirse como sacrificio y gastar se vuelve una decisión
                  consciente, no reactiva.
                </p>

                <p className="mt-6">
                  El objetivo no es eliminar el placer del dinero, sino dejar de
                  depender de él para sentirte bien. Ahí es donde ocurre el
                  verdadero crecimiento financiero y personal.
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
                Es el uso del dinero como mecanismo para regular emociones
                difíciles. No responde a una necesidad real, sino a una búsqueda
                de alivio inmediato.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-900">
                ¿Por qué gastar da alivio momentáneo?
              </h4>
              <p className="mt-2">
                Porque la dopamina se libera en la anticipación de la recompensa.
                Una vez que el estímulo pasa, el cerebro vuelve a buscar otro.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-900">
                ¿Esto se soluciona ganando más dinero?
              </h4>
              <p className="mt-2">
                No. Sin conciencia emocional, mayores ingresos suelen amplificar
                el mismo patrón de gasto.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
