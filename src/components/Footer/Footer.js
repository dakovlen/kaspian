import React from "react";
import './footer.css';

export const Footer = ({year}) => {
  return (
    <footer>
      <span>© React Blog - {year}</span>
    </footer>
  );
};
