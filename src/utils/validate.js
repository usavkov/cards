import { rules } from "./rules";

export const validate = (input) => {
  const [name, value] = input;
  const fieldRules = rules[name];

  return fieldRules.map((rule) => rule(value)).filter((val) => val)[0] || "";
};
