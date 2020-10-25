/* eslint-disable import/no-cycle */
import BancoDoBrasil from "./BancoDoBrasil";
import Banrisul from "./Banrisul";
import Bradesco from "./Bradesco";
import Citibank from "./Citibank";
import Generic from "./Generic";
import Hsbc from "./Hsbc";
import ItauUnibanco from "./ItauUnibanco";
import Santander from "./Santander";
import BankCodes from "./BankCodes";
/* eslint-enable import/no-cycle */

const validatorsByBankCodes = {
  "001": BancoDoBrasil,
  "041": Banrisul,
  "237": Bradesco,
  "745": Citibank,
  "399": Hsbc,
  "341": ItauUnibanco,
  "033": Santander
};

function getValidator(bankNumber) {
  const validator = validatorsByBankCodes[bankNumber];
  if (!validator) {
    return Generic;
  }

  return validator;
}

export default function validate(bankInfo) {
  const result = {
    bank_name: null,
    valid: true,
    errors: []
  };

  if (!bankInfo) {
    result.errors.push("bank_info.not_found");
  } else if (!BankCodes.bankCode(bankInfo.bank_code)) {
    result.errors.push("bank_code.invalid");
  } else {
    const validator = getValidator(bankInfo.bank_code);
    result.bank_name = BankCodes.getBankName(bankInfo.bank_code);

    if (typeof bankInfo.account_number === "undefined") {
      result.errors.push("account_number.not_found");
    } else if (!validator.accountNumber(bankInfo.account_number)) {
      result.errors.push("account_number.invalid");
    }

    if (typeof bankInfo.account_number_check_digit === "undefined") {
      result.errors.push("account_number_check_digit.not_found");
    } else if (
      !validator.accountNumberCheckDigit(
        bankInfo.account_number,
        bankInfo.branch_number,
        bankInfo.account_number_check_digit
      )
    ) {
      result.errors.push("account_number_check_digit.invalid");
    }

    if (typeof bankInfo.branch_number === "undefined") {
      result.errors.push("branch_number.not_found");
    } else if (!validator.branchNumber(bankInfo.branch_number)) {
      result.errors.push("branch_number.invalid");
    }

    if (typeof bankInfo.branch_number_check_digit === "undefined") {
      result.errors.push("branch_number_check_digit.not_found");
    }
    if (
      !validator.branchNumberCheckDigit(
        bankInfo.branch_number,
        bankInfo.branch_number_check_digit
      )
    ) {
      result.errors.push("branch_number_check_digit.invalid");
    }
  }

  if (result.errors.length > 0) {
    result.valid = false;
  }
  return result;
}

export {
  BancoDoBrasil,
  Banrisul,
  Bradesco,
  Citibank,
  Hsbc,
  ItauUnibanco,
  Santander,
  BankCodes
};
