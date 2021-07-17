import styled from "styled-components";
import "./App.css";
import TodoAdd from "./components/TodoAdd";
import TodosList from "./components/TodosList";

const Container = styled.div`
  width: 90%;
  height: 100%;
  margin: auto;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: goldenrod;
`;
function App() {
  return (
    <Container>
      <h1>ToDo App with ReduxToolKit</h1>
      <TodoAdd />
      <TodosList />
    </Container>
  );
}

export default App;
