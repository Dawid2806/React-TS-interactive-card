import React from "react";
import classes from "./Thanks.module.css";
import { FormProps } from "../Form/FormTypes";

export const Thanks: React.FC<FormProps> = (props) => {
  const continueHandler = () => {
    props.isValidCheck(false);
    console.log("dupa");
  };

  return (
    <div className={classes.container}>
      <div className={classes.circle}>
        <span className={classes.check}>✓</span>
      </div>
      <h4 className={classes.title}>thank you!</h4>
      <span className={classes.text}>We’ve added your card details</span>
      <button
        type="submit"
        onClick={continueHandler}
        className={classes.button}
      >
        Continue
      </button>
    </div>
  );
};
