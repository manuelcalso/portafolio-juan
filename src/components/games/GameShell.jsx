import { useEffect } from "react";

export default function GameShell({ children, onExit }) {
  useEffect(() => {
    document.body.classList.add("overflow-hidden");
    return () => document.body.classList.remove("overflow-hidden");
  }, []);

  return (
    <div className="fixed inset-0 z-50 bg-neutral-950">
      <button
        onClick={onExit}
        className="absolute top-4 right-4 z-50
                   rounded-full bg-neutral-800
                   px-4 py-2 text-sm text-white
                   hover:bg-neutral-700"
      >
        ✕ Salir
      </button>

      {children}
    </div>
  );
}
