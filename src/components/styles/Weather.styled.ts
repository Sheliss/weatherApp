import styled from "styled-components";

export const WeatherContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.darkGray};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const WeatherInnerStyled = styled.div`
  background-color: #fff;
  padding: 20px;
  width: 300px;
  border-radius: 5px;
`;

export const WeatherMainContainer = styled.div`
  text-align: center;
`;

export const CityName = styled.h1`
  font-size: 50px;
  padding-top: 10px;
  text-transform: capitalize;
`;
export const Description = styled.p`
  text-transform: capitalize;
`;
export const ImageContainer = styled.div`
  width: 100px;
  margin: 0 auto;
`;
export const Image = styled.img`
  width: 100%;
`;
export const Temperature = styled.p`
  padding-bottom: 15px;
  font-size: 30px;
  font-weight: 700;
`;
export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 10px;
`;
