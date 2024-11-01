import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import Footer from "./Footer";
import Header from "./Header";
Chart.register(...registerables);

const Calculator = () => {
  const [initialInvestment, setInitialInvestment] = useState(0);
  const [monthlyContribution, setMonthlyContribution] = useState(0);
  const [years, setYears] = useState(0);
  const [interestRate, setInterestRate] = useState(0);
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
          Utiliza nuestra calculadora para conocer el valor futuro de tus inversiones.
        </p>

        {/* Formulario para la calculadora */}
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Inversión inicial:
          </label>
          <input
            type="number"
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
          className="w-full py-2 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600"
        >
          Calcular
        </button>

        {/* Resultados y gráfico */}
        <section className="flex-col mt-6">
          {chartData.labels && (
            <div className="mt-6">
              <Bar data={chartData} aria-label="Gráfico de valor futuro anual" />
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
      </div>

      {/* Sección para SEO */}
      <section className="mt-10 p-6 bg-gray-100 rounded-lg max-w-lg mx-auto">
        <h2 className="text-2xl font-bold text-center text-black">
          ¿Qué es el interés compuesto y cómo se calcula?
        </h2>
        <p className="text-gray-700 mt-4">
          El interés compuesto es una fórmula financiera que permite calcular el crecimiento
          de una inversión a lo largo del tiempo, reinvirtiendo los intereses generados.
          Utilizando una calculadora de interés compuesto, puedes proyectar tus inversiones
          futuras con precisión.
        </p>
      </section>

      <Footer />
    </>
  );
};

export default Calculator;
