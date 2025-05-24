class LinkedListNode {
  constructor(val, next = null) {
    this.value = val;
    this.next = next;
  }
}

class LinkedList {
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

    return this
  }

  print(){
    let currentNode = this.head;
    while(currentNode){
      console.log(currentNode.value)
      currentNode=currentNode.next
    }
  }
}

let berglundsLinkedList = new LinkedList()
berglundsLinkedList.append("Per")
berglundsLinkedList.append("Bodil")
berglundsLinkedList.append("Jacob")
berglundsLinkedList.append("Caroline")
berglundsLinkedList.append("Johan")
berglundsLinkedList.print()
