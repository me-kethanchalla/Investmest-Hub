document.getElementById('fv').addEventListener('submit', function(event) {
    event.preventDefault();

    
    const presentValue = parseFloat(document.getElementById('present_value').value);
    const interestRate = parseFloat(document.getElementById('interest_rate').value) / 100;
    const timePeriod = parseFloat(document.getElementById('time_period').value);
    const periodicDeposit = parseFloat(document.getElementById('periodic_deposit').value);

    
    let startBalance = presentValue;
    let totalInterest = 0;
    const tableBody = document.querySelector('#result_table tbody');
    tableBody.innerHTML = ''; 

    for (let year = 1; year <= timePeriod; year++) {
        const interest = startBalance * interestRate;
        const endBalance = startBalance + interest + periodicDeposit;
        totalInterest += interest;

        
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${year}</td>
            <td>${startBalance.toFixed(2)}</td>
            <td>${interest.toFixed(2)}</td>
            <td>${periodicDeposit.toFixed(2)}</td>
            <td>${endBalance.toFixed(2)}</td>
        `;
        tableBody.appendChild(row);

        startBalance = endBalance;
    }

    
    document.getElementById('total_future_value').textContent = `Final Future Value: $${startBalance.toFixed(2)}`;
    document.getElementById('total_interest').textContent = `Total Interest Earned: $${totalInterest.toFixed(2)}`;
});
