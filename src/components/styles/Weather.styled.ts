import styled, { keyframes } from "styled-components";

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

export const SpinnerContainer = styled.div`
  text-align: center;
  padding: 50px 0;
`;

const spinAnimation = keyframes`
  0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
`;

export const Spinner = styled.div`
  width: 60px;
  height: 60px;
  border: 5px solid ${({ theme }) => theme.colors.lightGray};
  border-bottom-color: ${({ theme }) => theme.colors.orange};
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation-name: ${spinAnimation};
  animation-duration: 1s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
`;
