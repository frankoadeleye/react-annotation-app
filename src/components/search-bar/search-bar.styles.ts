import styled from "styled-components";

export const SearchbarInput = styled.input`
  height: 4rem;
  width: 90%;
  border: 1px solid #c0c0c0;
  font-family: inherit;
  padding: 0px 10px;
  text-align: center;
  font-size: 16px;

  &:focus {
    outline-style: none;
    border: 1px solid #c0c0c0;
  }

  &:placeholder {
    text-align: center;
  }

  @media (min-width: 768px) {
    width: 60%;
  }

  @media (min-width: 1330px) {
    width: 50%;
  }
`;
