export function Product(category, type, price) {
  this.category = category;
  this.type = type;
  this.price = price;
}

Product.prototype.render = function (tbody) {
  const row = document.createElement("tr");

  const iconCell = document.createElement("td");
  iconCell.style.border = "1px solid";
  iconCell.style.padding = "8px 12px";
  iconCell.style.textAlign = "center";

  const fileName = this.type.toLowerCase().replace(/\s+/g, "");
  const img = document.createElement("img");
  img.src = `src/images/${this.category}/${fileName}.svg`;
  img.alt = this.type;
  img.width = 40;
  img.height = 40;

  iconCell.appendChild(img);

  const typeCell = document.createElement("td");
  typeCell.textContent = this.type;
  typeCell.style.border = "1px solid";
  typeCell.style.padding = "8px 12px";

  const priceCell = document.createElement("td");
  priceCell.textContent = !Array.isArray(this.price)
    ? `${this.price} USD`
    : `${this.price[0]} - ${this.price[1]} USD`;
  priceCell.style.border = "1px solid";
  priceCell.style.padding = "8px 12px";

  row.appendChild(iconCell);
  row.appendChild(typeCell);
  row.appendChild(priceCell);
  tbody.appendChild(row);
};

export const kitchenProducts = [
  { type: "grater", price: 10 },
  { type: "pastry-bag", price: 25 },
  { type: "scale", price: 5 },
  { type: "whisk", price: 15 },
];

export const devicesProducts = [
  { type: "desktop", price: [100, 1000] },
  { type: "laptop", price: [50, 1500] },
  { type: "smartphone", price: [80, 2000] },
  { type: "tablet", price: [20, 1300] },
];

export const cosmeticsProducts = [
  { type: "blush", price: 100 },
  { type: "eyeshadow", price: 50 },
  { type: "lipstick", price: 80 },
  { type: "nail-polish", price: 200 },
  { type: "perfume", price: 300 },
];

export function transformToProductObjects(categoryName, productsArray) {
  return productsArray.map(
    (item) => new Product(categoryName, item.type, item.price)
  );
}
