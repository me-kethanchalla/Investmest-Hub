document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('ca_page').addEventListener('submit', function(event) {
        event.preventDefault();

        
        const ca = parseFloat(document.getElementById('ca').value);
        const non_ca = parseFloat(document.getElementById('non_ca').value);
        const cl = parseFloat(document.getElementById('cl').value);
        const non_cl = parseFloat(document.getElementById('non_cl').value);
        const equity = parseFloat(document.getElementById('equity').value);
        const share_price = parseFloat(document.getElementById('share_price').value);
        const totalRevenue = parseFloat(document.getElementById('totalRevenue').value);
        const grossProfit = parseFloat(document.getElementById('grossProfit').value);
        const netProfit = parseFloat(document.getElementById('netProfit').value);
        const outstandingShares = parseFloat(document.getElementById('outstandingShares').value);

        
        const ta = ca + non_ca;
        const tl = cl + non_cl;

        
        const npm = (netProfit / totalRevenue) * 100;
        const gpm = (grossProfit / totalRevenue) * 100; 
        const roa = (netProfit / ta) * 100; 
        const roe = (netProfit / equity) * 100; 
        const cr = ca / cl; 
        const dta = tl / ta; 
        const dte = tl / equity; 
        const eps = netProfit / outstandingShares; 
        const pe = share_price / eps; 
       

        
        let prof_an;
        if (npm > 10 && gpm > 30 && roa > 5 && roe > 15) {
            prof_an = "The company is well able to make their profits on their total revenue.";
        }
        else if (npm<5 && gpm<20 && roa <3 && roe <5){
            prof_an = "The company is very poor in making profits over the revenue generated and have to monitor the expenses carefully ";
        }
        else {
            prof_an = "The company needs to improve making more profits by managing their expenses properly on their revenue.";
        }

        
        let liq_an;
        if (cr > 1.5) {
            liq_an = "The company is able to pay off short-term debts within a year.";
        } 
        else if(cr <0.5 ){
            liq_an = "The company is in risk to pay off short-term debts within a year.";
        }
        else {
            liq_an = "The company has average ability to pay off short-term debts within a year.";

        }


        
        let lev_an;
        if (dta < 0.5 && dte < 1) {
            lev_an = "The company is in a safe position with its debts and loans.";
        }
        else if (dta >1 && dte >2){
            lev_an =  "The company is at a high risk due to its debts and loans.";
        }
        else {
            lev_an =  "The company is decently able to manage its debts and loans.";
        }


        let inv_an;
        if (pe < 20 ) {
            inv_an = "It is advicable to invest in the company.";
        } else if (pe >= 20 && pe <= 35 ) {
            inv_an = "The company is in a medium-risk position for investment.";
        }
        else {
            inv_an = "It might be riskier to invest in the company.";
        }

        
        const ratiosContainer = document.getElementById('ratios');
        ratiosContainer.innerHTML = `
            <h3><u>Profitability Ratios</u></h3>
            <p>Net Profit Margin (NPM): ${npm.toFixed(2)}%</p>
            <p>Gross Profit Margin (GPM): ${gpm.toFixed(2)}%</p>
            <p>Return on Assets (ROA): ${roa.toFixed(2)}%</p>
            <p>Return on Equity (ROE): ${roe.toFixed(2)}%</p>

            <h3><u>Liquidity Ratios</u></h3>
            <p>Current Ratio: ${cr.toFixed(2)}</p>
            

            <h3><u>Leverage Ratios</u></h3>
            <p>Debt to Asset Ratio: ${dta.toFixed(2)}</p>
            <p>Debt to Equity Ratio: ${dte.toFixed(2)}</p>

            <h3><u>Price Ratios</u></h3>
            <p>Earnings per Share (EPS): ${eps.toFixed(2)}</p>
            <p>Price-to-Earnings (P/E) Ratio: ${pe.toFixed(2)}</p>
            <hr>
            <h2><u>Financial Health Analysis</u></h2>

            <h4><u>Profitability Analysis</u>: ${prof_an}</h4>
            <h4><u>Liquidity Analysis</u>: ${liq_an}</h4>
            <h4><u>Leverage Analysis</u>: ${lev_an}</h4>
            <h4><u>Investment Analysis</u>: ${inv_an}</h4>
       
        `;
    });
});
