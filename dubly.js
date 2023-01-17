class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}


class MyDoublyListLinked {
  //TODO: se genera la primera vez y pide el primer valor
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      prev: null,
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

  prepend(value) {
    const newNode = new Node(value);
    //TODO: agrega el nodo de la cola
    newNode.prev = this.tail;
    // TODO: agrega el nodo de la cabeza
    newNode.next = this.head;
    //TODO: setea la nueva cabeza
    this.head = newNode;
    //TODO: incrementea el tamaño
    this.length++;
    //TODO: retorna todo lo que esta en scope de la funcion
    return this;
  }
}
const myDoublyLinkedList = new MyDoublyListLinked(1);
console.log(myDoublyLinkedList.append(2));
console.log(myDoublyLinkedList.append(3));
console.log(myDoublyLinkedList.append(4));
