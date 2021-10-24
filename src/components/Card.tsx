import React from "react";
import styled from "styled-components";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SettingsRemoteIcon from "@mui/icons-material/SettingsRemote";

interface Office {
  location: string;
  address: string;
  distance: number;
}
interface ICard {
  organization: string;
  customerLocations: string;
  services: string;
  willWorkRemotely: Boolean;
  offices: Office[];
}

const Card: React.FC<ICard> = ({
  organization,
  customerLocations,
  services,
  willWorkRemotely,
  offices,
}) => {
  const RotatecardSideFront = styled.div`
    position: relative;
    min-width: 25rem;
    min-height: 35rem;
    max-width: 25rem;
    max-height: 35rem;
    text-align: center;
    background-color: #fff;
    box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.2);
    border-radius: 3px;
    margin: 0 2.5rem;
    color: #777;
    transition: all 0.8s ease;
    backface-visibility: hidden;
    border-radius: 3rem 3rem 0 0;
    h4 {
      position: absolute;
      top: 4rem;
      right: 2rem;
      max-width: ${organization.length < 18 ? "60%" : "90%"};
      text-align: right;
      line-height: 2.5rem;

      span {
        margin: 0;
        font-size: 2rem;
        font-weight: 500;
        text-transform: uppercase;
        max-width: 55%;
        color: white;
        padding: 0.5rem;
        box-shadow: 0 1.5rem 4rem rgba(16, 13, 180, 0.2);
        background-image: linear-gradient(to right bottom, #5643fa, #2998ff);
        box-decoration-break: clone;
      }
    }
  `;
  const StyledP = styled.p`
    padding: 1rem;
    font-size: 0.9rem;
    text-align: left;
  `;
  const StyledItemWithIcon = styled.h5`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    margin: 0 1rem;

    span {
      text-transform: uppercase;
      margin-left: 0.5rem;
    }
  `;
  const CardHeader = styled.div`
    text-align: right;
    margin: 0;
    padding: 0;
    margin-bottom: 5rem;
    height: 10rem;
    width: 100%;
    clip-path: polygon(0 0, 100% 0, 100% 90%, 0 100%);
    background-image: linear-gradient(to right bottom, #2998ff, #5643fa);

    border-radius: 3rem 3rem 0 0;
  `;

  const RotatecardSideBack = styled(RotatecardSideFront)`
    transform: rotateY(-180deg);
    color: white;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    background-color: white;
  `;
  const CardContainer = styled.div`
    perspective: 150rem;
    margin-bottom: 4rem;

    &:hover {
      ${RotatecardSideFront} {
        transform: rotateY(180deg);
      }
      ${RotatecardSideBack} {
        transform: rotateY(0);
      }
    }
  `;
  const OfficeCards = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    color: white;
    padding: 0;

    div {
      position: relative;
      width: 100%;
      font-size: 1rem;
      padding: 1rem 0;
      box-shadow: 0 1.5rem 4rem rgba(16, 13, 180, 0.2);

      margin: 0.5rem 0;
      color: #777;
      &:first-child {
        border-radius: 3rem 3rem 0 0;
        margin: 0;
      }
      h5 {
        padding: 0.5rem 1rem;
      }
      h4 {
        text-align: center;
        margin: 0;
        width: 30%;
        color: #eee;
        background-image: linear-gradient(to right bottom, #ff7730, #ffb900);
        font-weight: 700;
        position: absolute;
        left: 50%;
        top: 0;
        transform: translate(-50%, 0);
        font-size: 0.8rem;
        border-radius: 0 0 1rem 1rem;
      }
    }
  `;
  const RoundedButton = styled.button`
    border: none;
    outline: none;
    background-color: #ffb900;
    color: white;
    padding: 1rem 4rem;
    border-radius: 4rem;
    font-weight: 500;
    transition: all 0.2s;
    &:hover {
      cursor: pointer;
      background-color: white;
      color: #ffb900;
      border: 1px solid #ffb900;
    }
  `;
  return (
    <CardContainer>
      <RotatecardSideFront>
        <CardHeader></CardHeader>
        <h4>
          <span>{organization}</span>
        </h4>
        <div style={{ padding: "0 1rem" }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <StyledItemWithIcon>
              <LocationOnIcon style={{ color: "#ffb900" }} />
              <span>{customerLocations}</span>
            </StyledItemWithIcon>
            <StyledItemWithIcon>
              <SettingsRemoteIcon style={{ color: "#ffb900" }} />
              <h5>{willWorkRemotely ? "YES" : "NO"}</h5>
            </StyledItemWithIcon>
          </div>

          <StyledP>{services}</StyledP>
        </div>
      </RotatecardSideFront>
      <RotatecardSideBack>
        <OfficeCards>
          {offices.map((office) => (
            <div>
              <h4>{office.distance.toFixed(2)} KM</h4>
              <h5>{office.address}</h5>
            </div>
          ))}
        </OfficeCards>
        <div
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <RoundedButton>MORE</RoundedButton>
        </div>
      </RotatecardSideBack>
    </CardContainer>
  );
};

export default Card;
