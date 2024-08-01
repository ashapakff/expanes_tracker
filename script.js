
function addExpense() {
    var date = document.getElementById("date").value;
    var category = document.getElementById("category").value;

    // If "Other" is selected, use the custom category input
    if (category === "Other") {
        category = document.getElementById("customCategory").value;
    }

    var amount = document.getElementById("amount").value;

    var table = document.getElementById("expenseList");
    var newRow = table.insertRow(-1);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);

    cell1.innerHTML = date;
    cell2.innerHTML = category;
    cell3.innerHTML = amount;
    cell4.innerHTML = '<button onclick="removeExpense(this)">Remove</button>';

    document.getElementById("date").value = "";
    document.getElementById("category").value = "";
    document.getElementById("customCategory").value = ""; // Clear custom category input
    document.getElementById("amount").value = "";

    updateFinancialSummary();
}

function removeExpense(button) {
    var row = button.parentNode.parentNode;
    var amount = parseFloat(row.cells[2].innerHTML); // Get the amount of the removed expense
    row.parentNode.removeChild(row);

    // Update total expenses
    updateFinancialSummary();
}

function addIncome() {
    var income = parseFloat(document.getElementById("income").value);

    if (isNaN(income)) {
        alert("Please enter a valid number for income.");
        return;
    }

    alert("Monthly Income added: ₹" + income.toFixed(2));

    // Update income and remaining balance
    updateFinancialSummary();
}

function updateFinancialSummary() {
    var totalExpenses = calculateTotalExpenses();
    var income = parseFloat(document.getElementById("income").value);

    if (isNaN(income)) {
        return;
    }

    var remainingBalance = income - totalExpenses;

    document.getElementById("totalExpenses").innerText = "Total Expenses: ₹" + totalExpenses.toFixed(2);
    document.getElementById("incomeDisplay").innerText = "Income: ₹" + income.toFixed(2);
    document.getElementById("remainingBalance").innerText = "Your savings: ₹" + remainingBalance.toFixed(2);
    document.getElementById("financialSummarySection").style.display = "block";
}

function calculateTotalExpenses() {
    var expenseRows = document.getElementById("expenseList").rows;
    var totalExpenses = 0;

    for (var i = 0; i < expenseRows.length; i++) {
        var amount = parseFloat(expenseRows[i].cells[2].innerHTML);

        if (!isNaN(amount)) {
            totalExpenses += amount;
        }
    }

    return totalExpenses;
}

window.addEventListener('beforeunload', function(e) {
    var message = 'Are you sure you want to leave?';
    e.returnValue = message;
});
