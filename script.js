
let transactions = [];

function addTransaction() {

    const title = document.getElementById("title").value.trim();
    const amount = Number(document.getElementById("amount").value);
    const type = document.getElementById("type").value;

    if (title === "" || !Number.isFinite(amount) || amount <= 0) {
        alert("Please enter valid details!");
        return;
    }

    transactions.push({
        title: title,
        amount: amount,
        type: type
    });

    document.getElementById("title").value = "";
    document.getElementById("amount").value = "";

    updateDisplay();
}

function deleteTransaction(index) {
    transactions.splice(index, 1);
    updateDisplay();
}

function updateDisplay() {

    let income = 0;
    let expense = 0;

    const history = document.getElementById("history");
    history.innerHTML = "";

    transactions.forEach((item, index) => {

        if (item.type === "income") {
            income += item.amount;
        } else {
            expense += item.amount;
        }

        const li = document.createElement("li");

        const name = document.createElement("span");
        name.textContent = item.title + " - ₹" + item.amount;

        const button = document.createElement("button");
        button.textContent = "Delete";
        button.className = "delete";

        button.onclick = function() {
            deleteTransaction(index);
        };

        li.appendChild(name);
        li.appendChild(button);

        history.appendChild(li);
    });

    document.getElementById("income").textContent = "₹" + income;
    document.getElementById("expense").textContent = "₹" + expense;
    document.getElementById("balance").textContent = "₹" + (income - expense);
}
