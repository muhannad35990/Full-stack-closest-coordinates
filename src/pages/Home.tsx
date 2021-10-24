import React, { useState } from "react";
import axios from "axios";
import Card from "../components/Card";
import styled from "styled-components";
import { WITHIN_ENDPOINT } from "../config/endpoints";
const Home = () => {
  const [km, setKm] = useState("");
  const [pointsWithin, setPointsWithin] = useState([]);
  const [error, setError] = useState(false);
  const getPartnerswithin = (e: any) => {
    e.preventDefault();
    if (parseInt(km) && parseInt(km) > 0) {
      setError(false);
      axios
        .get(`${WITHIN_ENDPOINT}/${km}`)
        .then((response: any) => {
          setPointsWithin(response.data.data.pointsWithin);
        })
        .catch((err) => {
          console.log(err);
        });
    } else setError(true);
  };
  return (
    <form method="get" onSubmit={getPartnerswithin}>
      <StyledInputContainer>
        <StyledInputSearch
          type="text"
          placeholder="Search by distance in km"
          onChange={(e) => setKm(e.target.value)}
          value={km}
          id="SearchInput"
        />
        <StyledButton type="submit" id="searchBtn">
          Search
        </StyledButton>
      </StyledInputContainer>
      {error && (
        <div
          style={{
            backgroundColor: "#FFEBE9",
            border: "1px solid #FFC1C0",
            marginTop: "1rem",
          }}
        >
          <div
            style={{
              color: "#f00",
              padding: "1rem 0",
              textAlign: "center",
            }}
          >
            Make sure to input only numbers
          </div>
        </div>
      )}
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
  );
};
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
const CardsGrid = styled.div`
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  overflow: hidden;
`;
export default Home;
