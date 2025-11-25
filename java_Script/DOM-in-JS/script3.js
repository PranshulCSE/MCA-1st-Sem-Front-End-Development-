const { Fragment } = require("react/jsx-runtime");

const arr = ["Badam", "Saffron", "Kaaju", "Anjeer"];

const unorderElement = document.getElementById("listing");

// not Recomended
// for (let food of arr) {
//     const list = document.createElement("li");
//     list.textContent = food;
//     unorderElement.append(list);

// }


// Recomended Method
for (let food of arr) {
    const list = document.createElement("li");
    list.textContent = food;
    Fragment.append(list);
}
unorderElement.append(Fragment);