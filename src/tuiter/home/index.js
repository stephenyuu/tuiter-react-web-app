import React from "react";
import TuiterGenericLayout from "..";
import TuitsList from "../tuits";

const HomeComponent = () => {
  return (
    <TuiterGenericLayout active="home">
      <>
        <h1>Home</h1>
        <TuitsList />
      </>
    </TuiterGenericLayout>
  );
};

export default HomeComponent;
