// Creating a new Document in JavaScript
const newElem = document.createElement("h2");
newElem.textContent = "Hello Python!!";
newElem.id = "second";
// Placing Created Object in our Screen
const elem = document.getElementById("first");
elem.after(newElem);
// elem.before(newElem);
// Creating Second Element
const newElem2 = document.createElement("h3");
newElem2.textContent = "My Birthday Is Coming Soon";
newElem2.id = "third";
// newElem2.className="h3"; Not Remonded way to assign Class Name

newElem2.classList.add("first");
newElem2.classList.add("Second");
newElem2.classList.remove("Second");

newElem2.style.backgroundColor = "pink";
newElem2.style.color = "blue";

elem.after(newElem2);

const list = document.createElement("li");
list.textContent = "Dudhu";
const unorderElement = document.getElementById("listing");

unorderElement.append(list);

const list2 = document.createElement("li");
list2.textContent = "Milk";

// unorderElement.append(list2);
unorderElement.prepend(list2);