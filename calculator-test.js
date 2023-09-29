describe("Loan Calculator", () => {
  describe("calculateMontlyPayment tests", () => {
    const values = {
      amount: 100000,
      years: 5,
      rate: 0.1,
    };
    it("should calculate the monthly rate correctly", function () {
      expect(calculateMonthlyPayment(values)).toEqual("27432.64");
    });

    it("should return a result with 2 decimal places", function () {
      const result = calculateMonthlyPayment(values);
      const expectedValue = 27432.64;
      const precision = 2;
      expect(result).toBeCloseTo(expectedValue, precision);
    });
  });
});
