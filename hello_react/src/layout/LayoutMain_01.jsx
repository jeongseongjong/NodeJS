import React from "react";
import Nav from "./nav";
import "./LayoutMain.css";
import LayoutBody from "./LayoutBody";
const LayoutMain_01 = () => {
  return (
    <div>
      <header>
        <h2>MY BOOK</h2>
      </header>
      <Nav />
      <LayoutBody />
    </div>
  );
};

export default LayoutMain_01;
