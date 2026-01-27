import { useRef, useEffect } from "react";
import useCanvasResize from "./useCanvasResize";

const PARTICLES_DESKTOP = 3500;
const PARTICLES_MOBILE = 1800;
const RADIUS = 90;
const FRICTION = 0.94;

export default function SandGame() {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const mouseRef = useRef({ x: 0, y: 0, active: false });

  useCanvasResize(canvasRef);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d", { alpha: false });

    const isMobile = window.innerWidth < 768;
    const PARTICLE_COUNT = isMobile
      ? PARTICLES_MOBILE
      : PARTICLES_DESKTOP;

    // Inicializar partículas
    particlesRef.current = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: 0,
      vy: 0,
    }));

    let rafId;

    const animate = () => {
      // Fondo con leve persistencia (efecto arena)
      ctx.fillStyle = "rgba(12,12,12,0.25)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const { x: mx, y: my, active } = mouseRef.current;

      for (let i = 0; i < particlesRef.current.length; i++) {
        const p = particlesRef.current[i];

        if (active) {
          const dx = mx - p.x;
          const dy = my - p.y;
          const d = Math.sqrt(dx * dx + dy * dy);

          // Evitar división por cero
          if (d > 0.01 && d < RADIUS) {
            const force = (1 - d / RADIUS) * 1.2;
            p.vx -= (dx / d) * force;
            p.vy -= (dy / d) * force;
          }
        }

        // Fricción
        p.vx *= FRICTION;
        p.vy *= FRICTION;

        p.x += p.vx;
        p.y += p.vy;

        // Reentrada suave en bordes
        if (p.x < 0) p.x += canvas.width;
        if (p.x > canvas.width) p.x -= canvas.width;
        if (p.y < 0) p.y += canvas.height;
        if (p.y > canvas.height) p.y -= canvas.height;

        ctx.fillStyle = "#fde68a"; // yellow-200
        ctx.fillRect(p.x, p.y, 1.2, 1.2);
      }

      rafId = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="block h-full w-full touch-none select-none"
      onPointerDown={() => (mouseRef.current.active = true)}
      onPointerUp={() => (mouseRef.current.active = false)}
      onPointerLeave={() => (mouseRef.current.active = false)}
      onPointerMove={e => {
        mouseRef.current.x = e.clientX;
        mouseRef.current.y = e.clientY;
      }}
    />
  );
}
