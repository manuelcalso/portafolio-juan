import Footer from "./Footer";
import Header from "./Header";

export default function TermsAndConditions() {
  return (
    <>
    <Header/>
      <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-0">
        <div className="mx-auto max-w-4xl lg:px-8">
          <div className="mx-auto max-w-3xl">
            <p className="text-base font-semibold text-indigo-600">
              Información legal
            </p>

            <h1 className="mt-2 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              Términos y Condiciones
            </h1>

            <p className="mt-6 text-lg text-gray-700">
              Al acceder y utilizar <strong>juancalleros.com</strong>, aceptas
              los presentes Términos y Condiciones. Si no estás de acuerdo con
              alguno de ellos, te recomendamos no utilizar este sitio web.
            </p>

            <div className="mt-12 space-y-10 text-gray-700 text-base leading-7">
              <section>
                <h2 className="text-2xl font-bold text-gray-900">
                  1. Uso del sitio
                </h2>
                <p className="mt-4">
                  El contenido de este sitio tiene fines informativos,
                  educativos y demostrativos. No se garantiza que la información
                  sea completa, exacta o actualizada en todo momento.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900">
                  2. Propiedad intelectual
                </h2>
                <p className="mt-4">
                  Todos los contenidos, incluyendo textos, diseños, código,
                  herramientas, logotipos y gráficos, son propiedad de
                  juancalleros.com o se utilizan con la debida autorización, y
                  están protegidos por las leyes de propiedad intelectual.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900">
                  3. Herramientas y calculadoras
                </h2>
                <p className="mt-4">
                  Las herramientas disponibles en este sitio, como calculadoras
                  financieras u otras utilidades, se proporcionan únicamente con
                  fines informativos y no constituyen asesoría profesional,
                  financiera o legal.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900">
                  4. Limitación de responsabilidad
                </h2>
                <p className="mt-4">
                  juancalleros.com no será responsable por pérdidas, daños o
                  perjuicios derivados del uso del sitio, errores en la
                  información, interrupciones del servicio o problemas técnicos.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900">
                  5. Enlaces externos
                </h2>
                <p className="mt-4">
                  Este sitio puede contener enlaces a páginas de terceros. No
                  tenemos control sobre su contenido ni asumimos responsabilidad
                  por ellos.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900">
                  6. Conducta del usuario
                </h2>
                <p className="mt-4">
                  El usuario se compromete a no utilizar este sitio para fines
                  ilícitos, fraudulentos o que puedan dañar, sobrecargar o
                  afectar el funcionamiento normal del sitio web.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900">
                  7. Publicidad
                </h2>
                <p className="mt-4">
                  Este sitio puede mostrar publicidad gestionada por plataformas
                  externas como Google AdSense. El contenido de los anuncios es
                  responsabilidad exclusiva del anunciante.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900">
                  8. Modificaciones
                </h2>
                <p className="mt-4">
                  Nos reservamos el derecho de modificar estos Términos y
                  Condiciones en cualquier momento. Las modificaciones serán
                  efectivas una vez publicadas en esta página.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900">
                  9. Legislación aplicable
                </h2>
                <p className="mt-4">
                  Estos Términos se rigen por la legislación aplicable, sin
                  perjuicio de los derechos que correspondan a los consumidores.
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
