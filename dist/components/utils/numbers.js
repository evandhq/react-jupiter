"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.toPersianNumber = exports.fixNumbers = exports.englishNumberToPersianInString = void 0;

// doc of Intl: https://mzl.la/2TJQm88
const toPersianNumber = function (number) {let option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};return (
    new Intl.NumberFormat('fa-IR', option).format(number));};exports.toPersianNumber = toPersianNumber;


const englishNumberToPersianInString = (input) => {
  const persianNumbers = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
  return input.replace(/[0-9]/g, (index) => persianNumbers[+index]);
};exports.englishNumberToPersianInString = englishNumberToPersianInString;

const persianNumbers = [/۰/g, /۱/g, /۲/g, /۳/g, /۴/g, /۵/g, /۶/g, /۷/g, /۸/g, /۹/g];
const arabicNumbers = [/٠/g, /١/g, /٢/g, /٣/g, /٤/g, /٥/g, /٦/g, /٧/g, /٨/g, /٩/g];

const fixNumbers = (e) => {
  let result = e.target.value;
  if (typeof result === 'string') {
    for (let i = 0; i < 10; i++) {
      result = result.replace(persianNumbers[i], i).replace(arabicNumbers[i], i);
    }
  }
  e.target.value = result;
  return result;
};exports.fixNumbers = fixNumbers;