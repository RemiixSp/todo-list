export const kelvinToCelsium = (kelvin: number) =>
  (5 / 9) * (Math.floor((kelvin - 273) * (9 / 5) + 32) - 32);
