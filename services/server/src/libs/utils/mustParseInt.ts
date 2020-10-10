export const mustParseInt = (value: string): number => {
  const valueInt = parseInt(value);

  if (isNaN(valueInt)) {
    return 0;
  }

  return valueInt;
};
