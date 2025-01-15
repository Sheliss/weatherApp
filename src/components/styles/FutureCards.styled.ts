import styled from "styled-components";

export const FutureListStyled = styled.ul`
  display: flex;
  list-style: none;
`;

export const FutureItem = styled.li`
  padding-right: 5px;
  width: 65px;
  height: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-right: 2px solid ${({ theme }) => theme.colors.lightGray};
  margin-right: 5px;

  &:last-child {
    padding: 0;
    margin: 0;
    border: 0;
  }
`;

export const FutureTitle = styled.p`
  font-size: 0.9rem;
  font-weight: 700;
`;

export const FutureSubtitle = styled.p`
  font-size: 0.8rem;
  padding-bottom: 5px;
`;

export const FutureTemp = styled.p`
  font-weight: 700;
`;

export const FutureImgContainer = styled.div`
  width: 50px;
  height: 50px;
`;

export const FutureImg = styled.img`
  width: 100%;
  height: 100%;
`;
