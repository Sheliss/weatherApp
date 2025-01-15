import styled from "styled-components";

export const SearchRow = styled.div`
  display: flex;
  background: ${({ theme }) => theme.colors.lightGray};
  padding: 10px;
  margin-bottom: 30px;
  border-radius: 500px;
  align-items: center;
  position: relative;
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

export const ErrorMessage = styled.p`
  position: absolute;
  text-align: center;
  width: 300px;
  bottom: -25px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 0.9rem;
  color: red;
`;
