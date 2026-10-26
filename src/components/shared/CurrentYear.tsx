"use client";

import { useEffect, useState } from "react";

// Ano do build no HTML estático; atualizado no navegador para o ano corrente
export default function CurrentYear() {
  const [year, setYear] = useState(() => new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return <>{year}</>;
}
