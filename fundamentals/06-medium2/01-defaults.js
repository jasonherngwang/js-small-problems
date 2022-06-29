/* 
Number 0 is a falsey value
*/

function processOrder(price, quantity, discount, serviceCharge, tax) {
  if (!quantity) {
    quantity = 1;
  }

  if (!discount) {
    discount = 0;
  }

  if (!serviceCharge) {
    serviceCharge = 0.1;
  }

  if (!tax) {
    tax = 0.15;
  }

  return price * quantity * (1 - discount) * (1 + serviceCharge) * (1 + tax);
}

console.log(processOrder(100)); // 126.5
console.log(processOrder(100, 1, 0, 0, 0)); // Should be 100 but overwrites my zeroes with defaults. 0 is falsey.

function processOrder2(price, quantity, discount, serviceCharge, tax) {
  quantity = quantity || 1;
  discount = discount || 0;
  serviceCharge = serviceCharge || 0.1;
  tax = tax || 0.15;

  return price * quantity * (1 - discount) * (1 + serviceCharge) * (1 + tax);
}

console.log(processOrder2(100)); // 126.5
console.log(processOrder2(100, 1, 0, 0, 0));

function processOrder3(
  price,
  quantity = 1,
  discount = 0,
  serviceCharge = 0.1,
  tax = 0.15
) {
  return price * quantity * (1 - discount) * (1 + serviceCharge) * (1 + tax);
}

console.log(processOrder3(100)); // 126.5
console.log(processOrder3(100, 1, 0, 0, 0));
