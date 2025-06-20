const MIN_VALUE = 1_000_000_000_000;
const MAX_VALUE = 9_000_000_000_000;

export function getID() {
  return Math.trunc(Math.random() * (MAX_VALUE - MIN_VALUE) + MIN_VALUE);
}
