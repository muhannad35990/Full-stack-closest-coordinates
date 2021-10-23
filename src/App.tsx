import axios from "axios";
import React, { useState } from "react";
import Card from "./components/Card";
import styled from "styled-components";
import { WITHIN_ENDPOINT } from "./config/endpoints";
import GlobalStyle from "./components/GlobalStyle";
function App() {
  const [km, setKm] = useState("0");
  const [pointsWithin, setPointsWithin] = useState([]);
  const getPartnerswithin = (e: any) => {
    e.preventDefault();
    axios
      .get(`${WITHIN_ENDPOINT}/${km}`)
      .then((response: any) => {
        console.log(response.data.data.pointsWithin);

        setPointsWithin(response.data.data.pointsWithin);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <StyledApp>
      <GlobalStyle />
      <form method="get" onSubmit={getPartnerswithin}>
        <StyledInputContainer>
          <StyledInputSearch
            type="text"
            placeholder="Type distance in km"
            onChange={(e) => setKm(e.target.value)}
            value={km}
          />
          <StyledButton type="submit">Search</StyledButton>
        </StyledInputContainer>

        <CardsGrid>
          {pointsWithin.map((point: any) => (
            <Card
              organization={point.organization}
              customerLocations={point.customerLocations}
              services={point.services}
              willWorkRemotely={point.willWorkRemotely}
              offices={point.offices}
            />
          ))}
        </CardsGrid>
      </form>
    </StyledApp>
  );
}
const StyledInputContainer = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;
`;
const StyledButton = styled.button`
  padding: 1.05rem 2rem;
  outline: none;
  border: none;
  background-color: #2998ff;
  color: white;
  border-radius: 0 10rem 10rem 0;
  &:hover {
    cursor: pointer;
  }
`;
const StyledInputSearch = styled.input`
  border: 1px solid #2998ff;
  outline: none;
  justify-self: center;
  padding: 1rem 2rem;
  width: 30vw;
  transition: all 0.2s;
  border-radius: 10rem 0 0 10rem;
  &:focus {
    border: 1px solid #2998ff;
    width: 32vw;
  }
`;
const StyledApp = styled.div`
  padding: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const CardsGrid = styled.div`
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  overflow: hidden;
`;
export default App;
