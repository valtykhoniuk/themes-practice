export const marvelHeroes = [
  { name: "Thor" },
  { name: "Spider Man" },
  { name: "Deadpool" },
];

export const dcHeroes = [{ name: "Superman" }, { name: "Batman" }];

Array.prototype.heroesRender = function (folderName) {
  if (folderName !== "marvel" && folderName !== "dc") {
    throw new Error("Not correct folder");
  }

  const table = document.createElement("table");
  table.style.borderCollapse = "collapse";
  table.style.margin = "16px 0";
  table.style.width = "50%";
  table.style.textAlign = "center";
  table.style.fontFamily = "Arial, sans-serif";

  const thead = document.createElement("thead");
  const headRow = document.createElement("tr");

  ["Name", "Icon"].forEach((heading) => {
    const th = document.createElement("th");
    th.textContent = heading;
    th.style.border = "1px solid";
    th.style.padding = "8px 12px";
    headRow.appendChild(th);
  });

  thead.appendChild(headRow);
  table.appendChild(thead);

  const tbody = document.createElement("tbody");

  this.forEach((hero) => {
    const row = document.createElement("tr");

    const nameCell = document.createElement("td");
    nameCell.textContent = hero.name;
    nameCell.style.border = "1px solid";
    nameCell.style.padding = "8px 12px";

    const iconCell = document.createElement("td");
    iconCell.style.border = "1px solid";
    iconCell.style.padding = "8px 12px";
    iconCell.style.textAlign = "center";

    const fileName = hero.name.toLowerCase().replace(/\s+/g, "");
    const img = document.createElement("img");
    img.src = `src/images/${folderName}/${fileName}.svg`;
    img.alt = hero.name;
    img.width = 40;
    img.height = 40;

    iconCell.appendChild(img);
    row.appendChild(nameCell);
    row.appendChild(iconCell);
    tbody.appendChild(row);
  });

  table.appendChild(tbody);

  document.body.appendChild(table);
};
