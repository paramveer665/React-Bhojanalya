const money = [
  { price: 0, name: "rakesh" },
  { price: 1, name: "ramesh" },
  { price: 0, name: "suresh" },
];

const total = money.reduce((total, adder) => total + adder);
console.log(total);
