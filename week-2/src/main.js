import "./style.css";
import { marvelHeroes, dcHeroes } from "./heroes.js";
import {
  Product,
  transformToProductObjects,
  kitchenProducts,
  devicesProducts,
  cosmeticsProducts,
} from "./products.js";

document.body.style.display = "flex";
document.body.style.flexDirection = "column";
document.body.style.alignItems = "center";
document.body.style.justifyContent = "center";

//task heroes table
dcHeroes.heroesRender("dc");
marvelHeroes.heroesRender("marvel");

//task product constructor
const kitchen = transformToProductObjects("kitchen", kitchenProducts);
const devices = transformToProductObjects("devices", devicesProducts);
const cosmetics = transformToProductObjects("cosmetics", cosmeticsProducts);

const table = document.createElement("table");
table.style.borderCollapse = "collapse";
table.style.margin = "20px auto";
table.style.width = "60%";
table.style.textAlign = "center";
table.style.fontFamily = "Arial, sans-serif";

const thead = document.createElement("thead");
const headRow = document.createElement("tr");

["Image", "Name", "Price"].forEach((heading) => {
  const th = document.createElement("th");
  th.textContent = heading;
  th.style.border = "1px solid";
  th.style.padding = "8px 12px";
  headRow.appendChild(th);
});

thead.appendChild(headRow);
table.appendChild(thead);

const tbody = document.createElement("tbody");

[kitchen, devices, cosmetics].forEach((category) => {
  category.forEach((product) => product.render(tbody));
});

table.appendChild(tbody);
document.body.appendChild(table);

// myFilter

Array.prototype.myFilter = function (callback, thisArg) {
  if (typeof callback !== "function") {
    throw new TypeError(`${callback} is not a function`);
  }

  const result = [];
  const arr = this;

  for (let i = 0; i < arr.length; i++) {
    if (i in arr) {
      if (callback.call(thisArg, arr[i], i, arr)) {
        result.push(arr[i]);
      }
    }
  }

  return result;
};
