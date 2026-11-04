import { useEffect, useState } from "react";
import { eventBus } from "../services/eventBus";

function ComponenteReceptor() {
  const [ultimaMensagem, setUltimaMensagem] =
    useState("(nenhuma ainda)");

  useEffect(() => {
    eventBus.subscribe(
      "mensagem",
      (mensagem) => {
        setUltimaMensagem(mensagem);
      }
    );
  }, []);

  return (
    <p>
      Última mensagem: {ultimaMensagem}
    </p>
  );
}

export default ComponenteReceptor;