import { eventBus } from "../services/eventBus";

function ComponenteEmissor() {
  return (
    <button
      onClick={() =>
        eventBus.emit(
          "mensagem",
          "Olá do emissor!"
        )
      }
    >
      Enviar mensagem
    </button>
  );
}

export default ComponenteEmissor;