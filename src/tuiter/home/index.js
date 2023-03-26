import React from "react";
import TuiterLayoutTemplate from "..";
import TuitsList from "../tuits";
import WhatsHappening from "./whats-happening";

const HomeComponent = () => {
  return (
    <TuiterLayoutTemplate active="home">
      <>
        <h4>Home</h4>
        <WhatsHappening />
        <TuitsList />
      </>
    </TuiterLayoutTemplate>
  );
};

export default HomeComponent;
