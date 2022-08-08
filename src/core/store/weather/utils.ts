export const kelvinToCelsium = (kelvin: number) => {
  let celsius = (
    (5 / 9) *
    (Math.floor((Number(kelvin) - 273) * (9 / 5) + 32) - 32)
  ).toFixed(0);
  return Number(celsius);
};
