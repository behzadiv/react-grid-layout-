import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import "./App.css";
import Grid from "./components/DroppableElement";
function App() {
  return (
      <div className="App">
        <Grid />
      </div>
  );
}

export default App;
