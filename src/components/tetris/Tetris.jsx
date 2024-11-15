import React from "react";
import Header from "../Header";

const IframeComponent = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col justify-center items-center bg-gradient-to-t from-blue-500 to-black animate-bg-pan-top font-kalnia pt-10">
        <h1 className="text-3xl font-bold mb-4 text-white">
          Juega Tetris: El clásico de siempre
        </h1>
        <p className="text-lg text-gray-300 mb-4">
          Disfruta de una versión de Tetris desarrollada con React. Desafía tus
          habilidades y compite por la puntuación más alta. Da click y usa WASD
          de tu teclado.
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
        <p className="text-gray-200 mt-4 text-center">
          Un sencillo juego de Tetris que desarrollé con React. ¡Pruébalo y
          mejora tu puntuación!
        </p>
      </div>
    </>
  );
};

export default IframeComponent;
