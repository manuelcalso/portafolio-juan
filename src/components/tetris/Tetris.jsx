import React from "react";
import Header from "../Header";
import Footer from "../Footer";

const IframeComponent = () => {
  return (
    <>
      <Header />

      <main className="flex flex-col items-center bg-gradient-to-t from-orange-500 to-black p-10">
        <section className="w-full max-w-3xl flex flex-col items-center text-center">
          <h1 className="mb-4 text-4xl font-extrabold text-white">
            Juega Tetris Online – El Clásico Juego de Piezas
          </h1>

          <p className="mb-6 text-lg text-gray-200">
            Disfruta de una versión moderna del <strong>Tetris clásico</strong>,
            desarrollada con <strong>React</strong>. Pon a prueba tu lógica,
            reflejos y coordinación mientras compites por la puntuación más
            alta.
          </p>

          <p className="mb-6 text-base text-gray-300">
            <span className="font-semibold text-lime-400">
              Da click dentro del juego y usa las teclas WASD de tu teclado.
            </span>
          </p>

          <iframe
            src="https://manuelcalso.github.io/tetris-game.github.io/"
            width="480"
            height="640"
            className="mb-8 rounded-xl border border-gray-700 shadow-2xl"
            title="Juego de Tetris Online en React"
            loading="lazy"
            aria-label="Juego de Tetris clásico online"
          />

          {/* SEO CONTENT */}
          <article className="space-y-5 text-gray-200 text-left">
            <h2 className="text-2xl font-bold text-white">
              Historia del juego Tetris
            </h2>

            <p>
              <strong>Tetris</strong> es uno de los videojuegos más icónicos y
              reconocidos de la historia. Fue creado en <strong>1984</strong>{" "}
              por el ingeniero ruso <strong>Alexey Pajitnov</strong>, mientras
              trabajaba en la Academia de Ciencias de la Unión Soviética.
            </p>

            <p>
              El objetivo del juego es sencillo pero adictivo: encajar piezas
              geométricas llamadas <em>tetrominós</em> para formar líneas
              completas y evitar que la pantalla se llene. Su simplicidad,
              combinada con una dificultad progresiva, lo convirtió rápidamente
              en un fenómeno mundial.
            </p>

            <p>
              A lo largo de los años, Tetris ha aparecido en casi todas las
              plataformas imaginables: consolas, computadoras, teléfonos móviles
              y navegadores web. Es considerado un referente en el diseño de
              videojuegos y un ejemplo perfecto de jugabilidad pura.
            </p>

            <p>
              Esta versión de <strong>Tetris online</strong> fue desarrollada
              usando tecnologías modernas como <strong>React</strong>, llevando
              el espíritu del juego clásico a la web actual, manteniendo la
              esencia que lo hizo famoso.
            </p>
          </article>
        </section>
      </main>
      {/* Nueva sección */}
      <section className="bg-gray-50 py-12 mt-5 mb-5">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Explora Más Herramientas Útiles
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-y-8 md:grid-cols-3 md:gap-x-6">
            <article className="rounded-lg border border-gray-300 bg-white p-6 shadow-md">
              <h3 className="text-lg font-semibold text-gray-800">
                Reflexiones y Creaciones en "El Escritorio"
              </h3>
              <p className="mt-2 text-gray-600">
                Visita mi espacio personal, donde comparto reflexiones,
                investigaciones, teorías y novedades.
              </p>
              <a
                href="/blog"
                className="mt-4 inline-block rounded bg-orange-600 px-4 py-2 text-white hover:bg-orange-700"
              >
                Leer Ahora
              </a>
            </article>
            <article className="rounded-lg border border-gray-300 bg-white p-6 shadow-md">
              <h3 className="text-lg font-semibold text-gray-800">
                Herramientas de CSS para Delivery
              </h3>
              <p className="mt-2 text-gray-600">
                Descubre nuestras herramientas de CSS diseñadas específicamente
                para mejorar la experiencia de entrega en tu aplicación.
              </p>
              <a
                href="/developer-tools"
                className="mt-4 inline-block rounded bg-orange-600 px-4 py-2 text-white hover:bg-orange-700"
              >
                Ver Herramientas
              </a>
            </article>
            <article className="rounded-lg border border-gray-300 bg-white p-6 shadow-md">
              <h3 className="text-lg font-semibold text-gray-800">
                Calculadora de Interés Compuesto
              </h3>
              <p className="mt-2 text-gray-600">
                Utiliza nuestra calculadora de interés compuesto para planificar
                tu futuro financiero y maximizar tus ahorros.
              </p>
              <a
                href="/calculadora-de-interes-compuesto-online"
                className="mt-4 inline-block rounded bg-orange-600 px-4 py-2 text-white hover:bg-orange-700"
              >
                Calcular Ahora
              </a>
            </article>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default IframeComponent;
