import styled from "styled-components";

export const SearchRow = styled.div`
  display: flex;
  background: ${({ theme }) => theme.colors.lightGray};
  padding: 10px;
  border-radius: 500px;
  align-items: center;
`;
export const SearchButton = styled.button`
  background-color: transparent;
  border: 0;
  cursor: pointer;
  width: 25px;
  height: 25px;
  margin: 0 5px;

  svg {
    width: 25px;
    height: 25px;

    path {
      color: ${({ theme }) => theme.colors.orange};
    }
  }
`;
export const SearchInput = styled.input`
  width: 100%;
  font-size: 16px;
  border: 0;
  outline: 0;
  padding: 5px;
  background-color: transparent;
`;
