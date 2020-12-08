import styled from "styled-components";

export const StyledBackArrowBlock = styled.div`
  display: flex;
  height: 2rem;
  position: relative;
  align-items: center;
  z-index: 1;

  button {
    outline-style: none;
    font-family: "Poppins";
    border: 0.8px solid grey;
    background-color: transparent;
    display: flex;
    align-items: center;
    border-radius: 3px;
    padding: 2px 6px;
    transition: 0.3s;
    cursor: pointer;

    &:hover {
      outline-style: none;
      color: #ffff;
      background-color: #4a4a4a;
      border: 0.8px solid #4a4a4a;
    }
  }
`;
