import React from "react";
import { useHistory } from "react-router-dom";
import { StyledBackArrowBlock } from "./go-back.styles";

const GoBack = () => {
  const history = useHistory();
  const handleBack = () => {
    history.goBack();
  };

  return (
    <StyledBackArrowBlock onClick={handleBack}>
      <button>
        <span>Back</span>
      </button>
    </StyledBackArrowBlock>
  );
};

export default GoBack;
