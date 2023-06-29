"use client";
import { useEffect, useState } from "react";
import { today } from "@/constants/today";
import { hourlyData } from "@/constants/hourly";

import Searchbar from "./modules/Searchbar";
import BigDetail from "./modules/BigDetail/BigDetail";
import GridDetail from "./modules/GridDetail/GridDetail";

// Filter data based on timestamps
const morningData = hourlyData.data.find(
  (entry) => entry.timestamp_utc === "2023-06-30T07:00:00"
);
const afternoonData = hourlyData.data.find(
  (entry) => entry.timestamp_utc === "2023-06-30T12:00:00"
);
const eveningData = hourlyData.data.find(
  (entry) => entry.timestamp_utc === "2023-06-30T15:00:00"
);
const nightData = hourlyData.data.find(
  (entry) => entry.timestamp_utc === "2023-06-30T20:00:00"
);

// Extract temperatures

const temperatures = {
  morningTemperature: morningData.temp,
  afternoonTemperature: afternoonData.temp,
  eveningTemperature: eveningData.temp,
  nightTemperature: nightData.temp,
};

function TodayForecast() {
  const [fullData, setFullData] = useState({}); // State for storing the full data

  return (
    <div className="w-[60%] h-screen border-r border-gray-20 border-opacity-50">
      <div className="mt-12 mx-6">
        <Searchbar setFullData={setFullData} />
      </div>
      <div>
        <BigDetail today={today} graphTemp={temperatures} />
        <GridDetail today={today} />
      </div>
    </div>
  );
}

export default TodayForecast;
