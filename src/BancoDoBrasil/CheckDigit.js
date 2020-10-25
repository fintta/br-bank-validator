const ACCOUNT_LEN = 8;

function module(sumSeq) {
  const result = 11 - (sumSeq % 11);
  if (result === 10) {
    return "X";
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
  let seq = 0;
  for (let i = 0; i < numbers.length; i++) {
    seq = 9 - i;
    sumSeq += parseInt(numbers[i], 10) * seq;
  }
  return module(sumSeq) === checkDigits;
}

export function branchNumberCheckDigit(br, checkDigits) {
  const numbers = br.split("");
  let sumSeq = 0;
  let seq = 0;
  for (let i = 0; i < numbers.length; i++) {
    seq = 5 - i;
    sumSeq += parseInt(numbers[i], 10) * seq;
  }
  return module(sumSeq) === checkDigits;
}
