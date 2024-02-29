import React, { useEffect, useState } from "react";

const Scroll = () => {
  const [mostrarEtiqueta, setMostrarEtiqueta] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const alturaMostrarEtiqueta = 200;

      if (window.scrollY > alturaMostrarEtiqueta) {
        setMostrarEtiqueta(true);
      } else {
        setMostrarEtiqueta(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return { mostrarEtiqueta };
};

export default Scroll;
