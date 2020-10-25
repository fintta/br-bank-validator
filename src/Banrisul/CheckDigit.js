const ACCOUNT_LEN = 9;

function multiplyAccordingWeight(number, index) {
  const weight = [3, 2, 4, 7, 6, 5, 4, 3, 2];
  return number * weight[index];
}

function moduleEleven(sumSeq) {
  const module = sumSeq % 11;
  if (module === 0) {
    return 0;
  }
  if (module === 1) {
    return 6;
  }
  return 11 - module;
}

export function accountNumberCheckDigit(origAcc, br, checkDigits) {
  const acc = ("0".repeat(ACCOUNT_LEN) + origAcc).slice(-ACCOUNT_LEN);
  const numbers = acc.split("");
  let sumSeq = 0;

  for (let i = 0; i < numbers.length; i++) {
    const number = parseInt(numbers[i], 10);
    sumSeq += multiplyAccordingWeight(number, i);
  }

  return moduleEleven(sumSeq).toString() === checkDigits;
}

export function branchNumberCheckDigit() {
  return true;
}
