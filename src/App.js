import "./App.css";
import TodoAdd from "./components/TodoAdd";
import TodosList from "./components/TodosList";

import { Container, CssBaseline } from "@material-ui/core";
function App() {
  return (
    <Container maxWidth="xs">
      <CssBaseline />
      <TodoAdd />
      <TodosList />
    </Container>
  );
}
export default App;
