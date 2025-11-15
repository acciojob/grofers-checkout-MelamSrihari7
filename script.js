const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	const priceList=Document.querySelectorAll(.prices)
	let total=0;
	priceList.forEach((price)=>total+=Number(price.textContent));
	const table = document.querySelector("table");
  const row = document.createElement("tr");
  const cell = document.createElement("td");
      cell.id = "ans";
  cell.textContent = total;

  // Make it full-width (if table has 2 cols)
  cell.setAttribute("colspan", "2");
	 row.appendChild(cell);
  table.appendChild(row);
};

getSumBtn.addEventListener("click", getSum);

