import "./App.css";
import TodoAdd from "./components/TodoAdd";
import TodosList from "./components/TodosList";

function App() {
  return (
    <div>
      <h1>ToDo App with ReduxToolKit</h1>
      <TodoAdd />
      <TodosList />
    </div>
  );
}

export default App;
