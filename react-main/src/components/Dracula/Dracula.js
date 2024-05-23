import React, { useState } from "react";
import styled from "styled-components";

const botoes = styled.div``;

export function Dracula() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Contador: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Aumentar 1</button>
      <button onClick={() => setCount(count - 1)}>Diminuir 1</button>
    </div>
  );
}
