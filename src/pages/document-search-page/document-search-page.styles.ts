import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
  text-decoration: none;
  list-style-type: none;
  color: #4a4a4a;
  transition: 0.3s;

  &:hover {
    color: orange;
  }
`;
