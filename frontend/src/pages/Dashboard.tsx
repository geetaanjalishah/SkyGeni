import SummaryCards from "../components/SummaryCards";
import DriversChart from "../components/DriversChart";
import RiskTable from "../components/RiskTable";
import Recommendations from "../components/Recommendations";
import "../App.css";
import RevenueTrend from "../components/RevenueTrend";

export default function Dashboard() {
  return (
    <div className="dashboard">
       <header className="header">
    <div className="header-left">
      <img
        src="https://play-lh.googleusercontent.com/s-mw2r5ufEAD24YIyFm3Z2gJc8CHNtyaWNJwc2qRMylpGXOFnH4KwukhKKAFxtThmFNNXs-NquqkeFbz9Di4eg"
        alt="Logo"
        className="logo"
      />
      <span className="title">SkyGeni</span>
    </div>

    <div className="header-right">
       <img
        src="https://staging.svgrepo.com/show/452338/print.svg"
        alt="Print"
        className="icon"
      />
      <img
        src="https://cdn-icons-png.flaticon.com/512/1827/1827504.png"
        alt="Notification"
        className="icon"
      />
      <img
        src="https://cdn-icons-png.flaticon.com/128/542/542638.png"
        alt="Print"
        className="icon"
      />
      <img
        src="https://cdn-icons-png.flaticon.com/512/6522/6522516.png"
        alt="User"
        className="icon"
      />
    </div>
  </header>
      <div className="body">
        <SummaryCards />

        <div className="dashboard-main">
          <section className="drivers-section">
            <DriversChart />
          </section>
          <section className="right-section">
            <div className="risk-recommendations">
              <div>
                <RiskTable />
              </div>
              <div>
                <Recommendations />
              </div>
            </div>
            <div className="revenue-trend">
              <RevenueTrend />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
