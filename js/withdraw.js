/*
1. add withdraw button event handler
2. get withdraw amount by using getInputFieldValueById function
3. get previous withdraw amount by using getTextElementValueById function
4. calculate new withdraw total and set the value
4-5. set new withdraw total by using setTextElementValueById function
5. get previous balance total by using getTextElementValueById function
6. calculate new balance total
7. set balance total using setTextElementValueById
*/

document.getElementById("btn-withdraw").addEventListener("click", function () {
  const newWithdrawAmount = getInputFieldValueById("withdraw-field");
  
  if (newWithdrawAmount.toString() === "NaN" || newWithdrawAmount <= 0) {
    alert("Please enter an amount!");
    return;
  }
  const previousWithdrawTotal = getTextElementValueById("withdraw-total");
  const previousBalanceTotal = getTextElementValueById("balance-total");
  if (newWithdrawAmount <= previousBalanceTotal) {
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    setTextElementValueById("withdraw-total", newWithdrawTotal);
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    setTextElementValueById("balance-total", newBalanceTotal);
  } else {
    alert("You don't have enough money!");
    return;
  }
});
