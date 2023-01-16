// TODO: Creacción de array de forma tradicional
// const array = ["Daniel", "John", "Jane", "Mary", "Peter", "Paul", "Laura"];
// console.log(array);
// array.push("Luis");

// console.log(array);


class MyArray {
  constructor() {
    //TODO: ayuda para tener el conteo para cuantos elementos se agrega en el array
    this.length = 0;
    this.data = {};
  }
  //TODO: numero del elemento que necesite
  get(index) {
    return this.data[index];
  }
  //TODO: item elemento a agregar
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.data;
  }
  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }
  delete(index) {
    const item = this.data[index];
    this.shiftIndex(index);
    return item;
  }
  shiftIndex(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;

  }

  unshift(item) {
    if(!item){
      return this.length;
    }

    if(this.length === 0){
      this.data[0] = item;
      this.length++;
      return this.length;
    }

    for(let i = this.length; i > 0; i--){
      this.data[i] = this.data[i - 1];
    }

    this.data[0] = item;

    this.length++;
    return this.length;
  }
}

const myArray = new MyArray();

console.log(myArray.push("Daniel"));

console.log(myArray.push("John"));

console.log(myArray.push("Jane"));

console.log(myArray.get(1));

console.log(myArray.pop());

console.log(myArray.delete(0));

console.log(myArray);
