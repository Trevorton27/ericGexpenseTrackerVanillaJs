
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



function addRow(){
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
        <button>delete</button>
    </td>
</tr>`);
    updateAmount();
}

function deleteRow(event){
    if(event.target.tagName !== 'BUTTON') return;
    const row = event.target.closest("tr")
    row.parentElement.removeChild(row);
    updateAmount();
}

function updateAmount(){
    let total = 0;
    const expenses = document.querySelectorAll('.amount');
    for(const e of expenses){
        total += parseFloat(e.value || 0);
    }
    totalElement.textContent = total.toFixed(2);

}

// for (var i = 0; i < expenses.length; i++){
    //expenses[i].value;
//}