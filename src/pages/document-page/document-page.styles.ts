import styled from "styled-components";
import { State } from "react-powerplug";

export const StyledState = styled(State)`
  width: auto;
`;

export const DocumentPageContainer = styled.div`
  display: flex;
  height: auto;
  flex-direction: column;
  width: 60%;
`;

export const DocumentPageBlock = styled.div`
  width: 90vw;
  display: flex;
  height: auto;
  flex-direction: column;
  position: relative;
  left: -10vw;

  @media (min-width: 768px) {
    width: 50vw;
    margin: auto;
    left: 0vw;
  }
`;

export const DocumentPageHeading = styled.div`
  width: 100%;
  padding: 5px 0px;
  font-size: 20px;
  line-height: 2rem;

  @media (min-width: 768px) {
    font-size: 50px;
  }
`;

export const BackWrapper = styled.div`
  position: absolute;
  top: 5px;
  left: 10px;

  &:hover {
    cursor: pointer;
  }
`;

export const DocumentPageMetadata = styled.div`
  width: 89%;
  font-size: 16px;
  border: 1px solid #4a4a4a;
  margin: 5px 0px;
  color: #4a4a4a;
  padding: 5px;
  box-sizing: border-box;
  font-style: italic;

  @media (min-width: 768px) {
    width: 60%;
    font-size: 30px;
  }
`;

export const DocumentPageContent = styled.div`
  width: 100%;
  padding: 1rem 0rem;
  font-size: 14px;
  border: 0.5px solid #4a4a4a;
  padding: 5px;
  box-sizing: border-box;

  @media (min-width: 768px) {
    width: 60%;
    border: 0.5px solid #4a4a4a;
  }
`;
export const DocumentPageAnnotationBlock = styled.div`
  width: 100%;
  padding: 1rem 0rem;
  padding-left: 5%;
  font-size: 14px;
  border: 0.5px solid #4a4a4a;

  @media (min-width: 768px) {
    width: 30%;
    border: 0.5px solid #4a4a4a;
  }
`;

export const DocumentPageContentSection = styled.div`
  display: flex;
  width: 80vw;
  position: relative;
  flex-flow: row wrap;
  justify-content: space-between;

  @media (min-width: 768px) {
    width: 50vw;
  }
`;
