import React from "react";
import styled from "styled-components";
import GlobalStyle from "./components/GlobalStyle";
import Home from "./pages/Home";
function App() {
  return (
    <StyledApp>
      <GlobalStyle />
      <Home />
    </StyledApp>
  );
}

const StyledApp = styled.div`
  padding: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default App;
