function getInputValue(inputId){
   // get input value
   const inputField = document.getElementById(inputId);//id barbar change hbe
   const inputAmountText = inputField.value;
   const inputAmount= parseFloat(inputAmountText)
   // clear the input field
   inputField.value = ''
   return inputAmount
}
function updateTotalField(totalFieldId, amount){
   // debugger;
   //    get current deposit-get and update deposit total
   const total = document.getElementById(totalFieldId);
   const totalText = total.innerText//its keep just for parsefloat for previous
   const previousTotal = parseFloat(totalText)
   total.innerText = previousTotal + amount
}
function getCurrentBalance(){
   const balanceTotal = document.getElementById('balance-total')
   const balanceTotalText = balanceTotal.innerText;
   const previousBalanceTotal = parseFloat(balanceTotalText)
   return previousBalanceTotal
}
function updateBalance(balanceAmount, isAdd){
   const balanceTotal = document.getElementById('balance-total')
   const previousBalanceTotal = getCurrentBalance()
   if(isAdd == true){
      return balanceTotal.innerText = previousBalanceTotal + balanceAmount
   }
   else{
      balanceTotal.innerText = previousBalanceTotal - balanceAmount
   }
}
document.getElementById('deposit-button').addEventListener('click', function(){
const depositAmount = getInputValue('deposit-input')
if(depositAmount > 0){
   updateTotalField('deposit-total', depositAmount)
   updateBalance(depositAmount, true)
}

})
// step 1 - handle  withdraw button event
document.getElementById('withdraw-button').addEventListener('click', function(){
   const withDrawAmout = getInputValue('withdraw-input')
   const currentBalance = getCurrentBalance()
   if (withDrawAmout > 0 && withDrawAmout < currentBalance){
      updateTotalField('withdraw-total', withDrawAmout)
      updateBalance(withDrawAmout, false)
   }
   if(withDrawAmout > currentBalance){
      alert('you cannot withdraw more than what you have in your account')
   }

})