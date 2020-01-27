// @flow

// doc of Intl: https://mzl.la/2TJQm88
export const toPersianNumber = (number: number, option = {}) => (
  new Intl.NumberFormat('fa-IR', option).format(number)
);