const ACCOUNT_LEN = 5;

function multiplyAccordingParity(number, index) {
  return number * (index % 2 === 0 ? 2 : 1);
}

function adjustAccordingLength(sequence) {
  if (sequence > 9) {
    const numbers = sequence.toString().split("");
    sequence = 0; // eslint-disable-line no-param-reassign
    for (let i = 0; i < numbers.length; i++) {
      sequence += parseInt(numbers[i], 10); // eslint-disable-line no-param-reassign
    }
  }
  return sequence;
}

function module(sumSeq) {
  const mod = sumSeq % 10;
  if (mod === 0) {
    return "0";
  }
  return (10 - mod).toString();
}

export function accountNumberCheckDigit(origAcc, br, checkDigit) {
  const acc = ("0".repeat(ACCOUNT_LEN) + origAcc).slice(-ACCOUNT_LEN);
  const numbers = ((br || "") + (acc || "")).split("");
  let sumSeq = 0;
  let sequence = 0;
  for (let i = 0; i < numbers.length; i++) {
    const number = parseInt(numbers[i], 10);
    sequence = multiplyAccordingParity(number, i);
    sequence = adjustAccordingLength(sequence);
    sumSeq += sequence;
  }
  return module(sumSeq) === checkDigit;
}

export function branchNumberCheckDigit() {
  return true;
}
