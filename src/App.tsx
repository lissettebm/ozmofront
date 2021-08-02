import "./App.css";
import List from "./views/List";
import Detail from "./views/Detail";

function App() {
  return (
    <div className="container">
      <List />
      {/* TODO: Agregar router para navegar hasta el detalle del usuario */}
      {/* <Detail /> */}
    </div>
  );
}

export default App;
