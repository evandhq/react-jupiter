// @flow

// doc of Intl: https://mzl.la/2TJQm88
export const toPersianNumber = (number: number, option = {}) => (
  new Intl.NumberFormat('fa-IR', option).format(number)
);

export const englishNumberToPersianInString = (input: string) => {
  const persianNumbers = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
  return input.replace(/[0-9]/g, (index) => persianNumbers[+index]);
};

const persianNumbers = [/۰/g, /۱/g, /۲/g, /۳/g, /۴/g, /۵/g, /۶/g, /۷/g, /۸/g, /۹/g];
const arabicNumbers = [/٠/g, /١/g, /٢/g, /٣/g, /٤/g, /٥/g, /٦/g, /٧/g, /٨/g, /٩/g];

export const fixNumbers = (e) => {
  let result = e.target.value;
  if (typeof result === 'string') {
    for (let i = 0; i < 10; i++) {
      result = result.replace(persianNumbers[i], i).replace(arabicNumbers[i], i);
    }
  }
  e.target.value = result;
  return result;
};
