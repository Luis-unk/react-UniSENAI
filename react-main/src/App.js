import "./App.css";
import { Card } from "./components/Card";
import { Dracula } from "./components/Dracula";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Routers } from "react-router-dom";

const Container = styled.div`
  display: flex;
`;

function App() {
  return (
    <Container>
      <Card
        title="teste1"
        content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      />
      <Dracula />
    </Container>
  );
}

export default App;
