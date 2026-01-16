import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import Footer from "./Footer";
import Header from "./Header";
import imageninversion from "../assets/interescompuesto.jpg";
Chart.register(...registerables);

const Calculator = () => {
  const [initialInvestment, setInitialInvestment] = useState("");
  const [monthlyContribution, setMonthlyContribution] = useState("");
  const [years, setYears] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [compoundFrequency, setCompoundFrequency] = useState(1);
  const [futureValue, setFutureValue] = useState(null);
  const [totalInterest, setTotalInterest] = useState(null);
  const [chartData, setChartData] = useState({});

  const calculateCompoundInterest = () => {
    const principal = parseFloat(initialInvestment);
    const contribution = parseFloat(monthlyContribution);
    const rate = parseFloat(interestRate) / 100;
    const n = parseInt(compoundFrequency);
    const t = parseFloat(years);

    let futureValue = principal * Math.pow(1 + rate / n, n * t);
    let dataPoints = [];

    if (t > 50) {
      alert("El cálculo está limitado a un máximo de 50 años.");
      return;
    }

    for (let i = 1; i <= t * 12; i++) {
      futureValue +=
        contribution * Math.pow(1 + rate / n, n * ((t * 12 - i + 1) / 12));
      if (i % 12 === 0) {
        dataPoints.push(futureValue);
      }
    }

    const totalContributions = principal + contribution * t * 12;
    const totalInterest = futureValue - totalContributions;

    setFutureValue(futureValue);
    setTotalInterest(totalInterest);

    const labels = Array.from({ length: t }, (_, i) => `Año ${i + 1}`);
    setChartData({
      labels,
      datasets: [
        {
          label: "Valor Futuro",
          data: dataPoints,
          backgroundColor: "rgba(75, 192, 192, 0.2)",
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 2,
        },
      ],
    });
  };

  const formatNumber = (number) => {
    return number.toLocaleString("es-ES", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  return (
    <>
      <Header />
      <div className="max-w-lg mx-auto m-10 p-6 bg-white rounded-lg shadow-lg slit-in-vertical">
        <h1 className="text-4xl font-bold mb-6 text-center text-black">
          Calculadora de Interés Compuesto Online
        </h1>
        <p className="text-gray-700 text-center mb-6">
          Utiliza nuestra calculadora para conocer el valor futuro de tus
          inversiones.
        </p>

        {/* Formulario para la calculadora */}
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Inversión inicial:
          </label>
          <input
            type="number"
            placeholder="Ej. 10000"
            value={initialInvestment}
            onChange={(e) => setInitialInvestment(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md bg-gray-700 text-white"
            aria-label="Inversión inicial en la calculadora de interés compuesto"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Contribución mensual:
          </label>
          <input
            type="number"
            placeholder="Ej. 100"
            value={monthlyContribution}
            onChange={(e) => setMonthlyContribution(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md bg-gray-700 text-white"
            aria-label="Contribución mensual para la calculadora"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Tiempo en años:
          </label>
          <input
            type="number"
            placeholder="Ej. 5"
            value={years}
            onChange={(e) => setYears(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md bg-gray-700 text-white"
            aria-label="Cantidad de tiempo en años"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Tasa de interés anual (%) :
          </label>
          <input
            type="number"
            placeholder="Ej. 5"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md bg-gray-700 text-white"
            aria-label="Tasa de interés anual estimada"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Frecuencia de capitalización:
          </label>
          <select
            value={compoundFrequency}
            onChange={(e) => setCompoundFrequency(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md bg-gray-700 text-white"
            aria-label="Frecuencia de capitalización"
          >
            <option value="1">Anual</option>
            <option value="4">Trimestral</option>
            <option value="12">Mensual</option>
          </select>
        </div>

        <button
          onClick={calculateCompoundInterest}
          className="w-full py-3 bg-green-700 text-white text-xl font-bold rounded-md hover:bg-green-600 transition"
        >
          Calcular mi inversión 📈
        </button>

        {/* Resultados y gráfico */}
        <section className="flex-col mt-6">
          {chartData.labels && (
            <div className="mt-6">
              <Bar
                data={chartData}
                aria-label="Gráfico de valor futuro anual"
              />
            </div>
          )}
          {futureValue !== null && (
            <div className="mt-6 text-center">
              <h3 className="text-xl font-bold text-black">
                Intereses Generados: ${formatNumber(totalInterest)}
              </h3>
              <h3 className="text-xl font-bold text-black">
                Valor Futuro: ${formatNumber(futureValue)}
              </h3>
            </div>
          )}
        </section>

        <div className="mt-4 text-center">
          <p className="text-gray-700 mb-2">
            ¿Quieres aprender cómo lograr este resultado?
          </p>
          <a
            href="/blog"
            className="inline-block rounded-full bg-orange-600 px-6 py-3 text-white font-semibold hover:bg-orange-700"
          >
            Aprende estrategias reales 📚
          </a>
        </div>
      </div>

      {/* Sección para SEO */}
      <section className="mt-10 p-6 sm:p-10 md:p-20 bg-gray-100 rounded-lg max-w-full flex flex-col md:flex-row">
        <div className="md:w-2/3">
          <h2 className="text-2xl md:text-3xl font-bold text-center md:text-left text-black">
            ¿Qué es el interés compuesto y cómo se calcula? - Inversiones a
            largo plazo
          </h2>
          <p className="text-gray-700 mt-4 text-lg md:text-2xl">
            El interés compuesto es una poderosa herramienta financiera que
            permite calcular el crecimiento de una inversión a lo largo del
            tiempo al reinvertir los intereses generados, es decir, se obtienen
            ganancias sobre las ganancias. La fórmula del interés compuesto ha
            sido fundamental en la historia de las finanzas y es ampliamente
            utilizada para planificar inversiones a largo plazo.
          </p>
          <p className="text-gray-700 mt-4 text-lg md:text-2xl">
            Históricamente, el concepto de interés compuesto se remonta a la
            antigua Mesopotamia, donde ya se aplicaban conceptos de crecimiento
            acumulativo en préstamos y acuerdos comerciales. Más tarde, el
            matemático Leonardo Fibonacci popularizó su cálculo en Europa
            durante la Edad Media, introduciendo la idea en su libro "Liber
            Abaci". Desde entonces, el interés compuesto ha sido un pilar
            fundamental en la creación de riqueza, tanto para individuos como
            para instituciones.
          </p>
          <p className="text-gray-700 mt-4 text-lg md:text-2xl">
            Por ejemplo, si inviertes $1,000 con una tasa de interés anual
            compuesta del 5%, después de 10 años, tu inversión podría crecer
            significativamente gracias al efecto acumulativo. Es decir, no solo
            se obtienen beneficios sobre la inversión inicial, sino que también
            se generan intereses sobre los intereses ganados en cada periodo.
          </p>
          <p className="text-gray-700 mt-4 text-lg md:text-2xl">
            Hoy en día, el interés compuesto se aplica en diversas áreas, como
            cuentas de ahorro, fondos de inversión, préstamos y hasta en la
            planificación de fondos para la jubilación. Utilizando una
            calculadora de interés compuesto, puedes proyectar de forma precisa
            el crecimiento de tus inversiones, ajustar tus contribuciones y
            visualizar cómo tu dinero podría crecer a lo largo de los años.
          </p>
          <section className="mt-12 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-black mb-4">
              Preguntas frecuentes sobre el interés compuesto
            </h2>

            <p className="text-gray-700 mb-3">
              <strong>
                ¿El interés compuesto es mejor que el interés simple?
              </strong>
              <br />
              Sí, porque reinvierte las ganancias y acelera el crecimiento del
              capital.
            </p>

            <p className="text-gray-700 mb-3">
              <strong>¿Cada cuánto conviene capitalizar?</strong>
              <br />
              Mientras más frecuente, mayor será el crecimiento, especialmente a
              largo plazo.
            </p>
          </section>
        </div>
        <div className="mt-6 md:mt-0 md:w-1/3 flex justify-center">
          <img
            src={imageninversion}
            alt="Gráfico de crecimiento del interés compuesto"
            className="rounded-lg shadow-lg max-w-full h-auto md:max-w-sm"
          />
        </div>
      </section>

      {/* Nueva sección */}
      <div className="bg-gray-50 py-12 mt-5 mb-5">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Explora más herramientas útiles
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-y-8 md:grid-cols-3 md:gap-x-6">
            <div className="rounded-lg border border-gray-300 bg-white p-6 shadow-md">
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
            </div>
            <div className="rounded-lg border border-gray-300 bg-white p-6 shadow-md">
              <h3 className="text-lg font-semibold text-gray-800">
                Generador de Voz con IA
              </h3>
              <p className="mt-2 text-gray-600">
                Convierte texto en audio de alta calidad con nuestro generador
                de voz impulsado por inteligencia artificial.
              </p>
              <a
                href="/voz-de-inteligencia-artificial"
                className="mt-4 inline-block rounded bg-orange-600 px-4 py-2 text-white hover:bg-orange-700"
              >
                Probar Generador
              </a>
            </div>
            <div className="rounded-lg border border-gray-300 bg-white p-6 shadow-md">
              <h3 className="text-lg font-semibold text-gray-800">
                Herramientas de Delivery CSS
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
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Calculator;
