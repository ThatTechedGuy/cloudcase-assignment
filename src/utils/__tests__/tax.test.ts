import { calculateAnnualTax, calculateSuperannuation } from "./../tax";

describe("Tax and Superannuation Calculation", () => {
  test("Case 1: Salary $70,000", () => {
    const salary = 70000;
    const expectedTax = 17869.135000000002;
    const expectedSuperannuation = 6650;

    const actualTax = calculateAnnualTax(salary);
    const actualSuperannuation = calculateSuperannuation(salary);

    expect(actualTax).toBeCloseTo(expectedTax, 2);
    expect(actualSuperannuation).toBe(expectedSuperannuation);
  });

  test("Case 2: Salary $90,000", () => {
    const salary = 90000;
    const expectedTax = 45166.23;
    const expectedSuperannuation = 8550;

    const actualTax = calculateAnnualTax(salary);
    const actualSuperannuation = calculateSuperannuation(salary);

    expect(actualTax).toBeCloseTo(expectedTax, 2);
    expect(actualSuperannuation).toBe(expectedSuperannuation);
  });

  test("Case 3: Salary $200,000", () => {
    const salary = 200000;
    const expectedTax = 141563.465;
    const expectedSuperannuation = 19000;

    const actualTax = calculateAnnualTax(salary);
    const actualSuperannuation = calculateSuperannuation(salary);

    expect(actualTax).toBeCloseTo(expectedTax, 2);
    expect(actualSuperannuation).toBe(expectedSuperannuation);
  });
  test("Case 3: Salary $0", () => {
    const salary = 0;
    const expectedTax = 0;
    const expectedSuperannuation = 0;

    const actualTax = calculateAnnualTax(salary);
    const actualSuperannuation = calculateSuperannuation(salary);

    expect(actualTax).toBeCloseTo(expectedTax, 2);
    expect(actualSuperannuation).toBe(expectedSuperannuation);
  });
  test("Case 3: Salary $1", () => {
    const salary = 1;
    const expectedTax = 0;
    const expectedSuperannuation = 0.095;

    const actualTax = calculateAnnualTax(salary);
    const actualSuperannuation = calculateSuperannuation(salary);

    expect(actualTax).toBeCloseTo(expectedTax, 2);
    expect(actualSuperannuation).toBeCloseTo(expectedSuperannuation);
  });
  test("Case 3: Salary $1000", () => {
    const salary = 1000;
    const expectedTax = 0;
    const expectedSuperannuation = 95;

    const actualTax = calculateAnnualTax(salary);
    const actualSuperannuation = calculateSuperannuation(salary);

    expect(actualTax).toBeCloseTo(expectedTax, 2);
    expect(actualSuperannuation).toBeCloseTo(expectedSuperannuation);
  });
  test("Case 3: Salary $18200", () => {
    const salary = 18200;
    const expectedTax = 0;
    const expectedSuperannuation = 1729;

    const actualTax = calculateAnnualTax(salary);
    const actualSuperannuation = calculateSuperannuation(salary);

    expect(actualTax).toBeCloseTo(expectedTax, 2);
    expect(actualSuperannuation).toBeCloseTo(expectedSuperannuation);
  });
  test("Case 3: Salary $18201", () => {
    const salary = 18201;
    const expectedTax = 0.19;
    const expectedSuperannuation = 1729.095;

    const actualTax = calculateAnnualTax(salary);
    const actualSuperannuation = calculateSuperannuation(salary);

    expect(actualTax).toBeCloseTo(expectedTax, 2);
    expect(actualSuperannuation).toBeCloseTo(expectedSuperannuation);
  });
  test("Case 3: Salary $18202", () => {
    const salary = 18202;
    const expectedTax = 0.38;
    const expectedSuperannuation = 1729.19;

    const actualTax = calculateAnnualTax(salary);
    const actualSuperannuation = calculateSuperannuation(salary);

    expect(actualTax).toBeCloseTo(expectedTax, 2);
    expect(actualSuperannuation).toBeCloseTo(expectedSuperannuation);
  });
});
