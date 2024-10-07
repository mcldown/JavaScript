// Function to calculate the age based on input date
const ageCalculate = () => {
  const today = new Date();
  const inputDate = new Date(document.getElementById("date-input").value);
  const birthTime = inputDate.getTime();
  const currentTime = today.getTime();

  // Check if birth date is valid (not in the future)
  if (birthTime > currentTime) {
    alert("Invalid date! Birth date is in the future.");
    displayResult("-", "-", "-");
    return;
  }

  const diffTime = currentTime - birthTime;
  const years = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 365));
  const months = Math.floor((diffTime % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30.44));
  const days = Math.floor((diffTime % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24));

  displayResult(years, months, days);
};

// Function to display the calculated age
const displayResult = (years, months, days) => {
  document.getElementById("years").textContent = years;
  document.getElementById("months").textContent = months;
  document.getElementById("days").textContent = days;
};

// Add event listener to the button
document.getElementById("calc-age-btn").addEventListener("click", ageCalculate);
