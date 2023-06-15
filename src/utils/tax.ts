interface SalaryDetails {
  salaryAmounnt: number;
}

interface TaxBracket {
  lowerLimit: number;
  upperLimit: number;
  baseTax: number;
  taxRate: number;
}

const taxBrackets: TaxBracket[] = [
  { lowerLimit: 0, upperLimit: 18200, baseTax: 0, taxRate: 0 },
  { lowerLimit: 18201, upperLimit: 37000, baseTax: 0, taxRate: 0.19 },
  { lowerLimit: 37001, upperLimit: 90000, baseTax: 3572, taxRate: 0.325 },
  { lowerLimit: 90001, upperLimit: 180000, baseTax: 20797, taxRate: 0.37 },
  { lowerLimit: 180001, upperLimit: Infinity, baseTax: 54097, taxRate: 0.45 },
];

export function calculateAnnualTax(salary: number): number {
  // Assuming salary is annual
  let remainingSalary = salary;
  let tax = 0;

  for (const bracket of taxBrackets) {
    if (remainingSalary <= 0) {
      break;
    }

    const taxableAmount = Math.min(
      remainingSalary,
      bracket.upperLimit - bracket.lowerLimit
    );
    const taxForBracket = bracket.baseTax + taxableAmount * bracket.taxRate;
    console.log(
      "taxForBracket",
      taxForBracket,
      "taxableAmount",
      taxableAmount,
      "remainingSalary",
      remainingSalary,
      "bracket",
      bracket.taxRate
    );
    tax += taxForBracket;
    remainingSalary -= taxableAmount;
  }
  return tax;
}

export function calculateSuperannuation(salary: number): number {
  const superRate = 0.095; // Assuming superannuation rate of 9.5%
  return salary * superRate;
}
