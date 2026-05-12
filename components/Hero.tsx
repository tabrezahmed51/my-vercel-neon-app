"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Constellation animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
    }> = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = 600;
    };

    const init = () => {
      resize();
      particles = [];
      for (let i = 0; i < 50; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          size: Math.random() * 2 + 1,
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw particles and connections
      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;

        // Bounce off edges
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        // Draw particle
        ctx.fillStyle = "rgba(141, 179, 219, 0.8)";
        ctx.fillRect(p.x, p.y, p.size, p.size);

        // Draw connections
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 150) {
            ctx.strokeStyle = `rgba(141, 179, 219, ${0.3 * (1 - dist / 150)})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    init();
    draw();

    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden px-8 pt-20">
      {/* Background constellation animation */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ height: "600px" }}
      />

      {/* Atmospheric light effect */}
      <div className="absolute right-0 top-1/4 h-[400px] w-[400px] rounded-full bg-[#8DB3DB]/20 blur-[120px]" />
      <div className="absolute left-1/4 top-1/3 h-[300px] w-[300px] rounded-full bg-white/10 blur-[100px]" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Grok wordmark with atmospheric light */}
        <h1
          className="text-hero-display relative mb-8 text-white"
          style={{
            textShadow: "0 0 80px rgba(141, 179, 219, 0.5)",
          }}
        >
          Grok
        </h1>

        {/* Mission statement */}
        <div className="mb-12">
          <p className="text-headline-lg text-white/50">Understand</p>
          <p className="text-headline-lg text-white">The Universe</p>
        </div>

        {/* Search input */}
        <div className="relative w-full max-w-2xl">
          <textarea
            className="search-input min-h-[120px] resize-none"
            placeholder="What do you want to know?"
            rows={3}
          />
          <button className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#0A0A0A] transition-all duration-150 hover:bg-white/90">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 5V19M12 19L5 12M12 19L19 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="square"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
