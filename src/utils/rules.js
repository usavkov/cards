import {
  minLength,
  maxLength,
  formattedName,
  maxAllowVal,
  link
} from "./criteria";

export const rules = {
  url: [minLength(5), link],
  fullName: [minLength(5), maxLength(20), formattedName],
  price: [maxAllowVal(Number.MAX_SAFE_INTEGER)]
};
