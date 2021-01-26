// login button event handler

let loginBtn = document.getElementById('login-id');
loginBtn.addEventListener("click", function() {
    let loginArea = document.getElementById('login_area');
    loginArea.style.display = 'none';
    let transactionArea = document.getElementById('transaction_area');
    transactionArea.style.display = 'block';
})


// deposit button deposit event handler
let depositBtn = document.getElementById('deposit_button');
depositBtn.addEventListener('click', function() {
    let depositAmount = document.getElementById('deposit_amount').value;
    let depositNumber = parseFloat(depositAmount);

    let currentDeposit = document.getElementById('current_deposit').innerText;
    let currentDepositNumber = parseFloat(currentDeposit);

    const total = depositNumber + currentDeposit
    document.getElementById('current_deposit').innerText = total;
});