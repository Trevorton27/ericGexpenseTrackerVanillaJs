// selectors
const addExpenseButton = document.querySelector('.addBtn');
const table = document.querySelector('#main-table');
const totalElement = document.querySelector('#total');
const dateInput = document.getElementById('date');
const amountInput = document.getElementById('amount');
const locationInput = document.getElementById('purchase');
const descriptionInput = document.getElementById('description');

const expenses = JSON.parse(localStorage.getItem('expenses')) || [];
// listeners

window.addEventListener('load', () => {
  expenses.forEach((expense) => {
    addRow(expense);
  });
});

const addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const newExpense = {
    id: Math.random(),
    time: dateInput.value,
    total: amountInput.value,
    location: locationInput.value,
    item: descriptionInput.value
  };
  addRow(newExpense);
  saveExpense(newExpense);
  updateAmount(newExpense);
});

//table.addEventListener('change', updateAmount);
//window.addEventListener('load', addRow);

// functions

function addRow(expense) {
  const id = expense.id;
  const tableRow = document.createElement('tr');
  tableRow.setAttribute('id', id);
  table.appendChild(tableRow);
  const deleteButton = document.createElement('BUTTON');
  const deleteButtonText = document.createTextNode('X');
  // creates new table cells top to bottom = right to left in table
  const tableCell1 = document.createElement('td');
  tableRow.appendChild(tableCell1);
  const tableCell2 = document.createElement('td');
  tableRow.appendChild(tableCell2);
  const tableCell3 = document.createElement('td');
  tableRow.appendChild(tableCell3);
  const tableCell4 = document.createElement('td');
  tableRow.appendChild(tableCell4);
  tableRow.appendChild(deleteButton);
  deleteButton.appendChild(deleteButtonText);
  deleteButton.setAttribute('class', 'delete-button');
  deleteButton.addEventListener('click', deleteRow);

  tableCell1.textContent = expense.time;
  tableCell2.textContent = expense.total;
  tableCell3.textContent = expense.location;
  tableCell4.textContent = expense.item;

  console.log(tableCell2.innerText);

  updateAmount();
}

function saveExpense(expense) {
  expenses.push(expense);
  pushToLocalStorage(expense);
}

function pushToLocalStorage(expense) {
  localStorage.setItem('expenses', JSON.stringify(expenses));
}
function deleteRow(e) {
  console.log('I fired.');
  e.preventDefault();
  let rowId = e.target.parentNode.id;
  console.log('row id: ', e.target.parentNode);
  for (let i = 0; i < expenses.length; i++) {
    if (expenses[i].id === Number(rowId)) {
      expenses.splice(i, 1);
      targetRow = document.getElementById(rowId);
      targetRow.parentNode.removeChild(targetRow);
      localStorage.setItem('expenses', JSON.stringify(expenses));
      updateAmount(expenses);
      if (expenses.length === 0) totalElement.textContent = '$' + 0;
    }
  }
}

function updateAmount(value) {
  let sum = 0;
  expenses.forEach(({ total }) => {
    sum += parseFloat(total);
    totalElement.textContent = sum;
  });
  // let total = 0;
  // const totalPlus = tableCell2.innerText;
  // total += Number(totalPlus);
  // totalElement.textContent = total.toFixed(2);
}
//display total of expenses .tofixed adds two decimal points.
