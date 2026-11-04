import ComponenteEmissor from "./components/ComponenteEmissor";
import ComponenteReceptor from "./components/ComponenteReceptor";

function App() {
  return (
    <div>
      <h1>Exemplo Observer / Pub-Sub</h1>

      <ComponenteEmissor />

      <ComponenteReceptor />
    </div>
  );
}

export default App;