import React from "react";
import classes from "./CardFront.module.css";
export const CardFront = () => {
  return (
    <div className={classes.cardFront}>
      <div className={classes.chipsContainer}>
        <div className={classes.chip}></div>
        <div className={classes.chipMini}></div>
      </div>

      <span className={classes.cardNumber}>0000 0000 0000 0000</span>
      <div className={classes.cardInfo}>
        <span className={classes.cardName}>Felicia leire</span>
        <span className={classes.expiryDate}>09/27</span>
      </div>
    </div>
  );
};
