"use client";

import { useEffect, useState } from "react";
import CustomCursor from "@/components/CustomCursor";

export default function CustomCursorWrapper() {
  const [showCursor, setShowCursor] = useState(false);

  useEffect(() => {
    const checkPointer = () => {
      // केवल mouse devices के लिए enable करें
      const isMouseDevice = window.matchMedia("(pointer: fine)").matches;
      setShowCursor(isMouseDevice);
    };

    checkPointer();
    window.addEventListener("resize", checkPointer);
    return () => window.removeEventListener("resize", checkPointer);
  }, []);

  return showCursor ? <CustomCursor /> : null;
}
