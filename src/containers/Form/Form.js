import React, { useEffect, useState } from "react";

export const Form = ({ initialValues, validate, children }) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({}); //////
  const [isValid, setIsValid] = useState({
    isValid: false,
    error: ""
  });

  useEffect(() => {
    setValues(initialValues);
  }, [initialValues]);

  // useEffect(() => {
  //   setIsValid((state) => ({
  //     ...state,
  //     isValid: Boolean(validate(values)),
  //     error: validate(values)
  //   }));
  // }, [values, validate]);

  /*  useEffect(() => {
    console.log(isValid);
    console.log(errors);
  }, [isValid]); */

  const handleChange = ({ target }) => {
    setValues((state) => ({
      ...state,
      [target.name]: target.value
    }));
    setErrors((state) => ({
      ...state,
      [target.name]: validate([target.name, target.value])
    }));
  };

  const handleFocus = () => {};

  return children({
    values,
    errors,
    isValid,
    handleChange,
    handleFocus
  });
};
