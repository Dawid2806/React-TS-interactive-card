import React from "react";
import classes from "./Form.module.css";
export const Form = () => {
  return (
    <form className={classes.form}>
      <label htmlFor="name">Cardholder Name</label>
      <input
        className={classes.input}
        type="text"
        name="name"
        id="name"
        placeholder="e.g. Jane Appleseed"
      />
      <label htmlFor="cardNumber">Card Number</label>
      <input
        className={classes.input}
        type="number"
        name="cardNumber"
        id="cardNumber"
        placeholder="e.g. 1234 5678 9123 0000"
      />
      <div className={classes.container}>
        <div className={classes.expContainer}>
          <label htmlFor="date">Exp. Date (MM/YY)</label>

          <div>
            <input
              type="number"
              name="date"
              id={classes.dateInputMM}
              placeholder="MM"
              className={classes.input}
            />
            <input
              type="number"
              name="date"
              id={classes.dateInputYY}
              placeholder="YY"
              className={classes.input}
            />
          </div>
        </div>

        <div>
          <label htmlFor="cvc" className={classes.labelCVC}>
            cvc
          </label>
          <input
            type="number"
            name="cvc"
            id={classes.cvc}
            placeholder="e.g. 123"
            className={classes.input}
          />
        </div>
      </div>
      <button className={classes.button}>Confirm</button>
    </form>
  );
};
