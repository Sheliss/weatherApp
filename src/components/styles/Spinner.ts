import styled, { keyframes } from "styled-components";

export const SpinnerContainer = styled.div`
  position: absolute;
  text-align: center;
  visibility: visible;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
`;

const spinAnimation = keyframes`
  0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
`;

export const SpinnerStyled = styled.div`
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
