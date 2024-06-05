document.getElementById('transactionForm').addEventListener('submit', function(event) {
    event.preventDefault();
    addTransaction(document.getElementById('description').value, parseFloat(document.getElementById('amount').value));
    updateChart();
   });
   
   function addTransaction(description, amount) {
    var table = document.getElementById('transactions');
   
  
   
   ```javascript
   var row = table.insertRow();
   var cell1 = row.insertCell(0);
   var cell2 = row.insertCell(1);
   var cell3 = row.insertCell(2);
   
   cell1.textContent = new Date().toLocaleDateString();
   cell2.textContent = description;
   cell3.textContent = amount.toFixed(2);
   }
   