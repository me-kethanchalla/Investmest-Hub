document.getElementById('npv').addEventListener('submit', function(event) {
    event.preventDefault();

    
    const initial_invest = parseFloat(document.getElementById('initial_invest').value);
    const interest_rate = parseFloat(document.getElementById('interest_rate').value) / 100;
    const tp = parseFloat(document.getElementById('tp').value);
    const cash_flows = document.getElementById('cash_flows').value.split(',').map(parseFloat);

    



    if (cash_flows.length !== tp) {
        alert('Please enter the correct number of cash flows.');
        return;
    }


    let npv = -initial_invest;
    const tableBody = document.querySelector('#result_table tbody');
    tableBody.innerHTML = ''; //(data clearing for tha table)

    for (let year = 1; year <= tp; year++) {
        const interest_money = cash_flows[year - 1] / Math.pow(1 + interest_rate, year);
        npv += interest_money;

        
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${year}</td>
            <td>${cash_flows[year - 1].toFixed(2)}</td>
            <td>${interest_money.toFixed(2)}</td>
        `;
        tableBody.appendChild(row);
    }

    
    document.getElementById('final-npv').textContent = `Net Present Value (NPV): $${npv.toFixed(2)}`;
});
