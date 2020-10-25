import {
  accountNumberGenerator,
  branchNumberGenerator,
  accountNumberCheckDigitGenerator,
  branchNumberCheckDigitGenerator
} from "../Common";

const accountNumber = accountNumberGenerator(7);
const branchNumber = branchNumberGenerator();
const accountNumberCheckDigit = accountNumberCheckDigitGenerator();
const branchNumberCheckDigit = branchNumberCheckDigitGenerator();

const validator = {
  accountNumberCheckDigit,
  branchNumberCheckDigit,
  accountNumber,
  branchNumber
};

export default validator;
