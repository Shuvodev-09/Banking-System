document.getElementById('deposit-button').addEventListener('click',function() {
    const depositInput = document.getElementById('deposit-input');
    const newDepsitText = depositInput.value;
    const newDepsitAmmount = parseFloat(newDepsitText);

    // validate input
    if(typeof(newDepsitAmmount) == 'false' | newDepsitText == ''){
        document.getElementById('filled-deposit-error').style.display = 'block';
        return
    }
    document.getElementById('filled-deposit-error').style.display = 'none';

// minimum value solve
    if (newDepsitAmmount < 1) {
        document.getElementById('min-deposit-error').style.display = 'block';
        return
    }
    document.getElementById('min-deposit-error').style.display = 'none';
    

// deposit total
    const depositTotal = document.getElementById('deposit-total');
    const previousDepositText = depositTotal.innerText;
    const previousDepositTotal = parseFloat(previousDepositText)

    const newDepositeTotal = previousDepositTotal + newDepsitAmmount;
    depositTotal.innerText = newDepositeTotal;

    // balance total
    const balanceTotal = document.getElementById('balance-total');
    const priviousBalanceTotalText = balanceTotal.innerText;
    const priviousBalanceTotalAmmont = parseFloat(priviousBalanceTotalText);

    const newBalanceTotal = priviousBalanceTotalAmmont + newDepsitAmmount;
    balanceTotal.innerText = newBalanceTotal;

    // clear value
    depositInput.value = ''

})

// withdraw 
document.getElementById('withdra-button').addEventListener('click',function(){
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawInputText = withdrawInput.value;
    const withdrawInputAmmount = parseFloat(withdrawInputText);

    // withdraw input error solve
    if(typeof(withdrawInputAmmount) == 'false' | withdrawInputText == ''){
        document.getElementById('withdraw-input-error').innerText = 'withdraw input required'
        return
    }
    document.getElementById('withdraw-input-error').innerText = ''

    // minimum value error solve
    if (withdrawInputAmmount <= 9) {
        document.getElementById('withdraw-input-error').innerText = 'withdraw should be minimum 10';
        return
    }
    document.getElementById('withdraw-input-error').innerText = '';
    

    
   const withdrawTotal = document.getElementById('withdraw-total');
   const newWithdrawTotalText = withdrawTotal.innerText;
   const newWithdrawTotalAmmount = parseFloat(newWithdrawTotalText);


   const newWithdrawTotal = newWithdrawTotalAmmount + withdrawInputAmmount;
   withdrawTotal.innerText = newWithdrawTotal;

  
    // withdraw total
    const balanceTotal = document.getElementById('balance-total');
    const priviousBalanceTotalText = balanceTotal.innerText;
    const priviousBalanceTotalAmmont = parseFloat(priviousBalanceTotalText);

    // withdraw should be less than total balance

    if(priviousBalanceTotalAmmont < withdrawInputAmmount){
        document.getElementById('withdraw-input-error').innerText = 'withdraw ammount should be less than your balance';
        return
    }
    document.getElementById('withdraw-input-error').innerText = '';

    const newBalanceTotal = priviousBalanceTotalAmmont - withdrawInputAmmount;
    balanceTotal.innerText = newBalanceTotal;

    // clear value
    withdrawInput.value = ''

})