const MIN_VALUE = 2_000_000_000_000_000;
const MAX_VALUE = 9_000_000_000_000_000;

export function getID() {
  return Math.trunc(Math.random() * (MAX_VALUE - MIN_VALUE) + MIN_VALUE);
}

export function getDebitCardNumber() {
  const getRandomizeNumber = () =>
    Math.floor(Math.random() * 10000 + 1000)
      .toString()
      .slice(0, 5);

  return `${"4" + getRandomizeNumber().toString().slice(0, 3)} ${getRandomizeNumber()} ${getRandomizeNumber()} ${getRandomizeNumber()}`;
}
