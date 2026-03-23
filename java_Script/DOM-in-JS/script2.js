const unorderElement = document.getElementById("listing");
const list = document.createElement("li");
list.textContent = "Dudhu";
const list1 = document.createElement("li");
list1.textContent = "Badam";
unorderElement.after(list);
//To remove any Element
list.remove();