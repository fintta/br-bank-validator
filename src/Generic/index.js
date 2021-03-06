import {
  accountNumberGenerator,
  branchNumberGenerator,
  accountNumberCheckDigitGenerator,
  branchNumberCheckDigitGenerator
} from "../Common";

const accountNumber = accountNumberGenerator();
const branchNumber = branchNumberGenerator();
const accountNumberCheckDigit = accountNumberCheckDigitGenerator();
const branchNumberCheckDigit = branchNumberCheckDigitGenerator();

export default {
  accountNumberCheckDigit,
  branchNumberCheckDigit,
  accountNumber,
  branchNumber
};
