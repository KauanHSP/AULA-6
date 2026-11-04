import { useEffect, useState } from "react";

function Usuario({ nome }) {
  useEffect(() => {

    console.log("Prop 'nome' mudou para:", nome);
    
  }, [nome]);

  return <h2>Usuário: {nome}</h2>;
}

export default function App() {
  const [nome, setNome] = useState("Ana");

  return (
    <div>
      <Usuario nome={nome} />

      <button onClick={() => setNome("Bruno")}>
        Alterar para Bruno
      </button>

      <button onClick={() => setNome("Carlos")}>
        Alterar para Carlos
      </button>
    </div>
  );
}