import styled from "styled-components";

export const InfoCard = styled.div`
  background-color: ${({ theme }) => theme.colors.darkGray};
  padding: 15px;
  border-radius: 5px;
`;
export const CardText = styled.p`
  color: #fff;
  text-align: start;
  &:first-child {
    padding-bottom: 2px;
  }
`;
