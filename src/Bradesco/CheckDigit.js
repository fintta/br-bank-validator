const ACCOUNT_LEN = 7;

function multiplyAccordingWeight(number, i) {
  const weight = [2, 7, 6, 5, 4, 3, 2];
  return number * weight[i];
}

function accountModule(sumSeq) {
  const module = sumSeq % 11;
  if (module === 0) {
    return "0";
  }
  if (module === 1) {
    return "P";
  }
  return (11 - module).toString();
}

function branchModule(sumSeq) {
  const result = 11 - (sumSeq % 11);
  if (result === 10) {
    return "P";
  }
  if (result === 11) {
    return "0";
  }
  return result.toString();
}

export function accountNumberCheckDigit(origAcc, br, checkDigits) {
  const acc = ("0".repeat(ACCOUNT_LEN) + origAcc).slice(-ACCOUNT_LEN);
  const numbers = acc.split("");
  let sumSeq = 0;
  for (let i = 0; i < numbers.length; i++) {
    const number = parseInt(numbers[i], 10);
    sumSeq += multiplyAccordingWeight(number, i);
  }
  return accountModule(sumSeq) === checkDigits;
}

export function branchNumberCheckDigit(br, checkDigits) {
  const numbers = br.split("");
  let sumSeq = 0;
  let seq = 0;
  for (let i = 0; i < numbers.length; i++) {
    seq = 5 - i;
    sumSeq += parseInt(numbers[i], 10) * seq;
  }
  return branchModule(sumSeq) === checkDigits;
}
