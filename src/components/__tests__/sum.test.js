import { sum } from "../Sum"

test("Check the sum of 2 positive numbers", () => {
  expect(sum(2, 5)).toBe(7);
  expect(sum(-2, 3)).toBe(1);
});
