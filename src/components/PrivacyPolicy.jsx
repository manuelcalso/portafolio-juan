import Header from "./Header";
import Footer from "./Footer";

export default function PrivacyPolicy() {
  return (
    <>
      <Header />
      <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-0">
        <div className="mx-auto max-w-4xl lg:px-8">
          <div className="mx-auto max-w-3xl">
            <p className="text-base font-semibold text-indigo-600">
              Información legal
            </p>

            <h1 className="mt-2 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              Política de Privacidad
            </h1>

            <p className="mt-6 text-lg text-gray-700">
              En <strong>juancalleros.com</strong>, la privacidad de los
              visitantes es una prioridad. Esta Política de Privacidad describe
              cómo se recopila, utiliza y protege la información cuando los
              usuarios acceden a este sitio web.
            </p>

            <div className="mt-12 space-y-10 text-gray-700 text-base leading-7">
              <section>
                <h2 className="text-2xl font-bold text-gray-900">
                  1. Información que recopilamos
                </h2>
                <p className="mt-4">
                  Podemos recopilar información técnica como dirección IP, tipo
                  de navegador, dispositivo, páginas visitadas y duración de la
                  sesión, así como datos enviados voluntariamente mediante
                  formularios de contacto.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900">
                  2. Uso de la información
                </h2>
                <p className="mt-4">
                  La información recopilada se utiliza para mejorar la
                  experiencia del usuario, optimizar el contenido del sitio,
                  responder consultas y mostrar publicidad relevante.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900">3. Cookies</h2>
                <p className="mt-4">
                  Este sitio utiliza cookies para analizar el tráfico, recordar
                  preferencias y mostrar anuncios personalizados o no
                  personalizados. El usuario puede desactivar las cookies desde
                  la configuración de su navegador.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900">
                  4. Google Analytics
                </h2>
                <p className="mt-4">
                  juancalleros.com utiliza Google Analytics para analizar el uso
                  del sitio. Google recopila información de forma anónima
                  mediante cookies para generar estadísticas de navegación.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900">
                  5. Google AdSense
                </h2>
                <p className="mt-4">
                  Este sitio utiliza Google AdSense para mostrar anuncios.
                  Google puede usar cookies para mostrar publicidad relevante
                  según las visitas del usuario a este y otros sitios web.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900">
                  6. Enlaces externos
                </h2>
                <p className="mt-4">
                  Este sitio puede contener enlaces a sitios externos. No somos
                  responsables del contenido ni de las políticas de privacidad
                  de dichos sitios.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900">
                  7. Cambios en esta política
                </h2>
                <p className="mt-4">
                  Nos reservamos el derecho de actualizar esta Política de
                  Privacidad en cualquier momento. Los cambios serán publicados
                  en esta página.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900">
                  8. Contacto
                </h2>
                <p className="mt-4">
                  Si tienes preguntas sobre esta Política de Privacidad, puedes
                  contactarnos a través del formulario disponible en el sitio.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}
