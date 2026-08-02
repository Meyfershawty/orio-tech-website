"use client";

import Particles from "@tsparticles/react";

export default function StarsBackground() {
  return (
    <Particles
      id="stars"
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
        detectRetina: true,
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
      }}
    />
  );
}