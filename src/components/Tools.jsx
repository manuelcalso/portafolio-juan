import React, { useState, Fragment } from 'react';
import Tabs from './Tabs';
import CodeBlock from './Codeblock.jsx';
import Header from './Header.jsx';
import Footer from './Footer.jsx';


export default function Tools() {
  const cssCode = `@keyframes vibrate-1 {
    0% {
      transform: translate(0);
    }
    20% {
      transform: translate(-2px, 2px);
    }
    40% {
      transform: translate(-2px, -2px);
    }
    60% {
      transform: translate(2px, 2px);
    }
    80% {
      transform: translate(2px, -2px);
    }
    100% {
      transform: translate(0);
    }
  }
  .vibrate-1 {
    animation: vibrate-1 0.3s linear infinite both;
  }`;

  const cssCode2 = `   
  .shake {
    animation: shake 1s infinite;
}

@keyframes shake {
    0%  { transform: translate(1px, 1px) rotate(0deg); }
    10% { transform: translate(-1px, -2px) rotate(-1deg); }
    20% { transform: translate(-3px, 0px) rotate(1deg); }
    30% { transform: translate(3px, 2px) rotate(0deg); }
    40% { transform: translate(1px, -1px) rotate(1deg); }
    50% { transform: translate(-1px, 2px) rotate(-1deg); }
    60% { transform: translate(-3px, 1px) rotate(0deg); }
    70% { transform: translate(3px, 1px) rotate(-1deg); }
    80% { transform: translate(-1px, -1px) rotate(1deg); }
    90% { transform: translate(1px, 2px) rotate(0deg); }
    100% { transform: translate(1px, -2px) rotate(-1deg); }
}
`;

  const cssCode3 = `
.pulse {
  animation: pulse 1s infinite;
}

@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.2); }
  100% { transform: scale(1); }
}`;

  const cssCode4 = `
.bounce {
  animation: bounce 1s infinite;
}

@keyframes bounce {
  0% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0); }
}`;

  const cssCode5 = `
.heartbeat {
  animation: heartbeat 1s infinite;
}

@keyframes heartbeat {
  0% { transform: scale(1); }
  25% { transform: scale(1.3); }
  50% { transform: scale(1); }
  75% { transform: scale(0.7); }
  100% { transform: scale(1); }
}`;

  const cssCode6 = `.slide {
  animation: slide 1s infinite;
}

@keyframes slide {
  0%, 100% {transform: translateX(0);}
  50% {transform: translateX(20px);}
}`;

  const cssCode7 = `.flicker {
  animation: flicker 1s infinite;
}

@keyframes flicker {
  0%, 50%, 100% {opacity: 1;}
  25%, 75% {opacity: 0.5;}
}`;

  const cssCode8 = `.rotate {
  animation: rotate 1s infinite;
}

@keyframes rotate {
  0% {transform: rotate(0deg);}
  100% {transform: rotate(360deg);}
}`;

  const cssCode9 = `.wobble {
  animation: wobble 1s infinite;
}

@keyframes wobble {
  0%, 100% {transform: translateX(0) rotate(0deg);}
  15% {transform: translateX(-30px) rotate(-5deg);}
  30% {transform: translateX(15px) rotate(3deg);}
  45% {transform: translateX(-15px) rotate(-3deg);}
  60% {transform: translateX(9px) rotate(2deg);}
  75% {transform: translateX(-6px) rotate(-1deg);}
}`;

  const cssCode10 = `.float{
  transition: .5s, color .10s;
  -webkit-transition: .5s, color .10s;
  -moz-transition: .5s, color .10s;
}
.float:hover{
  box-shadow: 0 8px 8px 0 #000000,0 8px 8px 0 #000000;
  transform: translate(0px,5px);
  -webkit-transform: translate(0px,5px);
  -moz-transform:translate(0px,5px);
}`;


  const cssCode11 = `.rotate-180{
  transition: .5s, color .10s;
      -webkit-transition: .5s, color .10s;
      -moz-transition: .5s, color .10s;
}
.rotate-180:hover{
  transform: rotateZ(180deg);
      -webkit-transform: rotateZ(180deg);
      -moz-transform: rotateZ(180deg);
}`;

  const cssCode12 = `
              
  .rotate-360{
      transition: .5s, color .10s;
          -webkit-transition: .5s, color .10s;
          -moz-transition: .5s, color .10s;
  }
  .rotate-360:hover{
      transform: rotateZ(360deg);
          -webkit-transform: rotateZ(360deg);
          -moz-transform: rotateZ(360deg);
  }`;

  const cssCode13 = `
  .flex{
      transition: .5s, color .10s;
          -webkit-transition: .5s, color .10s;
          -moz-transition: .5s, color .10s;
  }
  .flex:hover{
      transform: matrix(3.0, .5, 0, 1.0, 1.0, 1.0);
          -webkit-transform: matrix(3.0, .5, 0, 1.0, 1.0, 1.0);
          -moz-transform: matrix(3.0, .5, 0, 1.0, 1.0, 1.0);
  }`;

  const cssCode14 = `.transLeft{
    transition: .5s, color .10s;
        -webkit-transition: .5s, color .10s;
        -moz-transition: .5s, color .10s;
}
.transLeft:hover{
    transform: translatex(-20px);
        -webkit-transform: translatex(-20px);
        -moz-transform: translatex(-20px);
}`;

  const cssCode15 = `.transUp{
    transition: .5s, color .10s;
        -webkit-transition: .5s, color .10s;
        -moz-transition: .5s, color .10s;
}
.transUp:hover{
    transform: translatey(-20px);
        -webkit-transform: translatey(-20px);
        -moz-transform: translatey(-20px);
}`;

  const cssCode16 = `.transDown{
  transition: .5s, color .10s;
      -webkit-transition: .5s, color .10s;
      -moz-transition: .5s, color .10s;    
}
.transDown:hover{
  transform: translatey(20px);
      -webkit-transform: translatey(20px);
      -moz-transform: translatey(20px);
}`;


  const cssCode17 = `.toStretch{
  transition: .5s, color .10s;
      -webkit-transition: .5s, color .10s;
      -moz-transition: .5s, color .10s;
}
.toStretch:hover{
  transform: scale(2, 0.5);
      -webkit-transform: scale(1.2, 0.5);
      -moz-transform: scale(1.2, 0.5);
}`;

  const cssCode18 = `.skew{
    transition: .5s, color .10s;
        -webkit-transition: .5s, color .10s;
        -moz-transition: .5s, color .10s;
}
.skew:hover{
    transform: skew(30deg, 20deg);
        -webkit-transform: skew(30deg, 20deg);
        -moz-transform: skew(30deg, 20deg);
}`;

  const cssCode19 = `.skewX{
  transition: .5s, color .10s;
      -webkit-transition: .5s, color .10s;
      -moz-transition: .5s, color .10s;
}
.skewX:hover{
  transform: skewX(30deg);
      -webkit-transform: skewX(30deg);
      -moz-transform: skewX(30deg);
}`;

  const cssCode20 = `.skewY{
  transition: .5s, color .10s;
      -webkit-transition: .5s, color .10s;
      -moz-transition: .5s, color .10s;
}
.skewY:hover{
  transform: skewY(1.07rad);
      -webkit-transform: skewY(15deg);
      -moz-transform: skewY(15deg);
}`;

  const cssCode21 = `
.float-fluid{
    transition: .5s, color .10s;
        -webkit-transition: .5s, color .10s;
        -moz-transition: .5s, color .10s;
}
.float-fluid:hover{
    transform: translate3d(12px, 50%, 3em);
        -webkit-transform: translate3d(12px, 50%, 3em);
        -moz-transform: translate3d(12px, 50%, 3em);
    box-shadow: 0 8px 8px 0 #000000,0 8px 8px 0 #000000;
}`;

  const cssCode22 = `.grow{
    transition: .5s, color .10s;
        -webkit-transition: .5s, color .10s;
        -moz-transition: .5s, color .10s;
}
.grow:hover{
    transform: scale3d(1.5, 1.5, 0.3);
        -webkit-transform: scale3d(1.5, 1.5, 0.3);
        -moz-transform: scale3d(1.5, 1.5, 0.3);
}`;

  const cssCode23 = `.flipUp-360{
    transition: .5s, color .10s;
        -webkit-transition: .5s, color .10s;
        -moz-transition: .5s, color .10s;
}
.flipUp-360:hover{
    transform: rotateX(360deg);
        -webkit-transform: rotateX(360deg);
        -moz-transform: rotateX(360deg);
}`;

  const cssCode24 = `.flipUp-180{
    transition: .5s, color .10s;
        -webkit-transition: .5s, color .10s;
        -moz-transition: .5s, color .10s;
}
.flipUp-180:hover{
    transform: rotateX(180deg);
        -webkit-transform: rotateX(180deg);
        -moz-transform: rotateX(180deg);
}`;

  const cssCode25 = `.flipSide-180{
    transition: .5s, color .10s;
        -webkit-transition: .5s, color .10s;
        -moz-transition: .5s, color .10s;
}
.flipSide-180:hover{
    transform: rotateY(180deg);
        -webkit-transform: rotateY(180deg);
        -moz-transform: rotateY(180deg);
}`;

  const cssCode26 = `.flipSide-360{
    transition: .5s, color .10s;
        -webkit-transition: .5s, color .10s;
        -moz-transition: .5s, color .10s;
}
.flipSide-360:hover{
    transform: rotateY(360deg);
        -webkit-transform: rotateY(360deg);
        -moz-transform: rotateY(360deg);
}`;

  const cssCode27 = `.shake:hover {
    animation: shake 1s infinite;
  }
  
  @keyframes shake {
    0%, 100% { transform: translate(1px, -2px) rotate(-1deg); }
    10%, 90% { transform: translate(-1px, -2px) rotate(-1deg); }
    20%, 80% { transform: translate(-3px, 0px) rotate(1deg); }
    30%, 70% { transform: translate(3px, 2px) rotate(0deg); }
    40%, 60% { transform: translate(1px, -1px) rotate(1deg); }
    50% { transform: translate(-1px, 2px) rotate(-1deg); }
  }`;

  const cssCode28 = `.bounceShakeX:hover {
  animation: bounce-shakeX 1s;
}

@keyframes bounce-shakeX {
  0%, 100% { transform: translateX(0); }
  12% { transform: translateX(50%); }
  24% { transform: translateX(-20%); }
  36% { transform: translateX(20%); }
  48% { transform: translateX(-10%); }
  60% { transform: translateX(10%); }
  72% { transform: translateX(-5%); }
  84% { transform: translateX(5%); }
  96% { transform: translateX(0); }
}
`;

  const cssCode29 = `.bounceShakeY:hover {
    animation: bounce-shakeY 1s;
  }
  
  @keyframes bounce-shakeY {
    0%, 100% { transform: translateY(0); }
    12% { transform: translateY(50%); }
    24% { transform: translateY(-20%); }
    36% { transform: translateY(20%); }
    48% { transform: translateY(-10%); }
    60% { transform: translateY(10%); }
    72% { transform: translateY(-5%); }
    84% { transform: translateY(5%); }
    96% { transform: translateY(0); }
  }
`;

  const cssCode30 = `.surprise:hover {
  animation: surprise 0.8s;
}

@keyframes surprise {
  0%, 100% { transform: rotate(0deg) scale(1); }
  10%, 30%, 50%, 70%, 90% { transform: rotate(7deg) scale(2); }
  20%, 40%, 60%, 80% { transform: rotate(-7deg) scale(2); }
}
`;

  const cssCode31 = `.jello:hover {
  animation: jello 1s;
  transform-origin: center;
}

@keyframes jello {
  from, 11.1%, to { transform: translate3d(0, 0, 0); }
  22.2% { transform: skew(-12.5deg, -12.5deg); }
  33.3% { transform: skew(6.25deg, 6.25deg); }
  44.4% { transform: skew(-3.125deg, -3.125deg); }
  55.5% { transform: skew(1.5625deg, 1.5625deg); }
  66.6% { transform: skew(-0.78125deg, -0.78125deg); }
  77.7% { transform: skew(0.390625deg, 0.390625deg); }
  88.8% { transform: skew(-0.1953125deg, -0.1953125deg); }
}
`;


  const cssCode32 = `.swing:hover {
  animation: swing 1s;
}

@keyframes swing {
  20% { transform: rotate3d(0, 0, 1, 15deg); }
  40% { transform: rotate3d(0, 0, 1, -10deg); }
  60% { transform: rotate3d(0, 0, 1, 5deg); }
  80% { transform: rotate3d(0, 0, 1, -5deg); }
  to { transform: rotate3d(0, 0, 1, 0deg); }
}`;


  const animations = [
    { title: "Float", code: cssCode10, animationClass: "float" },
    { title: "Rotate-180", code: cssCode11, animationClass: "rotate-3608" },
    { title: "Rotate-360", code: cssCode12, animationClass: "rotate-360" },
    { title: "Flex", code: cssCode13, animationClass: "flex01" },
    { title: "transLeft", code: cssCode14, animationClass: "transLeft" },
    { title: "transRight", code: cssCode15, animationClass: "transRight" },
    { title: "transUp", code: cssCode16, animationClass: "transUp" },
    { title: "transDown", code: cssCode17, animationClass: "transDown" },
    { title: "toStretch", code: cssCode18, animationClass: "toStretch" },
    { title: "Skew", code: cssCode19, animationClass: "skew" },
    { title: "SkewX", code: cssCode20, animationClass: "skewX" },
    { title: "SkewY", code: cssCode21, animationClass: "skewY" },
    { title: "Float-fluid", code: cssCode22, animationClass: "float-fluid" },
    { title: "Grow", code: cssCode23, animationClass: "grow" },
    { title: "FlipUp-360", code: cssCode24, animationClass: "flipUp-360" },
    { title: "FlipUp-180", code: cssCode25, animationClass: "flipUp-180" },
    { title: "FlipSide-180", code: cssCode26, animationClass: "flipSide-180" },
    { title: "FlipSide-360", code: cssCode27, animationClass: "flipSide-360" },
    { title: "Shake", code: cssCode28, animationClass: "shake2" },
    { title: "BounceShakeX", code: cssCode29, animationClass: "bounceShakeX" },
    { title: "BounceShakeY", code: cssCode30, animationClass: "bounceShakeY" },
  ];

  const toolAnimations = [
    { name: "Vibrate", code: cssCode },
    { name: "Shake", code: cssCode2 },
    { name: "Pulse", code: cssCode3 },
    { name: "Bounce", code: cssCode4 },
    { name: "Heartbeat", code: cssCode5 },
    { name: "Slide", code: cssCode6 },
    { name: "Flicker", code: cssCode7 },
    { name: "Rotate", code: cssCode8 },
    { name: "Wobble", code: cssCode9 },
  ];


  const toolsContent = (
    <>
      <div>
        {toolAnimations.map((toolAnimation, index) => (
          <section key={index} className="flex justify-center news-item general-font p-4 tool-section">
            <div className="tool-section w-full">
              <h1 className="text-center text-2xl font-bold mr-4">{toolAnimation.name}</h1>
              <pre>
                <CodeBlock code={toolAnimation.code} />
              </pre>
              <picture>
                <img
                  src="https://storage.googleapis.com/portafilo/Let's%20work%20together!%20yellow.png"
                  alt={`example image for ${toolAnimation.name}`}
                  className={`img01 ${toolAnimation.name.toLowerCase()} rounded-full`}
                />
              </picture>
            </div>
          </section>
        ))}
      </div>
    </>
  );

  const postsContent = (
    <section>
      {animations.map(({ title, code, animationClass }, index) => (
        <section key={index} className="flex justify-center news-item general-font p-4 tool-section ">
          <div className="tool-section w-full">
            <h1 className="text-center text-2xl font-bold mr-4">{title}</h1>
            <pre>
              <CodeBlock code={code} />
            </pre>
            <button className={`px-20 py-10 rounded-full ${animationClass} bg-[#a52a2a]`}>
              <p className='text-xl text-bold font-kalnia text-white'>{title}</p>
            </button>
          </div>
        </section>
      ))}
    </section>
  );

  const tabs = [
    { title: 'Loops', content: toolsContent },
    { title: 'Hover', content: postsContent },
  ];



  return (
    <Fragment>
      <Header />
      <main className="blog-bg general-font">
        <Tabs tabs={tabs} />

        {/* Nueva sección */}
        <section className="bg-gray-50 py-12 mt-5 mb-5">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Explora más herramientas útiles</h2>
            <div className="mt-6 grid grid-cols-1 gap-y-8 md:grid-cols-3 md:gap-x-6">

              <article className="rounded-lg border border-gray-300 bg-white p-6 shadow-md">
                <h3 className="text-lg font-semibold text-gray-800">Reflexiones y Creaciones en "El Escritorio"</h3>
                <p className="mt-2 text-gray-600">
                  Visita mi espacio personal, donde comparto reflexiones, investigaciones, teorías y novedades.
                </p>
                <a
                  href="/blog"
                  className="mt-4 inline-block rounded bg-orange-600 px-4 py-2 text-white hover:bg-orange-700"
                  aria-label="Leer sobre reflexiones y creaciones en el blog"
                >
                  Leer Ahora
                </a>
              </article>

              <article className="rounded-lg border border-gray-300 bg-white p-6 shadow-md">
                <h3 className="text-lg font-semibold text-gray-800">Generador de Voz con IA</h3>
                <p className="mt-2 text-gray-600">
                  Convierte texto en audio de alta calidad con nuestro generador de voz impulsado por inteligencia artificial.
                </p>
                <a
                  href="/voz-de-inteligencia-artificial"
                  className="mt-4 inline-block rounded bg-orange-600 px-4 py-2 text-white hover:bg-orange-700"
                  aria-label="Probar el generador de voz con inteligencia artificial"
                >
                  Probar Generador
                </a>
              </article>

              <article className="rounded-lg border border-gray-300 bg-white p-6 shadow-md">
                <h3 className="text-lg font-semibold text-gray-800">Calculadora de Interés Compuesto</h3>
                <p className="mt-2 text-gray-600">
                  Utiliza nuestra calculadora de interés compuesto para planificar tu futuro financiero y maximizar tus ahorros.
                </p>
                <a
                  href="/calculadora-de-interes-compuesto-online"
                  className="mt-4 inline-block rounded bg-orange-600 px-4 py-2 text-white hover:bg-orange-700"
                  aria-label="Calcular interés compuesto online"
                >
                  Calcular Ahora
                </a>
              </article>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </Fragment>
  );
}
