import React from "react";
import classes from "./CardFront.module.css";
import { useGlobalState } from "../../Context/GlobalStateProvider";
export const CardFront = () => {
  const { state } = useGlobalState();

  const data = {
    cardNumber:
      state.cardNumber === undefined
        ? "0000 0000 0000 0000"
        : state.cardNumber
            .toString()
            .match(/.{1,4}/g)
            ?.join(" "),
    name: state.name === undefined ? "Felicia Margaritta" : state.name,
    month: state.month === undefined ? "0" : state.month,
    year: state.year === undefined ? "0" : state.year.toString().slice(2, 4),
  };
  return (
    <div className={classes.cardFront}>
      <div className={classes.chipsContainer}>
        <div className={classes.chip}></div>
        <div className={classes.chipMini}></div>
      </div>

      <span className={classes.cardNumber}>{data.cardNumber}</span>
      <div className={classes.cardInfo}>
        <span className={classes.cardName}>{data.name}</span>
        <span className={classes.expiryDate}>
          {data.month}/{data.year}
        </span>
      </div>
    </div>
  );
};
