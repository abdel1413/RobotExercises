class PGroup {
  constructor(array) {
    this.array = array;
  }

  //add : call has methd to check if element is there
  // if so then return the array
  //otherwise create a new pgroup with this element concatinated
  add(element) {
    if (this.has(element)) {
      console.log("inside add", this);
      return this;
    } //add
    return new PGroup(this.array.concat([element]));
  }

  //delete: call has mehtd to check if the element to
  //delet is not there. return the array
  //if it is there then create a new pgroup without the
  //that specific element using filter
  delete(element) {
    if (!this.has(element)) {
      console.log("inside delete", this);
      return this;
    }
    return new PGroup(this.array.filter((values) => values !== element));
  }

  //has : check whether or not the e is in the array
  has(e) {
    return this.array.includes(e);
  }
}

//  create an empty instance PGroup.empty,
// that can be used as a starting value
PGroup.empty = new PGroup([]);
console.log(PGroup.empty); //PGroup {array: Array(0)}
let a = PGroup.empty.add("a");
console.log(PGroup.empty); //a added PGroup {array: Array(1)}
console.log(a);
let ab = a.add("b");
console.log("b added to a", ab); //b added to a PGroup {array: Array(2)}

//note if the unstruction were note given, we could do as follows
let pg = new PGroup([]);
console.log("pg", pg);
let c = pg.add("c");
console.log("c added to pg", c); //c added to pg PGroup {array: Array(1)}
