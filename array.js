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

}

const myArray = new MyArray();

console.log(myArray.push("Daniel"));

console.log(myArray.push("John"));

console.log(myArray.get(1));
