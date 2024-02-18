import React from 'react';


function HomePage() {
  return (
    <div className="container center">

 
        <main className="page-area">

            <div className="text-box">
        
                <h1 id="stay-on-track">Stay on track</h1>
                <p>
                    Do you know where you are spending your money? If you really stop to track it down,
                    you would get surprised! Proper budget management depends on real data... and this
                    app will help you with that!
                </p>
            </div>
    
            <div className="text-box">
     
                <h1 id="budget-alerts">Alerts</h1>
                <p>
                    What if your clothing budget ended? You will get an alert. The goal is to never go over the budget.
                </p>
            </div>
    
            <div className="text-box">
             
                <h1 id="financial-results">Results</h1>
                <p>
                    People who stick to a financial plan, budgeting every expense, get out of debt faster!
                    Also, they to live happier lives... since they expend without guilt or fear... 
                    because they know it is all good and accounted for.
                </p>
            </div>
    
            <div className="text-box">
          
                <h1 id="free-app">Chart</h1>
                <p>
                    <canvas id="myChart" width="400" height="400"></canvas>
                </p>
            </div>
            <div id="pie-chart"></div>

        </main>

    </div>
  );
}

export default HomePage;
