import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { Line, Doughnut } from "react-chartjs-2";
import { FaDollarSign, FaTicketAlt } from "react-icons/fa";
import { HiOutlineChartBar } from "react-icons/hi";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement);

const Dashboard = () => {
  // Data for Line Chart (Solved vs New Tickets)
  const lineChartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov"],
    datasets: [
      {
        label: "Solved Tickets",
        data: [30, 50, 45, 60, 70, 90, 110, 120, 140, 160, 180],
        borderColor: "#4CAF50",
        backgroundColor: "rgba(76, 175, 80, 0.2)",
        tension: 0.3,
      },
      {
        label: "New Tickets",
        data: [40, 60, 55, 70, 80, 100, 120, 130, 150, 170, 200],
        borderColor: "#FF9800",
        backgroundColor: "rgba(255, 152, 0, 0.2)",
        tension: 0.3,
      },
    ],
  };

  const lineChartOptions = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
    },
  };

  // Data for Doughnut Chart (Ticket by Type)
  const doughnutChartData = {
    labels: ["Sales", "Setup", "Refund"],
    datasets: [
      {
        data: [24000, 8000, 5000],
        backgroundColor: ["#36A2EB", "#FF6384", "#FFCE56"],
      },
    ],
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header Stats */}
      <div className="grid md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white shadow-lg p-6 rounded-lg flex justify-between items-center">
          <div>
            <h3 className="text-gray-600">Revenue</h3>
            <p className="text-3xl font-bold text-blue-600">$10,259</p>
          </div>
          <FaDollarSign className="text-4xl text-blue-600" />
        </div>
        <div className="bg-white shadow-lg p-6 rounded-lg flex justify-between items-center">
          <div>
            <h3 className="text-gray-600">Tickets Ordered</h3>
            <p className="text-3xl font-bold text-orange-600">800 Pcs</p>
          </div>
          <FaTicketAlt className="text-4xl text-orange-600" />
        </div>
        <div className="bg-white shadow-lg p-6 rounded-lg flex justify-between items-center">
          <div>
            <h3 className="text-gray-600">Tickets Refunded</h3>
            <p className="text-3xl font-bold text-blue-600">50 Left</p>
          </div>
          <HiOutlineChartBar className="text-4xl text-blue-600" />
        </div>
      </div>

      {/* Main Content */}
      <div className="grid lg:grid-cols-3 gap-4">
        {/* Solved vs New Tickets Chart */}
        <div className="lg:col-span-2 bg-white shadow-lg rounded-lg p-6">
          <h3 className="font-bold text-gray-600 mb-4">Solved Tickets vs New Tickets</h3>
          <Line data={lineChartData} options={lineChartOptions} />
        </div>

        {/* Ticket by Type Doughnut Chart */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h3 className="font-bold text-gray-600 mb-4">Tickets by Type</h3>
          <Doughnut data={doughnutChartData} />
        </div>
      </div>

      {/* Tables Section */}
      <div className="grid lg:grid-cols-2 gap-4 mt-6">
        {/* Recent Sales Table */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h3 className="font-bold text-gray-600 mb-4">Recent Sales</h3>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr>
                <th className="border-b pb-2">No.</th>
                <th className="border-b pb-2">Order ID</th>
                <th className="border-b pb-2">Name</th>
                <th className="border-b pb-2">Date</th>
                <th className="border-b pb-2">Sold Ticket</th>
                <th className="border-b pb-2">Refund</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>#C87675</td>
                <td>Martin</td>
                <td>04/08/23</td>
                <td>1 Pcs</td>
                <td>No</td>
              </tr>
              <tr>
                <td>2</td>
                <td>#A12778</td>
                <td>Josha</td>
                <td>03/08/23</td>
                <td>2 Pcs</td>
                <td>No</td>
              </tr>
              <tr>
                <td>3</td>
                <td>#B32789</td>
                <td>Tony</td>
                <td>02/08/23</td>
                <td>3 Pcs</td>
                <td>No</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Agents with Most Tickets Table */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h3 className="font-bold text-gray-600 mb-4">Agent with Most Tickets</h3>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr>
                <th className="border-b pb-2">Name</th>
                <th className="border-b pb-2">Tickets</th>
                <th className="border-b pb-2">Location</th>
                <th className="border-b pb-2">Last Replay</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Briggs</td>
                <td>10</td>
                <td>🇺🇸</td>
                <td>10:20pm</td>
              </tr>
              <tr>
                <td>Martin</td>
                <td>20</td>
                <td>🇯🇵</td>
                <td>05:20pm</td>
              </tr>
              <tr>
                <td>Jones</td>
                <td>35</td>
                <td>🇩🇪</td>
                <td>06:30am</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;


