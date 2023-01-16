//TODO: asi se guarda  1 --> 2 --> 3 --> 4 --> 5 --> null


let singleLinkedList = {
  head: {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: {
            value: 5,
            next: null
          }
        }
      }
    }
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class MySingleListLinked {
  //TODO: se genera la primera vez y pide el primer valor
  constructor(value) {
    this.head = {
      value: value,
      next: null
    }
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
}


let singly = new MySingleListLinked(1);
console.log(singly.append(2));
console.log(singly.append(3));
console.log(singly.append(4));
console.log(singly.append(5));
console.log(singly.append(6));
