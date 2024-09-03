import "./styles.css";

//document.addEventListener("DOMContentLoaded", () => {
const table = document.getElementById("excel-table").querySelector("tbody");
const columnHeaders = document
  .getElementById("excel-table")
  .querySelector("thead tr");

const numRows = 30;
const numCols = 30;

//created column headers
const emptyTh = document.createElement("th");
emptyTh.innerText = "";
columnHeaders.appendChild(emptyTh);

for (let col = 1; col <= numCols; col++) {
  const th = document.createElement("th");
  //   th.innerText = col === 0 ? "" : String.fromCharCode(64 + col); //65=A 66=B

  th.innerText = getColumnName(col - 1);
  columnHeaders.appendChild(th);
}

function getColumnName(index) {
  let columnName = "";
  while (index >= 0) {
    columnName = String.fromCharCode((index % 26) + 65) + columnName;
    index = Math.floor(index / 26) - 1;
  }
  return columnName;
}

for (let row = 1; row <= numRows; row++) {
  const tr = document.createElement("tr");
  const th = document.createElement("th");
  th.innerText = row; //65=A 66=B
  tr.appendChild(th);

  //input cells
  for (let col = 0; col < numCols; col++) {
    const td = document.createElement("td");
    // const input = document.createElement("input");
    // input.type = "text";
    // td.appendChild(input);
    td.setAttribute("contentEditable", true);
    tr.appendChild(td);
  }

  table.appendChild(tr);
}

table.addEventListener("input", (event) => {});
