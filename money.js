let balance = 0;

const balanceDisplay = document.getElementById('balance-display');
const amountInput = document.getElementById('amount-input');
const messageDisplay = document.getElementById('message');

function updateDisplay(msg, isError = false) {
    balanceDisplay.innerText = `$${balance}`;
    messageDisplay.innerText = msg;
    messageDisplay.className = isError ? "message error" : "message success";
    amountInput.value = ""; // Clear input field
}

function handleDeposit() {
    const amount = parseFloat(amountInput.value);
    
    if (isNaN(amount) || amount <= 0) {
        updateDisplay("Please enter a valid amount.", true);
        return;
    }

    balance += amount;
    updateDisplay(`Successfully deposited $${amount}`);
}

function handleWithdraw() {
    const amount = parseFloat(amountInput.value);

    if (isNaN(amount) || amount <= 0) {
        updateDisplay("Please enter a valid amount.", true);
        return;
    }

    if (amount > balance) {
        updateDisplay("Transaction Denied: Insufficient funds!", true);
    } else {
        balance -= amount;
        updateDisplay(`Successfully withdrew $${amount}`);
    }
}