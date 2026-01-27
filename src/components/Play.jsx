import { useState } from "react";
import SandGame from "./games/SandGame";
import GameShell from "./games/GameShell";
import Header from "./Header";
import Footer from "./Footer";

export default function Play() {
  const [game, setGame] = useState(null);

  return (
    <>
      <Header />

      <main className="mx-auto max-w-6xl px-6 py-12 bg-gray-100 mt-2">
        {/* Hero */}
        <section className="mb-12 text-center">
          <h1 className="mb-3 text-4xl font-extrabold tracking-tight text-black">
            Minigames online
          </h1>
          <p className="mx-auto max-w-xl text-neutral-500">
            Experiencias cortas e interactivas para relajarte, jugar y
            desconectar un momento.
          </p>
        </section>

        {/* Grid de juegos */}
        <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Card juego */}
          <div
            className="group relative overflow-hidden rounded-2xl
                          border border-neutral-200 bg-white
                          shadow-sm transition
                          hover:-translate-y-1 hover:shadow-lg"
          >
            {/* Fondo decorativo */}
            <div
              className="absolute inset-0
                            bg-gradient-to-br
                            from-yellow-200/40 to-transparent
                            opacity-0 transition
                            group-hover:opacity-100"
            />

            <div className="relative p-6">
              <h2 className="mb-2 text-xl font-semibold text-black">
                Arena interactiva
              </h2>
              <p className="mb-6 text-sm text-neutral-600">
                Mueve partículas de arena con el cursor. my little zen.
              </p>

              <button
                onClick={() => setGame("sand")}
                className="inline-flex items-center
                           rounded-lg bg-yellow-400
                           px-5 py-2.5 font-medium text-black
                           transition hover:bg-yellow-300"
              >
                Jugar ahora →
              </button>
            </div>
          </div>

          {/* Placeholder próximos juegos */}
          <div
            className="flex items-center justify-center
                          rounded-2xl border border-dashed
                          border-neutral-300 p-6 text-neutral-400"
          >
            Próximamente…
          </div>

          <div
            className="flex items-center justify-center
                          rounded-2xl border border-dashed
                          border-neutral-300 p-6 text-neutral-400"
          >
            Próximamente…
          </div>
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

      {game === "sand" && (
        <GameShell onExit={() => setGame(null)}>
          <SandGame />
        </GameShell>
      )}
      <Footer />
    </>
  );
}
