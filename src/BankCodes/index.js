import slugify from "slugify";
import AllCodes from "./AllCodes";

function bankCode(code) {
  return (
    /^([0-9A-Za-x]{3,5})$/.test(code) && AllCodes.find(b => b.code === code)
  );
}

function getBankName(code) {
  const bank = AllCodes.find(b => b.code === code);
  return !bank
    ? bank
    : slugify(bank.name, { replacement: " ", strict: true }).toUpperCase();
}

const validator = {
  bankCode,
  getBankName
};

export default validator;
