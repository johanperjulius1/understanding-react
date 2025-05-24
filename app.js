// declarative

const countApp = {
  getcount() {
    const countElement = document.getElementById("count");
    return Number(countElement.textContent);
  },
  setCount: (val) => {
    const countElement = document.getElementById("count");
    countElement.textContent = val;
  },
};

function setCount() {
  let count = countApp.getcount();
  countApp.setCount(count + 1);
}

// imperative

// console.log("re-render")
// let countElement = document.getElementById("count")

// function setCount (){
//     let count = Number(countElement.textContent)
//     count++
//     countElement.textContent=count
// }

// console.log("file is rendered")
// // console.log(document.children)
// // const countElement = document.getElementById("count")

// const main = document.getElementById("app")
// const button = document.createElement("button")
// const countTag = document.createElement("p")
// const countEm = document.createElement("em")
// countTag.id="countTag"

// button.textContent ="This is a button"
// countTag.textContent="The count is: "
// countEm.textContent=0

// main.appendChild(button)
// main.appendChild(countTag)
// countTag.appendChild(countEm)

// button.addEventListener("click", setCount)

// function setCount (){
//     console.log("button was clicked and click was logged")
//     let count = Number(countEm.textContent)
//     count++
//     countEm.textContent=count
// }
