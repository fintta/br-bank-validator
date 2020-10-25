export function branchNumberGenerator(branchNumberLength) {
  if (!branchNumberLength) {
    return branchNumber =>
      branchNumber &&
      /^(?!0000)([0-9]{1,5})$/.test(branchNumber) &&
      parseInt(branchNumber, 10) > 0;
  }
  return branchNumber =>
    branchNumber &&
    branchNumber.length <= branchNumberLength &&
    /^(?!0000)([0-9]{1,5})$/.test(branchNumber) &&
    parseInt(branchNumber, 10) > 0;
}

export function accountNumberGenerator(accountNumberLength) {
  if (!accountNumberLength) {
    return accountNumber =>
      accountNumber &&
      /^[0-9]{1,12}$/.test(accountNumber) &&
      parseInt(accountNumber, 10) > 0;
  }
  return accountNumber =>
    accountNumber &&
    accountNumber.length <= accountNumberLength &&
    /^[0-9]{1,12}$/.test(accountNumber) &&
    parseInt(accountNumber, 10) > 0;
}

export function branchNumberCheckDigitGenerator(branchNumberCheckDigitLength) {
  if (!branchNumberCheckDigitLength) {
    return branchNumberCheckDigit =>
      branchNumberCheckDigit &&
      /^(?!0000)([0-9]{0,2})$/.test(branchNumberCheckDigit);
  }
  return branchNumberCheckDigit =>
    branchNumberCheckDigit &&
    branchNumberCheckDigit.length <= branchNumberCheckDigitLength &&
    /^(?!0000)([0-9]{0,2})$/.test(branchNumberCheckDigit);
}

export function accountNumberCheckDigitGenerator(
  accountNumberCheckDigitLength
) {
  if (!accountNumberCheckDigitLength) {
    return accountNumberCheckDigit =>
      accountNumberCheckDigit && /^[0-9]{0,2}$/.test(accountNumberCheckDigit);
  }
  return accountNumberCheckDigit =>
    accountNumberCheckDigit &&
    accountNumberCheckDigit.length <= accountNumberCheckDigitLength &&
    /^[0-9]{0,2}$/.test(accountNumberCheckDigit);
}
