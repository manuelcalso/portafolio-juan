import { useRef, useEffect, useState } from "react";
import useCanvasResize from "./useCanvasResize";

const PARTICLES_DESKTOP = 2200;
const PARTICLES_MOBILE = 1100;
const MAX_PARTICLES = 8000;
const ADD_PER_EXPLOSION = 140;

const BASE_RADIUS = 90;
const BASE_EXPLOSION_RADIUS = 160;
const BASE_EXPLOSION_FORCE = 6;

const STORIES = [
  "La arena recuerda cada movimiento.",
  "Nada se pierde, todo cambia.",
  "Hoy el caos se volvió calma.",
  "Cada grano es un instante.",
  "Respira. Observa. Suelta."
];

export default function SandGame() {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const mouseRef = useRef({ x: 0, y: 0, active: false });
  const explodeRef = useRef(() => {});
  const resetRef = useRef(() => {});

  const [grainCount, setGrainCount] = useState(0);
  const [mode, setMode] = useState("relax"); // relax | chaos
  const [intensity, setIntensity] = useState("media"); // suave | media | fuerte
  const [density, setDensity] = useState("normal"); // baja | normal | alta
  const [colorMode, setColorMode] = useState("warm"); // warm | cool | random
  const [story] = useState(
    STORIES[Math.floor(Math.random() * STORIES.length)]
  );

  useCanvasResize(canvasRef);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d", { alpha: false });

    const isMobile = window.innerWidth < 768;
    const BASE_INITIAL =
      isMobile ? PARTICLES_MOBILE : PARTICLES_DESKTOP;

    const densityMultiplier =
      density === "baja" ? 0.6 : density === "alta" ? 1.4 : 1;

    const INITIAL_COUNT = Math.floor(
      BASE_INITIAL * densityMultiplier
    );

    const addParticles = (x, y, amount) => {
      const allowed = Math.min(
        amount,
        MAX_PARTICLES - particlesRef.current.length
      );
      if (allowed <= 0) return;

      for (let i = 0; i < allowed; i++) {
        const baseHue =
          colorMode === "warm"
            ? 30 + Math.random() * 60
            : colorMode === "cool"
            ? 180 + Math.random() * 80
            : Math.random() * 360;

        particlesRef.current.push({
          x,
          y,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          hue: baseHue,
        });
      }
      setGrainCount(particlesRef.current.length);
    };

    const resetSand = () => {
      particlesRef.current = [];
      setGrainCount(0);
      addParticles(
        canvas.width / 2,
        canvas.height / 2,
        INITIAL_COUNT
      );
    };

    resetRef.current = resetSand;
    resetSand();

    explodeRef.current = (x, y) => {
      const intensityFactor =
        intensity === "suave" ? 0.4 : intensity === "fuerte" ? 1.4 : 1;

      const radius =
        (mode === "relax"
          ? BASE_EXPLOSION_RADIUS * 0.6
          : BASE_EXPLOSION_RADIUS) * intensityFactor;

      const force =
        (mode === "relax"
          ? BASE_EXPLOSION_FORCE * 0.4
          : BASE_EXPLOSION_FORCE) * intensityFactor;

      for (let p of particlesRef.current) {
        const dx = p.x - x;
        const dy = p.y - y;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d > 0.01 && d < radius) {
          const f = (1 - d / radius) * force;
          p.vx += (dx / d) * f;
          p.vy += (dy / d) * f;
          if (colorMode === "random") {
            p.hue = Math.random() * 360;
          }
        }
      }

      if (mode === "chaos") {
        addParticles(x, y, ADD_PER_EXPLOSION);
      }
    };

    let rafId;
    const animate = () => {
      ctx.fillStyle =
        mode === "relax"
          ? "rgba(10,10,10,0.18)"
          : "rgba(12,12,12,0.28)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const friction =
        mode === "relax" ? 0.97 : 0.94;

      const radius =
        mode === "relax" ? BASE_RADIUS * 0.6 : BASE_RADIUS;

      const { x: mx, y: my, active } = mouseRef.current;

      for (let p of particlesRef.current) {
        if (active) {
          const dx = mx - p.x;
          const dy = my - p.y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d > 0.01 && d < radius) {
            const f = (1 - d / radius) * 1.2;
            p.vx -= (dx / d) * f;
            p.vy -= (dy / d) * f;
          }
        }

        p.vx *= friction;
        p.vy *= friction;
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x += canvas.width;
        if (p.x > canvas.width) p.x -= canvas.width;
        if (p.y < 0) p.y += canvas.height;
        if (p.y > canvas.height) p.y -= canvas.height;

        const speed = Math.abs(p.vx) + Math.abs(p.vy);
        p.hue = (p.hue + speed * 2) % 360;

        ctx.fillStyle = `hsl(${p.hue}, 70%, 65%)`;
        ctx.fillRect(p.x, p.y, 1.6, 1.6);
      }

      rafId = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(rafId);
  }, [mode, intensity, density, colorMode]);

  const generateVisual = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    ctx.save();
    ctx.fillStyle = "rgba(255,255,255,0.6)";
    ctx.font = "12px sans-serif";
    ctx.fillText("Created with mylittlezen", 12, canvas.height - 12);
    ctx.restore();

    const date = new Date().toISOString().split("T")[0];
    const name = `Sand-${date}-${mode}.png`;

    const url = canvas.toDataURL("image/png");
    const a = document.createElement("a");
    a.href = url;
    a.download = name;
    a.click();
  };

  return (
    <div className="relative h-full w-full">
      {/* UI */}
      <div className="absolute top-4 left-4 z-10 text-xs text-white space-y-2 max-w-xs">
        <div className="opacity-80">
          🌾 {grainCount.toLocaleString()} granos
        </div>

        <div className="italic opacity-70">“{story}”</div>

        <button
          onClick={() => setMode(mode === "relax" ? "chaos" : "relax")}
          className="px-3 py-1 rounded bg-white/10 hover:bg-white/20"
        >
          Modo: {mode === "relax" ? "Relax" : "Chaos"}
        </button>

        <div className="space-y-1">
          <select onChange={(e) => setIntensity(e.target.value)} className="w-full bg-black/40">
            <option value="suave">Intensidad: Suave</option>
            <option value="media" selected>Intensidad: Media</option>
            <option value="fuerte">Intensidad: Fuerte</option>
          </select>

          <select onChange={(e) => setDensity(e.target.value)} className="w-full bg-black/40">
            <option value="baja">Densidad: Baja</option>
            <option value="normal" selected>Densidad: Normal</option>
            <option value="alta">Densidad: Alta</option>
          </select>

          <select onChange={(e) => setColorMode(e.target.value)} className="w-full bg-black/40">
            <option value="warm">Color: Cálido</option>
            <option value="cool">Color: Frío</option>
            <option value="random">Color: Random</option>
          </select>
        </div>

        <button
          onClick={generateVisual}
          className="px-3 py-1 rounded bg-white/10 hover:bg-white/20"
        >
          Generar visual
        </button>
      </div>

      <button
        onClick={() => resetRef.current()}
        className="absolute bottom-4 right-4 z-10 px-3 py-1 text-sm rounded bg-white/10 hover:bg-white/20 text-white"
      >
        Reiniciar
      </button>

      <canvas
        ref={canvasRef}
        className="block h-full w-full touch-none select-none"
        onPointerDown={(e) => {
          mouseRef.current.active = true;
          mouseRef.current.x = e.clientX;
          mouseRef.current.y = e.clientY;
          explodeRef.current(e.clientX, e.clientY);
        }}
        onPointerUp={() => (mouseRef.current.active = false)}
        onPointerLeave={() => (mouseRef.current.active = false)}
        onPointerMove={(e) => {
          mouseRef.current.x = e.clientX;
          mouseRef.current.y = e.clientY;
        }}
      />
    </div>
  );
}
