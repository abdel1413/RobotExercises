class PGroup {
  constructor(array) {
    this.array = array;
  }

  //add : call has methd to check if element is there
  // if so then return the array
  //otherwise create a new pgroup with this element concatinated
  add(element) {
    if (this.array.has(element)) return this; //add
    return new PGroup(this.array.concat([element]));
  }

  //delete: call has mehtd to check if the element to
  //delet is there. return the array
  //if it is there then create a new pgroup without the
  //that specific element using filter
  delete(element) {
    if (!this.array.has(element)) return this;
    return new PGroup(this.array.filter((values) => values !== element));
  }

  //has : check whether or not the e is in the array
  has(e) {
    return this.array.includes(e);
  }
}

let a = PGroup.adding("a");
console.log(a);
