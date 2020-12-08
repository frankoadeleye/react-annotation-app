import React from "react";
import { LayoutBlock } from "./layout.styles";

interface lProp {
  children?: any;
}

export const Layout = ({ children }: lProp) => {
  return <LayoutBlock>{children}</LayoutBlock>;
};
