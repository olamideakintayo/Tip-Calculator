function calculate() {
    var billAmount = Number(document.getElementById("billAmount").value)
    var tipAmount = document.getElementById("tipAmount")
    tipAmount = Number(tipAmount.value)
    tipAmount = tipAmount / 100; // i.e 9/100 = 0.09

    var totalTip = billAmount * tipAmount
    var tipHtml = "<h3>Total tip: <small>$" + 
     totalTip.toFixed(2) + 
     "</small></h3>"
    document.querySelector(".tip-amount").innerHTML = tipHtml

    var totalBillAmount = totalTip + billAmount
    var billHtml = "<h3>Total bill with tip: <small>$" + 
     totalBillAmount.toFixed(2) + 
       "</small></h3>";  
       document.querySelector(".total-with-tip").innerHTML = billHtml    
 }