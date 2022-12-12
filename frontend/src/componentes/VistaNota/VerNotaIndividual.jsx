import React from "react";

// Import elemento boton
import { Boton } from "./boton";

// Import elemento boton
import { Cuerpo } from "./Cuerpo";

// import NAVBAR
import { NavBar } from "../NavBar";

export function VerNotaIndividual() {
  return (
    <>
      <NavBar/>
      <div className="App">
        <Cuerpo />
        <Boton />
      </div>
    </>
  );
}
