import Rightbar from "@/components/Rightbar/Rightbar";
import Sidebar from "@/components/Sidebar/Sidebar";
import TodayForecast from "@/components/TodayForecast/TodayForecast";

function Home() {
  const api = process.env.API_KEY;
  return (
    <div className="flex flex-row">
      <Sidebar />
      <TodayForecast />
      <Rightbar />
    </div>
  );
}

export default Home;
