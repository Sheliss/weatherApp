import styled, { keyframes } from "styled-components";

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

export const InfoCard = styled.div`
  background-color: ${({ theme }) => theme.colors.darkGray};
  padding: 15px;
  border-radius: 5px;
  -webkit-animation: ${inAnimation} 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    both;
  animation: ${inAnimation} 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
`;
export const CardText = styled.p`
  color: #fff;
  text-align: start;
  &:first-child {
    padding-bottom: 2px;
  }
`;
