import styled, { keyframes } from "styled-components";

type Props = {
  visible: string;
};

const inAnimation = keyframes`
0% {
    -webkit-transform: translateZ(-1400px);
            transform: translateZ(-1400px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateZ(0);
            transform: translateZ(0);
    opacity: 1;
  }
`;

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

export const WeatherInfoContainer = styled.div`
  position: relative;
`;

export const WeatherMainContainer = styled.div<Props>`
  visibility: ${(props) => props.visible};
  text-align: center;
`;

export const CityName = styled.h1`
  font-size: 50px;
  padding-top: 10px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  -webkit-animation: ${inAnimation} 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    both;
  animation: ${inAnimation} 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
`;
export const Description = styled.p`
  text-transform: capitalize;
  -webkit-animation: ${inAnimation} 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    both;
  animation: ${inAnimation} 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
`;
export const ImageContainer = styled.div`
  width: 100px;
  height: 100px;
  margin: 0 auto;
  -webkit-animation: ${inAnimation} 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    both;
  animation: ${inAnimation} 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
`;
export const Image = styled.img`
  width: 100%;
`;
export const Temperature = styled.p`
  padding-bottom: 15px;
  font-size: 30px;
  font-weight: 700;
  -webkit-animation: ${inAnimation} 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    both;
  animation: ${inAnimation} 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
`;
export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 10px;
`;
