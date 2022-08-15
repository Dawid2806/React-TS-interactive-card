import React from "react";
import classes from "./CardBack.module.css";
import { useGlobalState } from "../../Context/GlobalStateProvider";

export const CardBack = () => {
  const { state } = useGlobalState();
  const data = {
    cvc: state.cvcNumber === undefined ? "000" : state.cvcNumber,
  };
  return (
    <div className={classes.cardBack}>
      <span className={classes.cvc}>{data.cvc}</span>
    </div>
  );
};
