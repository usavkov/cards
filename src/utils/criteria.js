export const minLength = (minL) => (value) => {
  if (value.length < minL) return `Minimum length - ${minL}!`;
};

export const maxLength = (maxL) => (value) => {
  if (value.length > maxL) return `Maximum length - ${maxL}!`;
};

export const formattedName = (value) => {
  if (!/^[a-z- ]*$/i.test(value)) return "Field contains wrong symbols!";
};

export const link = (value) => {
  if (
    !/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'%\(\)\*\+,;=.]+$/i.test(
      value
    )
  )
    return "Field must contain link! ('http(s)://example.com/')";
};

export const maxAllowVal = (maxVal) => (value) => {
  if (+value > maxVal) return `Maximum allowable value is ${maxVal}`;
};
