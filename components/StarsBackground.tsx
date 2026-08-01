"use client";

import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";

export default function StarsBackground() {
  const particlesInit = async (engine: Engine) => {
    await loadSlim(engine);
  };

  return (
    <Particles
      id="stars"
      init={particlesInit}
      className="absolute inset-0"
      options={{
        fullScreen: {
          enable: false,
        },
        background: {
          color: {
            value: "transparent",
          },
        },
        fpsLimit: 60,
        particles: {
          number: {
            value: 80,
          },
          color: {
            value: "#3b82f6",
          },
          links: {
            enable: true,
            color: "#3b82f6",
            distance: 150,
            opacity: 0.25,
          },
          move: {
            enable: true,
            speed: 1,
          },
          opacity: {
            value: 0.5,
          },
          size: {
            value: {
              min: 1,
              max: 3,
            },
          },
        },
        detectRetina: true,
      }}
    />
  );
}