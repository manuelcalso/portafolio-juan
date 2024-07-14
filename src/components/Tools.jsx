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


  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };



  const toolsContent = (
    <>

      <div>

        <section className="flex justify-center news-item general-font p-4 tool-section ">
          <div className="tool-section w-full">
            <h1 className="text-center text-2xl font-bold mr-4">Vibrate</h1>
            <pre>
              <CodeBlock code={cssCode} />
            </pre>
            <picture>
              <img
                src="https://storage.googleapis.com/portafilo/Let's%20work%20together!%20yellow.png"
                alt="example image"
                className="img01 vibrate-1 rounded-full"
              />
            </picture>
          </div>
        </section>
        <section className="flex justify-center news-item general-font tool-section ">
          <div className="tool-section w-full">
            <h1 className="text-center text-2xl font-bold mr-4">Shake</h1>
            <pre>
              <CodeBlock code={cssCode2} />
            </pre>
            <picture>
              <img
                src="https://storage.googleapis.com/portafilo/Let's%20work%20together!%20yellow.png"
                alt="example image"
                className="img01 shake rounded-full"
              />
            </picture>
          </div>
        </section>
        <section className="flex justify-center news-item general-font p-4 tool-section ">
          <div className="tool-section w-full ">
            <h1 className="text-center text-2xl font-bold mr-4">Pulse</h1>
            <pre>
              <CodeBlock code={cssCode3} />
            </pre>
            <picture>
              <img
                src="https://storage.googleapis.com/portafilo/Let's%20work%20together!%20yellow.png"
                alt="example image"
                className="img01 pulse rounded-full"
              />
            </picture>
          </div>
        </section>
        <section className="flex justify-center news-item general-font p-4 tool-section ">
          <div className="tool-section w-full">
            <h1 className="text-center text-2xl font-bold mr-4">Bounce</h1>
            <pre>
              <CodeBlock code={cssCode4} />
            </pre>
            <picture>
              <img
                src="https://storage.googleapis.com/portafilo/Let's%20work%20together!%20yellow.png"
                alt="example image"
                className="img01 bounce rounded-full"
              />
            </picture>
          </div>
        </section>
        <section className="flex justify-center news-item general-font p-4 tool-section ">
          <div className="tool-section w-full">
            <h1 className="text-center text-2xl font-bold mr-4">Heartbeat</h1>
            <pre>
              <CodeBlock code={cssCode5} />
            </pre>
            <picture>
              <img
                src="https://storage.googleapis.com/portafilo/Let's%20work%20together!%20yellow.png"
                alt="example image"
                className="img01 heartbeat rounded-full"
              />
            </picture>
          </div>
        </section>
        <section className="flex justify-center news-item general-font p-4 tool-section ">
          <div className="tool-section w-full">
            <h1 className="text-center text-2xl font-bold mr-4">Slide</h1>
            <pre>
              <CodeBlock code={cssCode6} />
            </pre>
            <picture>
              <img
                src="https://storage.googleapis.com/portafilo/Let's%20work%20together!%20yellow.png"
                alt="example image"
                className="img01 slide rounded-full"
              />
            </picture>
          </div>
        </section>
        <section className="flex justify-center news-item general-font p-4 tool-section ">
          <div className="tool-section w-full">
            <h1 className="text-center text-2xl font-bold mr-4">Flicker</h1>
            <pre>
              <CodeBlock code={cssCode7} />
            </pre>
            <picture>
              <img
                src="https://storage.googleapis.com/portafilo/Let's%20work%20together!%20yellow.png"
                alt="example image"
                className="img01 flicker rounded-full"
              />
            </picture>
          </div>
        </section>
        <section className="flex justify-center news-item general-font p-4 tool-section ">
          <div className="tool-section w-full">
            <h1 className="text-center text-2xl font-bold mr-4">Rotate</h1>
            <pre>
              <CodeBlock code={cssCode8} />
            </pre>
            <picture>
              <img
                src="https://storage.googleapis.com/portafilo/Let's%20work%20together!%20yellow.png"
                alt="example image"
                className="img01 rotate rounded-full"
              />
            </picture>
          </div>
        </section>
        <section className="flex justify-center news-item general-font p-4 tool-section ">
          <div className="tool-section w-full">
            <h1 className="text-center text-2xl font-bold mr-4">Wobble</h1>
            <pre>
              <CodeBlock code={cssCode9} />
            </pre>
            <picture>
              <img
                src="https://storage.googleapis.com/portafilo/Let's%20work%20together!%20yellow.png"
                alt="example image"
                className="img01 wobble rounded-full"
              />
            </picture>
          </div>
        </section>
      </div>
    </>
  );

  const postsContent = (
    <section>
      <section className="flex justify-center news-item general-font p-4 tool-section ">
        <div className="tool-section w-full">
          <h1 className="text-center text-2xl font-bold mr-4">Float</h1>
          <pre>
            <CodeBlock code={cssCode10} />
          </pre>
          <button className=' px-20 py-10 rounded-full float bg-[#a52a2a]'>
            <p className='text-xl text-bold font-kalnia text-white'>Float</p>
          </button>

        </div>
      </section>
      <section className="flex justify-center news-item general-font p-4 tool-section ">
        <div className="tool-section w-full">
          <h1 className="text-center text-2xl font-bold mr-4">Rotate-180</h1>
          <pre>
            <CodeBlock code={cssCode11} />
          </pre>
          <button className=' px-20 py-10 rounded-full rotate-3608 bg-[#a52a2a]'>
            <p className='text-xl text-bold font-kalnia text-white'>Rotate-180</p>
          </button>
        </div>
      </section>
      <section className="flex justify-center news-item general-font p-4 tool-section ">
        <div className="tool-section w-full">
          <h1 className="text-center text-2xl font-bold mr-4">Rotate-360</h1>
          <pre>
            <CodeBlock code={cssCode12} />
          </pre>
          <button className=' px-20 py-10 rounded-full rotate-360 bg-[#a52a2a]'>
            <p className='text-xl text-bold font-kalnia text-white'>Rotate-360</p>
          </button>
        </div>
      </section>
      <section className="flex justify-center news-item general-font p-4 tool-section ">
        <div className="tool-section w-full">
          <h1 className="text-center text-2xl font-bold mr-4">Flex</h1>
          <pre>
            <CodeBlock code={cssCode13} />
          </pre>
          <button className=' px-20 py-10 rounded-full flex01 bg-[#a52a2a]'>
            <p className='text-xl text-bold font-kalnia text-white'>Flex</p>
          </button>
        </div>
      </section>
      <section className="flex justify-center news-item general-font p-4 tool-section ">
        <div className="tool-section w-full">
          <h1 className="text-center text-2xl font-bold mr-4">transLeft</h1>
          <pre>
            <CodeBlock code={cssCode14} />
          </pre>
          <button className=' px-20 py-10 rounded-full transLeft bg-[#a52a2a]'>
            <p className='text-xl text-bold font-kalnia text-white'>transLeft</p>
          </button>
        </div>
      </section>
      <section className="flex justify-center news-item general-font p-4 tool-section ">
        <div className="tool-section w-full">
          <h1 className="text-center text-2xl font-bold mr-4">transRight</h1>
          <pre>
            <CodeBlock code={cssCode15} />
          </pre>
          <button className=' px-20 py-10 rounded-full transRight bg-[#a52a2a]'>
            <p className='text-xl text-bold font-kalnia text-white'>transRight</p>
          </button>
        </div>
      </section>
      <section className="flex justify-center news-item general-font p-4 tool-section ">
        <div className="tool-section w-full">
          <h1 className="text-center text-2xl font-bold mr-4">transUp</h1>
          <pre>
            <CodeBlock code={cssCode15} />
          </pre>
          <button className=' px-20 py-10 rounded-full transUp bg-[#a52a2a]'>
            <p className='text-xl text-bold font-kalnia text-white'>transUp</p>
          </button>
        </div>
      </section>
      <section className="flex justify-center news-item general-font p-4 tool-section ">
        <div className="tool-section w-full">
          <h1 className="text-center text-2xl font-bold mr-4">transDown</h1>
          <pre>
            <CodeBlock code={cssCode16} />
          </pre>
          <button className=' px-20 py-10 rounded-full transDown bg-[#a52a2a]'>
            <p className='text-xl text-bold font-kalnia text-white'>transDown</p>
          </button>
        </div>
      </section>
      <section className="flex justify-center news-item general-font p-4 tool-section ">
        <div className="tool-section w-full">
          <h1 className="text-center text-2xl font-bold mr-4">toStretch</h1>
          <pre>
            <CodeBlock code={cssCode17} />
          </pre>
          <button className=' px-20 py-10 rounded-full toStretch bg-[#a52a2a]'>
            <p className='text-xl text-bold font-kalnia text-white'>toStretch</p>
          </button>
        </div>
      </section>
      <section className="flex justify-center news-item general-font p-4 tool-section ">
        <div className="tool-section w-full">
          <h1 className="text-center text-2xl font-bold mr-4">Skew</h1>
          <pre>
            <CodeBlock code={cssCode18} />
          </pre>
          <button className=' px-20 py-10 rounded-full skew bg-[#a52a2a]'>
            <p className='text-xl text-bold font-kalnia text-white'>Skew</p>
          </button>
        </div>
      </section>
      <section className="flex justify-center news-item general-font p-4 tool-section ">
        <div className="tool-section w-full">
          <h1 className="text-center text-2xl font-bold mr-4">SkewX</h1>
          <pre>
            <CodeBlock code={cssCode19} />
          </pre>
          <button className=' px-20 py-10 rounded-full skewX bg-[#a52a2a]'>
            <p className='text-xl text-bold font-kalnia text-white'>SkewX</p>
          </button>
        </div>
      </section>
      <section className="flex justify-center news-item general-font p-4 tool-section ">
        <div className="tool-section w-full">
          <h1 className="text-center text-2xl font-bold mr-4">SkewY</h1>
          <pre>
            <CodeBlock code={cssCode20} />
          </pre>
          <button className=' px-20 py-10 rounded-full skewY bg-[#a52a2a]'>
            <p className='text-xl text-bold font-kalnia text-white'>SkewY</p>
          </button>
        </div>
      </section>
      <section className="flex justify-center news-item general-font p-4 tool-section ">
        <div className="tool-section w-full">
          <h1 className="text-center text-2xl font-bold mr-4">Float-fluid</h1>
          <pre>
            <CodeBlock code={cssCode21} />
          </pre>
          <button className=' px-20 py-10 rounded-full float-fluid bg-[#a52a2a]'>
            <p className='text-xl text-bold font-kalnia text-white'>Float-fluid</p>
          </button>
        </div>
      </section>
      <section className="flex justify-center news-item general-font p-4 tool-section ">
        <div className="tool-section w-full">
          <h1 className="text-center text-2xl font-bold mr-4">Grow</h1>
          <pre>
            <CodeBlock code={cssCode22} />
          </pre>
          <button className=' px-20 py-10 rounded-full grow bg-[#a52a2a]'>
            <p className='text-xl text-bold font-kalnia text-white'>Grow</p>
          </button>
        </div>
      </section>
      <section className="flex justify-center news-item general-font p-4 tool-section ">
        <div className="tool-section w-full">
          <h1 className="text-center text-2xl font-bold mr-4">FlipUp-360</h1>
          <pre>
            <CodeBlock code={cssCode23} />
          </pre>
          <button className=' px-20 py-10 rounded-full flipUp-360 bg-[#a52a2a]'>
            <p className='text-xl text-bold font-kalnia text-white'>FlipUp-360</p>
          </button>
        </div>
      </section>
      <section className="flex justify-center news-item general-font p-4 tool-section ">
        <div className="tool-section w-full">
          <h1 className="text-center text-2xl font-bold mr-4">FlipUp-180</h1>
          <pre>
            <CodeBlock code={cssCode24} />
          </pre>
          <button className=' px-20 py-10 rounded-full flipUp-180 bg-[#a52a2a]'>
            <p className='text-xl text-bold font-kalnia text-white'>FlipUp-180</p>
          </button>
        </div>
      </section>
      <section className="flex justify-center news-item general-font p-4 tool-section ">
        <div className="tool-section w-full">
          <h1 className="text-center text-2xl font-bold mr-4">FlipSide-180</h1>
          <pre>
            <CodeBlock code={cssCode25} />
          </pre>
          <button className=' px-20 py-10 rounded-full flipSide-180 bg-[#a52a2a]'>
            <p className='text-xl text-bold font-kalnia text-white'>FlipSide-180</p>
          </button>
        </div>
      </section>
      <section className="flex justify-center news-item general-font p-4 tool-section ">
        <div className="tool-section w-full">
          <h1 className="text-center text-2xl font-bold mr-4">FlipSide-360</h1>
          <pre>
            <CodeBlock code={cssCode26} />
          </pre>
          <button className=' px-20 py-10 rounded-full flipSide-360 bg-[#a52a2a]'>
            <p className='text-xl text-bold font-kalnia text-white'>FlipSide-360</p>
          </button>
        </div>
      </section>
      <section className="flex justify-center news-item general-font p-4 tool-section ">
        <div className="tool-section w-full">
          <h1 className="text-center text-2xl font-bold mr-4">Shake</h1>
          <pre>
            <CodeBlock code={cssCode27} />
          </pre>
          <button className=' px-20 py-10 rounded-full shake2 bg-[#a52a2a]'>
            <p className='text-xl text-bold font-kalnia text-white'>Shake</p>
          </button>
        </div>
      </section>
      <section className="flex justify-center news-item general-font p-4 tool-section ">
        <div className="tool-section w-full">
          <h1 className="text-center text-2xl font-bold mr-4">BounceShakeX</h1>
          <pre>
            <CodeBlock code={cssCode28} />
          </pre>
          <button className=' px-20 py-10 rounded-full bounceShakeX bg-[#a52a2a]'>
            <p className='text-xl text-bold font-kalnia text-white'>BounceShakeX</p>
          </button>
        </div>
      </section>
      <section className="flex justify-center news-item general-font p-4 tool-section ">
        <div className="tool-section w-full">
          <h1 className="text-center text-2xl font-bold mr-4">BounceShakeY</h1>
          <pre>
            <CodeBlock code={cssCode29} />
          </pre>
          <button className=' px-20 py-10 rounded-full bounceShakeY bg-[#a52a2a]'>
            <p className='text-xl text-bold font-kalnia text-white'>BounceShakeY</p>
          </button>
        </div>
      </section>
      <section className="flex justify-center news-item general-font p-4 tool-section ">
        <div className="tool-section w-full">
          <h1 className="text-center text-2xl font-bold mr-4">Surprise</h1>
          <pre>
            <CodeBlock code={cssCode30} />
          </pre>
          <button className=' px-20 py-10 rounded-full surprise bg-[#a52a2a]'>
            <p className='text-xl text-bold font-kalnia text-white'>Surprise</p>
          </button>
        </div>
      </section>
      <section className="flex justify-center news-item general-font p-4 tool-section ">
        <div className="tool-section w-full">
          <h1 className="text-center text-2xl font-bold mr-4">Jello</h1>
          <pre>
            <CodeBlock code={cssCode31} />
          </pre>
          <button className=' px-20 py-10 rounded-full jello bg-[#a52a2a]'>
            <p className='text-xl text-bold font-kalnia text-white'>Jello</p>
          </button>
        </div>
      </section>
      <section className="flex justify-center news-item general-font p-4 tool-section ">
        <div className="tool-section w-full">
          <h1 className="text-center text-2xl font-bold mr-4">Swing</h1>
          <pre>
            <CodeBlock code={cssCode32} />
          </pre>
          <button className=' px-20 py-10 rounded-full swing bg-[#a52a2a]'>
            <p className='text-xl text-bold font-kalnia text-white'>Swing</p>
          </button>
        </div>
      </section>
    </section>
  );

  const tabs = [
    { title: 'Loops', content: toolsContent },
    { title: 'Hover', content: postsContent },
  ];

  return (
    <Fragment>
      <Header />
      <section className="blog-bg general-font">
        
        <Tabs tabs={tabs} />
      </section>
      <Footer/>
    </Fragment>
  );
}
