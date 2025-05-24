console.log("app4 js is executed");
let counter = { name: "Counter" };
let counterValue = 1;

function pureCounter(obj, value) {
  return `${obj.name} ${value}`;
}

console.log("pure counter: ", pureCounter(counter, counterValue));

function impureCounter(obj, value) {
  obj.name = obj.name + " Berglund";
  counterValue = counterValue + 1;
  return `${obj.name} ${value}`;
}
