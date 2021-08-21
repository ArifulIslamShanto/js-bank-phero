// deposit 
document.getElementById('deposit-button').addEventListener('click', function(){
    const depositInput = document.getElementById('deposit-input');
    const newdepositAmount = depositInput.value;

    const depositTotal = document.getElementById('deposit-amount');

    const previousDepostiAmount = depositTotal.innerText;
    const newDepositTotal = parseFloat(previousDepostiAmount) + parseFloat(newdepositAmount);

    depositTotal.innerText = newDepositTotal;

// balance
const balanceTotal = document.getElementById('balance-total');
const prebalanceTotal = balanceTotal.innerText;

const newbalance = parseFloat(prebalanceTotal) + parseFloat (newdepositAmount);
balanceTotal.innerText = newbalance;

    depositInput.value ='';
})

// withdraw 
document.getElementById('withdraw-button').addEventListener('click', function(){
    const withdrawInput = document.getElementById('withdraw-input');
    const newwithdrawAmount = withdrawInput.value;

    const withdrawTotal = document.getElementById('withdraw-total');

    const previouswithdrawAmount = withdrawTotal.innerText;
    const newwithdrawTotal = parseFloat(previouswithdrawAmount) + parseFloat(newwithdrawAmount);

    withdrawTotal.innerText = newwithdrawTotal;
// balance 
    const balanceTotal = document.getElementById('balance-total');
const prebalanceTotal = balanceTotal.innerText;

const newbalance = parseFloat(prebalanceTotal)-parseFloat(newwithdrawAmount);
balanceTotal.innerText = newbalance;

    withdrawInput.value = '';
})

