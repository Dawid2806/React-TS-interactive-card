import * as yup from "yup";
import valid from "card-validator";
export const scheme = yup.object({
  name: yup.string().min(4, "Invalid Name"),
  cardNumber: yup
    .number()
    .test("card-valid", "", (value) => valid.number(value).isValid),
  month: yup.number().min(1, "").max(12, ""),
  year: yup.number().min(new Date().getFullYear(), "").max(2060, ""),
  cvcNumber: yup.string().min(3, "").max(3, ""),
});
