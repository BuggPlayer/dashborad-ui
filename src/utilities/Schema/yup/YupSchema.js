import * as Yup from "yup";

export const categorySchema = Yup.object({
  name: Yup.string().min(2).max(25).required("Please enter category name"),
  color: Yup.string().min(2).required("Please enter category Color"),
//   image: Yup.string().min(2).required("Please enter category image"),
});
