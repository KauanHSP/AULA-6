export function criarEventBus() {
  const ouvintes = {};

  return {
    subscribe(evento, callback) {
      if (!ouvintes[evento]) {
        ouvintes[evento] = [];
      }

      ouvintes[evento].push(callback);
    },

    emit(evento, dado) {
      (ouvintes[evento] || []).forEach((callback) =>
        callback(dado)
      );
    },
  };
}

export const eventBus = criarEventBus();