import React from "react";
import Header from "../Header";


const IframeComponent = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col justify-center items-center bg-gradient-to-t from-orange-500 to-black animate-bg-pan-top  p-10">
        <div className="w-96 bg-transparent flex flex-col justify-center items-center bg-gradient-to-t from-red-500 to-black animate-bg-pan-top ">
          <h1 className="text-3xl font-bold mb-4 text-white">
            Juega Tetris: El clásico de siempre
          </h1>
          <p className="text-lg text-gray-300 mb-4">
            Disfruta de una versión de Tetris desarrollada con React. Desafía tus
            habilidades y compite por la puntuación más alta.
            <br />
            {" "}
            <span style={{ color: "yellowgreen" }}>
              Da click y usa WASD
              de tu teclado.
            </span>
          </p>

          <iframe
            src="https://manuelcalso.github.io/tetris-game.github.io/"
            width="480"
            height="640"
            className="border rounded-lg"
            title="Tetris Game - Clásico Juego de Piezas"
            loading="lazy"
            aria-label="Juego de Tetris"
          ></iframe>
          <p className="text-white mt-4 text-center">
            Un sencillo juego de Tetris que desarrollé con React. ¡Pruébalo y
            mejora tu puntuación!
          </p>
        </div>
      </div>
    </>
  );
};

export default IframeComponent;
