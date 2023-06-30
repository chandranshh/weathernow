import Sidebar from "@/components/Sidebar/Sidebar";
import TodayForecast from "@/components/TodayForecast/TodayForecast";

function Home() {
  return (
    <div className="flex flex-row">
      <Sidebar />
      <TodayForecast />
    </div>
  );
}

export default Home;
