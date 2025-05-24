class LinkedListNode {
  constructor(val, next = null) {
    this.value = val;
    this.next = next;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(val) {
    const newNode = new LinkedListNode(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;

      return this;
    }

    this.tail.next = newNode;
    this.tail = newNode;

    return this;
  }

  pop() {
    let originalHead = this.head;
    if (this.head) {
      this.head = this.head.next;
    }
    return originalHead ? originalHead.value : null;
  }

  print() {
    let currentNode = this.head;
    while (currentNode) {
      console.log(currentNode.value);
      currentNode = currentNode.next;
    }
  }
}

let berglundsQueue = new Queue();
berglundsQueue.append("Per");
berglundsQueue.append("Bodil");
berglundsQueue.append("Jacob");
berglundsQueue.append("Caroline");
berglundsQueue.append("Johan");
berglundsQueue.print();
console.log(berglundsQueue.pop());

const obj1 = { numOfClicks: 1 };
const obj2 = { ...obj1, numOfClicks: obj1.numOfClicks + 1 };
console.log(obj2);
