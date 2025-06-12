import React, { useEffect } from "react";
import "./GlowingBackground.css";

export default function GlowingBackground() {
  useEffect(() => {
    const canvas = document.getElementById("stars");
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    import("./starfieldEngine").then(({ init }) => init(canvas, context));
  }, []);

  return <canvas id="stars" className="-z-50" width={window.innerWidth} height={window.innerHeight}></canvas>;
}
