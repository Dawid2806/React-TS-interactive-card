import React, { Dispatch, SetStateAction } from "react";

export interface FormTypes {
  name: string;
  cardNumber: number;
  month: number;
  year: number;
  cvcNumber: string;
  isValid: false;
}

export interface FormProps {
  isValidCheck: Dispatch<SetStateAction<boolean>>;
}
