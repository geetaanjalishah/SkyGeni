import SummaryCards from "../components/SummaryCards";
import DriversChart from "../components/DriversChart";
import RiskTable from "../components/RiskTable";
import Recommendations from "../components/Recommendations";
import "../App.css";
import RevenueTrend from "../components/RevenueTrend";

export default function Dashboard() {
  return (
    <div className="dashboard">
      <SummaryCards />

      <div className="dashboard-main">
        <section className="drivers-section">
          <DriversChart />
        </section>

        <section className="right-section">
          <div className="risk-recommendations">
            <div className="risk">
            <RiskTable />

            </div>
            <div className="recommendation">

            <Recommendations />
            </div>
          </div>

          <div className="revenue-trend">
            <RevenueTrend />
          </div>
        </section>
      </div>
    </div>
  )
}
