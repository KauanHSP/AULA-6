import { useEffect, useState } from "react";

export default function ExemploUseEffect() {
  const [horaCarregamento, setHoraCarregamento] = useState("");
  const [contador, setContador] = useState(0);

  useEffect(() => {
    console.log("Efeito executado!");

    setHoraCarregamento(new Date().toLocaleTimeString());

  }, []);

  return (
    <div>
      <h2>Exemplo de useEffect</h2>

      <p>Hora carregada: {horaCarregamento}</p>

      <p>Contador de renderizações: {contador}</p>

      <button onClick={() => setContador(contador + 1)}>
        teste de renderização por um evento
      </button>
    </div>
  );
}