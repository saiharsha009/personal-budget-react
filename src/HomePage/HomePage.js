import React from "react";
import D3Chart from "../D3Chart/D3Chart";
import PieChart from "../Chart/PieChart";

function HomePage() {
  return (
    <main className="center" id="main">
      <div className="page-area">
        <div>
          <h2>Stay on track</h2>
          <p>
            Do you know where you are spending your money? If you really stop to
            track it down, you would get surprised! Proper budget management
            depends on real data... and this app will help you with that!
          </p>
        </div>

        <div>
          <h2>Alerts</h2>
          <p>
            What if your clothing budget ended? You will get an alert. The goal
            is to never go over the budget.
          </p>
        </div>

        <div>
          <h2>Results</h2>
          <p>
            People who stick to a financial plan, budgeting every expense, get
            out of debt faster! Also, they to live happier lives... since they
            expend without guilt or fear... because they know it is all good and
            accounted for.
          </p>
        </div>

        <div>
          <h2>Free</h2>
          <p>This app is free!!! And you are the only one holding your data!</p>
        </div>

        <div>
          <h2>Stay on track</h2>
          <p>
            Do you know where you are spending your money? If you really stop to
            track it down, you would get surprised! Proper budget management
            depends on real data... and this app will help you with that!
          </p>
        </div>

        <div>
          <h2>Alerts</h2>
          <p>
            What if your clothing budget ended? You will get an alert. The goal
            is to never go over the budget.
          </p>
        </div>

        <div>
          <h2>Understanding the chart</h2>
          <p>
            This section provides you better understanding of what your
            financial numbers look like.
          </p>
        </div>

        {/* <section>
          <div>
            <h2>Budget view using Chart.js</h2>
            <figure>
              <figcaption>Chart showing budget distribution</figcaption>
              <canvas id="myChart" width="400" height="400" alt=""></canvas>
            </figure>
          </div>
        </section>

        <section>
          <div>
            <h2>Budget view using D3.js</h2>
            <div id="d3Chart"></div>
          </div>
        </section> */}

        <div id="chart-container">
            <h1>Pie Chart</h1>
          <PieChart />
          <h1>D3 Chart</h1>
          <D3Chart />
        </div>
      </div>
    </main>
  );
}

export default HomePage;