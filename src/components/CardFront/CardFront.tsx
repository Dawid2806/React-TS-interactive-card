import React from "react";
import classes from "./CardFront.module.css";
import { useGlobalState } from "../../Context/GlobalStateProvider";

export const CardFront = () => {
  const { state } = useGlobalState();

  const cardNumber = state?.cardNumber
    ? state.cardNumber
        .toString()
        .match(/.{1,4}/g)
        ?.join(" ")
    : "0000 0000 0000 0000";
  const name = state?.name ? state.name : "Felicia Margaritta";
  const month = state?.month ? state.month : "0";
  const year = state?.year ? state.year.toString().slice(2, 4) : "0";
  return (
    <div className={classes.cardFront}>
      <div className={classes.chipsContainer}>
        <div className={classes.chip}></div>
        <div className={classes.chipMini}></div>
      </div>

      {state?.cardNumber && (
        <span className={classes.cardNumber}>{cardNumber}</span>
      )}
      <div className={classes.cardInfo}>
        <span className={classes.cardName}>{name}</span>
        <span className={classes.expiryDate}>
          {month}/{year}
        </span>
      </div>
    </div>
  );
};
