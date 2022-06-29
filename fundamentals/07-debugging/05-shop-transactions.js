const transactionLog = [];

function processInput(input) {
  const numericalData = parseFloat(input);

  if (Number.isNaN(numericalData)) {
    throw new Error("Data could not be converted to numerical amount.");
  }

  return numericalData;
}

function logTransaction() {
  let data = prompt("Please enter the transaction amount: ");

  // Could replace try...catch with a simple check for falsey NaN or 0: if (data)
  try {
    data = processInput(data);
    transactionLog.push(data);

    alert("Thank you. Data accepted.");
    // } catch { // Need a parameter to receive the passed error
  } catch (error) {
    // Need a parameter to receive the passed error
    alert(error.message);
  }
}

function transactionTotal() {
  let total = 0;

  for (let i = 0; i < transactionLog.length; i++) {
    total += transactionLog[i];
  }

  return total;
}

logTransaction();
logTransaction();
logTransaction();

console.log(transactionTotal());
