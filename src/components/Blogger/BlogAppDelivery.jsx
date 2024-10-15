import { LockClosedIcon, ServerIcon, CpuChipIcon } from '@heroicons/react/20/solid'


export default function BlogAppDelivery() {
  return (
    <>
      <div className="relative isolate overflow-hidden bg-gray-100 px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <svg
            className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-orange-300 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="e813992c-7d03-4cc4-a2bd-151760b470a0"
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
            <rect width="100%" height="100%" strokeWidth={0} fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
          </svg>
        </div>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="lg:max-w-lg">
                <a className="text-base font-semibold leading-7 text-orange-600" href='/blog'>Regresar al blog</a>
                <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Desarrollo de app de delivery "Yo Voy"</h1>
                <p className="mt-6 text-xl leading-8 text-gray-700">
                  En este post te contaré cómo surgió la idea, las tecnologías que estoy utilizando y los retos que encuentro en el proceso de negocio.
                </p>
              </div>
            </div>
          </div>
          <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
            <img
              className="w-[28rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[27rem]"
              src="https://storage.googleapis.com/portafilo/yovoyapp.png"
              alt=""
            />
          </div>
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
                <p>
                  "Yo Voy" nació gracias a la colaboración con mi socio Angel Sosa, mejor conocido como "Sonrics".
                  Aproximadamente en 2018, él lanzó una página en Facebook donde se promocionaban menús y platillos con la intención de generar ingresos.
                  Fue en ese momento cuando decidí unirme a la experiencia, ayudando a gestionar pedidos y mejorar el alcance del proyecto.
                </p>
                <br />
                <p>
                  Lo más interesante de esta experiencia fue darnos cuenta de que muchas aplicaciones internacionales no logran cubrir adecuadamente
                  las necesidades locales o enfrentan limitaciones geográficas significativas.
                  Esto nos motivó a crear una solución adaptada a nuestra comunidad, entendiendo las particularidades y demandas del mercado local,
                  que muchas veces son ignoradas por las grandes plataformas de delivery.
                </p>
                <br />
                <p>
                  WhatsApp fue una herramienta clave en nuestro proceso, ya que nos permitió contactar a los clientes de manera directa y brindarles mayor confianza.
                  A través de esta plataforma, aprovechamos su sistema de geolocalización para coordinar las entregas de manera más eficiente, asegurando que los pedidos
                  llegaran a su destino de forma rápida y precisa.
                </p>

                <ul role="list" className="mt-8 space-y-8 text-gray-600">
                  <p className="text-base font-semibold leading-7 text-orange-600">Tecnologias que utilizo para la aplicacion:</p>
                  <li className="flex gap-x-3">
                    <CpuChipIcon className="mt-1 h-5 w-5 flex-none text-orange-600" aria-hidden="true" />
                    <span>
                      <strong className="font-semibold text-gray-900">React Native</strong> es una poderosa herramienta para el desarrollo de aplicaciones móviles multiplataforma.
                      Gracias a su capacidad para reutilizar la mayor parte del código entre iOS y Android,
                      React Native nos permite optimizar tiempos de desarrollo y garantizar una experiencia de usuario fluida en ambas plataformas.
                      Además, su amplia comunidad y ecosistema de librerías facilitan la integración de nuevas funcionalidades, asegurando un desarrollo ágil y eficiente.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    < ServerIcon className="mt-1 h-5 w-5 flex-none text-orange-600" aria-hidden="true" />
                    <span>
                      <strong className="font-semibold text-gray-900">Node.js con MySQL.</strong> La combinación de Node.js con MySQL es una solución robusta para construir aplicaciones escalables y eficientes.
                      Node.js nos permite manejar de manera asíncrona múltiples peticiones, optimizando el rendimiento del backend,
                      mientras que MySQL ofrece una base de datos relacional confiable y ampliamente utilizada. Juntos, nos proporcionan una infraestructura sólida para manejar grandes volúmenes de datos y garantizar que las operaciones de la aplicación, como la gestión de usuarios y pedidos, se realicen de manera rápida y eficiente.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <LockClosedIcon className="mt-1 h-5 w-5 flex-none text-orange-600" aria-hidden="true" />
                    <span>
                      <strong className="font-semibold text-gray-900">Firebase</strong> es una plataforma integral de desarrollo que proporciona servicios clave como autenticación, bases de datos en tiempo real y almacenamiento en la nube.
                      Gracias a su arquitectura serverless, nos permite desarrollar funcionalidades complejas sin necesidad de gestionar servidores propios.
                      Además, con Firebase, podemos escalar la aplicación sin esfuerzo, garantizando una experiencia fluida y segura para los usuarios, gestionando notificaciones,
                      análisis en tiempo real y sincronización de datos entre dispositivos de forma eficiente.
                    </span>
                  </li>
                </ul>
                <p className="mt-8">
                  Paralelamente al desarrollo de la aplicación móvil, también estoy trabajando en el plan de negocio, con el objetivo de definir el valor agregado que ofreceremos.
                  Sinceramente, he identificado varias deficiencias en las aplicaciones internacionales que actualmente dominan el mercado.
                  Una de las más notables es la falta de apoyo a los repartidores, quienes no cuentan con seguro social ni protección adecuada por los servicios que brindan.
                  Esto es un aspecto clave que buscamos mejorar a largo plazo, asegurando que nuestros colaboradores cuenten con mejores condiciones laborales.
                </p>
                <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">¿Y ahora, qué sigue?</h2>
                <p className="mt-6">
                  Con el objetivo de llevar el proyecto a su máximo potencial, el siguiente paso es conectar con personas con experiencia en incubación de startups y desarrollo de negocios.
                  Esto nos permitirá evolucionar de manera sólida y estratégica. Por ello, hago una invitación abierta a quienes estén interesados en colaborar y aportar su conocimiento para hacer crecer este proyecto.
                  Si tienes experiencia en el área o crees que puedes contribuir, por favor no dudes en contactarme.
                  ¡Estoy abierto a ideas, consejos y alianzas que nos ayuden a alcanzar el éxito!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}