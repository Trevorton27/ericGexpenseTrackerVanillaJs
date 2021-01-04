// selectors
const addExpenseButton = document.querySelector('.addBtn');
const table = document.querySelector('#main-table');
const totalElement = document.querySelector('#total');
const dateInput = document.getElementById('date');
const amountInput = document.getElementById('amount');
const locationInput = document.getElementById('purchase');
const descriptionInput = document.getElementById('description');
// listeners

const addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const newExpense = {
    time: dateInput.value,
    total: amountInput.value,
    location: locationInput.value,
    item: descriptionInput.value
  };
  addRow(newExpense);
});
table.addEventListener('click', deleteRow);
table.addEventListener('change', updateAmount);
//window.addEventListener('load', addRow);

// functions
const tableCell2 = document.createElement('td');

function addRow(expense) {
  const tableRow = document.createElement('tr');
  table.appendChild(tableRow);
  const deleteButton = document.createElement('BUTTON');
  const deleteButtonText = document.createTextNode('X');
  // creates new table cells top to bottom = right to left in table
  const tableCell1 = document.createElement('td');
  tableRow.appendChild(tableCell1);

  tableCell2.setAttribute('class', 'amount');
  tableCell2.setAttribute('type', 'number');
  tableCell2.setAttribute('value', '0');
  tableCell2.setAttribute('min', '0');
  tableRow.appendChild(tableCell2);
  const tableCell3 = document.createElement('td');
  tableRow.appendChild(tableCell3);
  const tableCell4 = document.createElement('td');
  tableRow.appendChild(tableCell4);
  tableRow.appendChild(deleteButton);
  deleteButton.appendChild(deleteButtonText);
  deleteButton.setAttribute('class', 'delete-button');

  tableCell1.textContent = expense.time;
  tableCell2.textContent = expense.total;
  tableCell3.textContent = expense.location;
  tableCell4.textContent = expense.item;

  console.log(tableCell2.innerText);

  updateAmount();
}

function deleteRow(event) {
  if (event.target.tagName !== 'BUTTON') return; // targets tagName that are NOT buttons and will return them.
  const row = event.target.closest('tr'); // targets closest table row
  row.parentElement.removeChild(row); //action to remove specific row
  updateAmount();
}

function updateAmount() {
  let total = 0;
  const totalPlus = tableCell2.innerText;
  total += Number(totalPlus);
  totalElement.textContent = total.toFixed(2);
}
//display total of expenses .tofixed adds two decimal points.
