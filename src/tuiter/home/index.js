import React from "react";
import TuiterGenericLayout from "..";
import TuitsList from "../tuits";
import WhatsHappening from "./whats-happening";

const HomeComponent = () => {
  return (
    <TuiterGenericLayout active="home">
      <>
        <h4>Home</h4>
        <WhatsHappening />
        <TuitsList />
      </>
    </TuiterGenericLayout>
  );
};

export default HomeComponent;
