//  Get reference to the DOM elements
const loanAmountInput = document.querySelector("#loan-amount");
const loanYearsInput = document.querySelector("#loan-years");
const loanRateInput = document.querySelector("#loan-rate");
const displaySpan = document.querySelector("#monthly-payment");

// Add an event listener to the form element
window.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +document.getElementById("loan-amount").value,
    years: +document.getElementById("loan-years").value,
    rate: +document.getElementById("loan-rate").value,
  };
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  // Initialize values
  loanAmountInput.value = 100000;
  loanYearsInput.value = 5;
  loanRateInput.value = 0.1;

  // Create an object containing values
  const values = {
    amount: loanAmountInput.value,
    years: loanYearsInput.value,
    rate: loanRateInput.value,
  };
  // Call the function to calculate montly payment and pass the values object
  calculateMonthlyPayment(values);
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const currentValues = getCurrentUIValues();
  const calculatedMonthlyPaymentString = calculateMonthlyPayment(currentValues);
  updateMonthly(calculatedMonthlyPaymentString);
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  const amount = values["amount"];
  const years = values["years"];
  const rate = values["rate"];

  const i = years / 12;
  const n = rate * 12;

  // 𝑃×𝑖1−(1+𝑖)−𝑛monthly payment=P×i1−(1+i)−n
  // Simplified as (P * i) / Math.pow(1 + i, n);
  //  Where P - principal is amount,
  // i is periodic interest rate (in our case yearly rate ÷ 12)
  // n = total number of payments (years × 12)

  const monthlyPayment = (amount * i) / Math.pow(1 + i, n);
  let monthlyPaymentString = monthlyPayment.toFixed(2);

  return monthlyPaymentString;
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  displaySpan.textContent = monthly;
}
