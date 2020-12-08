import React from "react";
import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <>
      <h2>Classforma Frontend Test</h2>
      <h2>
        <Link to="/searchpage">Click me</Link>
      </h2>
    </>
  );
};
