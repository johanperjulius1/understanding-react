console.log("app2 is rendered");
// Assignment 1

// const newArr = [];
// const factorial = (integer) => {
//   if (integer === 0) {
//     return console.log(newArr.reduce((acc, curr) => acc * curr));
//   }
//   newArr.push(integer);
//   factorial(integer - 1);
// };

// Your function should find all values associated with "id" key
// findAllValues(data, "id") should return [1, 2, "meta-2", 3, 4]

// Assignment 2
// function countDown(num) {
//   num !== 1 && console.log(num);
//   num === 1 && console.log("Blastoff!");
//   num !== 1 && countDown(num - 1);
// }

// countDown(10);

//   Assignment 3 - sum array

// function sumArray(arr, i = 0, sum = 0) {
//   sum += arr[i];
//   i++;
//   if (i >= arr.length) {
//     return sum;
//   }
//   return sumArray(arr, i, sum);
// }

let markup = {
  type: "article",
  children: [
    {
      type: "h2",
      children: [
        {
          type: "text",
          value: "Counter",
        },
      ],
    },
    {
      type: "p",
      children: [
        {
          type: "text",
          value: "Counter ",
        },
        {
          type: "strong",
          children: [
            {
              type: "em",
              children: [
                {
                  type: "text",
                  value: "1",
                },
              ],
            },
          ],
        },
        {
          type: "text",
          value: " times",
        },
      ],
    },
    {
      type: "button",
      children: [
        {
          type: "text",
          value: "Click me",
        },
      ],
    },
  ],
};

const main = document.getElementById("app");

function render(obj, parentDOMNode) {
  let newDOMNode =
    obj.type === "text"
      ? document.createTextNode(obj.value)
      : document.createElement(obj.type);
  if (obj.children) {
    obj.children.forEach((child) => {
      render(child, newDOMNode);
    });
  }
  console.log(parentDOMNode);
  parentDOMNode.appendChild(newDOMNode);
}

render(markup, main);
