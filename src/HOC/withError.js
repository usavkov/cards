import React from "react";
import { Error } from "../components/Error";

export const withError = (Component) => (props) => {
  const { error } = props;
  return error ? <Error message={error} /> : <Component {...props} />;
};
