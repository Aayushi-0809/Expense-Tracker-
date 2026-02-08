let total = 0;

function addExpense() {
    let name = document.getElementById("expenseName").value;
    let amount = document.getElementById("expenseAmount").value;

    if (name === "" || amount === "") {
        alert("Please enter expense and amount");
        return;
    }

    let list = document.getElementById("expenseList");

    let li = document.createElement("li");
    li.innerText = name + " - ₹" + amount;

    list.appendChild(li);

    total = total + parseInt(amount);
    document.getElementById("total").innerText = total;

    document.getElementById("expenseName").value = "";
    document.getElementById("expenseAmount").value = "";
}
