import { accountNumberCheckDigit, branchNumberCheckDigit } from "./CheckDigit";
import { accountNumberGenerator, branchNumberGenerator } from "../Common";

const accountNumber = accountNumberGenerator(7);
const branchNumber = branchNumberGenerator();

const validator = {
  accountNumberCheckDigit,
  branchNumberCheckDigit,
  accountNumber,
  branchNumber
};

export default validator;
