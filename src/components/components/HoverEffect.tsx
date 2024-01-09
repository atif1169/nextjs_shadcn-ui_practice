"use client";
import React, { useEffect, useState } from "react";

function HoverEffect() {
  const [isClicking, setIsClicking] = useState(false);

  // check if it is a touch device
  const isTouchDevice = () => {
    try {
      document.createEvent("TouchEvent");
      return true;
    } catch (e) {
      return false;
    }
  };

  const move = (e: any) => {
    const touchEvent = e.touches ? e.touches[0] : null;
    const x = !isTouchDevice() ? e.clientX : touchEvent?.clientX || 0;
    const y = !isTouchDevice() ? e.clientY : touchEvent?.clientY || 0;

    // Set the cursor border's position directly
    const cursorBorder = document.getElementById("cursor-border");
    if (cursorBorder) {
      cursorBorder.style.left = `${x}px`;
      cursorBorder.style.top = `${y}px`;
    }
  };

  useEffect(() => {
    document.addEventListener("mousemove", move);
    document.addEventListener("touchmove", move);
    document.addEventListener("mousedown", () => setIsClicking(true));
    document.addEventListener("mouseup", () => setIsClicking(false));

    return () => {
      document.removeEventListener("mousemove", move);
      document.removeEventListener("touchmove", move);
      document.removeEventListener("mousedown", () => setIsClicking(true));
      document.removeEventListener("mouseup", () => setIsClicking(false));
    };
  }, []);

  return (
    <>
      <div
        id="cursor"
        className={`absolute ${isClicking ? "bg-crimson" : "bg-crimson"}`}
        style={{
          height: "10px",
          width: "10px",
          borderRadius: "50%",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
          transition: "background-color 0.2s ease",
        }}
      ></div>
      <div
        id="cursor-border"
        className={`absolute bg-purple-300/30 blur-2xl`}
        style={{
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
          transition: "all 0.05s ease-out",
        }}
      ></div>
    </>
  );
}

export default HoverEffect;
