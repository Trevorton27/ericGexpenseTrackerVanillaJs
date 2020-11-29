
// selectors
const addExpenseButton = document.querySelector('.addBtn');
const table = document.querySelector('#main-table');
const totalElement = document.querySelector('#total');

// listeners

document.querySelector('.addBtn').addEventListener('click', addRow);
table.addEventListener('click', deleteRow);
table.addEventListener('change', updateAmount);
window.addEventListener("load", addRow);


// functions

function addRow(){  //add row to table. uses insertAdjacentHTML method putting the html rows before the <tr> ends, hence beforeend
    table.insertAdjacentHTML('beforeend', `<tr class="table-row"> 
    <td>
        <input class="date" type="date">
    </td>
    <td>
        <input class="amount" type="number" value="0" min="0">
    </td>
    <td>
        <input class="purchase" type="text">
    </td>
    <td>
        <textarea class="description" name="" id="" cols="30" rows="2"></textarea>
    </td>
    <td>
        <button class="deleteBtn">delete</button>
    </td>
</tr>`); 
    updateAmount();
}

function deleteRow(event){
    if(event.target.tagName !== 'BUTTON') return;  // targets tagName that are NOT buttons and will return them.
    const row = event.target.closest("tr"); // targets closest table row
    row.parentElement.removeChild(row);  //action to remove specific row
    updateAmount(); 
}

function updateAmount(){
    let total = 0;
    const expenses = document.querySelectorAll('.amount'); // selects the amount class on line 23 as a node
    for(let i = 0; i < expenses.length; i++){ //iterate through expenses, as this variable was created to target the .amount class using the querySelectorAll. This inturn makes it an node/array
        expenses[i].value;
        total += parseFloat(expenses[i].value || 0); //parseFloat parses a string as a floating number
    }
    totalElement.textContent = total.toFixed(2); //display total of expenses .tofixed adds two decimal points. 

}
