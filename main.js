import { LinkedList } from "./LinkedList.js";


// example uses class syntax - adjust as necessary
const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString());

list.prepend("hippo");

console.log(list.toString());
console.log(list.size());
console.log(list.head);
console.log(list.tail);
console.log(list.at(3));
console.log(list.contains('snake'));
console.log(list.insertAt('bat',1));
console.log(list.toString());

console.log(list.removeAt(1));
console.log(list.toString());
