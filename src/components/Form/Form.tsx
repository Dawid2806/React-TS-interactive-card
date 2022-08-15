import React from "react";
import classes from "./Form.module.css";
import { FormTypes, FormProps } from "./FormTypes";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { scheme } from "./Scheme";
import { useGlobalState } from "../../Context/GlobalStateProvider";

export const Form: React.FC<FormProps> = (props) => {
  const { setState } = useGlobalState();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormTypes>({
    resolver: yupResolver(scheme),
  });

  const onSubmit = (data: Partial<FormTypes>) => {
    setState((prev) => ({ ...prev, ...data }));
    props.isValidCheck(true);
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={classes.formInput}>
        <label htmlFor="name">Cardholder Name</label>
        <input
          className={classes.input}
          type="text"
          id="name"
          placeholder="e.g. Jane Appleseed"
          {...register("name")}
        />
        {errors.name && <span className={classes.errorMsg}>Invalid Name</span>}
      </div>
      <div className={classes.formInput}>
        <label htmlFor="cardNumber">Card Number</label>
        <input
          className={classes.input}
          type="number"
          id="cardNumber"
          placeholder="e.g. 1234 5678 9123 0000"
          {...register("cardNumber")}
        />
        {errors.cardNumber && (
          <span className={classes.errorMsg}>Wrong format, numbers only</span>
        )}
      </div>

      <div className={classes.container}>
        <div className={classes.expDate}>
          <label htmlFor="date">Exp. Date (MM/YY)</label>

          <div>
            <input
              type="number"
              id={classes.dateInputMM}
              placeholder="MM"
              className={classes.input}
              {...register("month")}
            />

            <input
              type="number"
              id={classes.dateInputYY}
              placeholder="YY"
              className={classes.input}
              {...register("year")}
              min={2022}
            />
            <div>
              {errors.year && (
                <span className={classes.errorMsg}>Can’t be blank</span>
              )}
            </div>
          </div>
        </div>

        <div className={classes.cvcForm}>
          <label htmlFor="cvc" className={classes.labelCVC}>
            cvc
          </label>
          <input
            type="number"
            id={classes.cvc}
            placeholder="e.g. 123"
            className={classes.input}
            {...register("cvcNumber")}
          />
          {errors.cvcNumber && (
            <span className={classes.errorMsg}>Invalid CvC</span>
          )}
        </div>
      </div>
      <button type="submit" className={classes.button}>
        Confirm
      </button>
    </form>
  );
};
