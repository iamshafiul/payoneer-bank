// login button event handler

const loginBtn = document.getElementById('login-id');
loginBtn.addEventListener("click", function() {
    const loginArea = document.getElementById('login_area');
    loginArea.style.display = 'none';
    const transactionArea = document.getElementById('transaction_area');
    transactionArea.style.display = 'block';
})


// deposit button event handler
let depositBtn = document.getElementById('deposit_button');
depositBtn.addEventListener('click', function() {
    const depositAmount = document.getElementById('deposit_amount').value;
    const depositNumber = parseFloat(depositAmount);


    spanUpdateText('current_balance', depositNumber);
    spanUpdateText('current_deposit', depositNumber);



    document.getElementById('deposit_amount').value = " ";
});


// withdraw button event handler 
const withdrawBtn = document.getElementById('withdraw');
withdrawBtn.addEventListener('click', function() {
    const withdrawAmount = document.getElementById('withdraw_amount').value;
    const withdrawNumber = parseFloat(withdrawAmount);
    spanUpdateText('current-withdraw', withdrawNumber);
    spanUpdateText('current_balance', -1 * withdrawNumber);
    document.getElementById('withdraw_amount').value = " ";
});

// update function 
const spanUpdateText = (id, depositNumber) => {
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const totalAmount = depositNumber + currentNumber;
    document.getElementById(id).innerText = totalAmount;
}