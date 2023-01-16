class Hastable {
  constructor(size) {
    this.data = new Array(size);
  }
  hashMethod(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }
  // TODO: agrega datos al hash
  set(key, value) {
    const address = this.hashMethod(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    return this.data;
  }
  get(key) {
    const address = this.hashMethod(key);
    const currentBucket = this.data[address];
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++){
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    }
    return undefined;
  }
}

// TODO: se indica que genere 50 espacios para guardar los datos
const myHashTable = new Hastable(50);
console.log(myHashTable.set("grapes", 10000));
console.log(myHashTable.set("apples", 9));
console.log(myHashTable.set("oranges", 2));
console.log(myHashTable.get("grapes"));
