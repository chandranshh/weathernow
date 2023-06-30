"use client";
import { useEffect, useState } from "react";
import { fetchTodayData } from "@/controllers/fetchTodayData.";
import { fetchHourlyData } from "@/controllers/fetchHourlyData";
import { fetchForecastData } from "@/controllers/fetchForecastData";

import Searchbar from "./modules/Searchbar";
import BigDetail from "./modules/BigDetail/BigDetail";
import GridDetail from "./modules/GridDetail/GridDetail";

import Rightbar from "../Rightbar/Rightbar";

function TodayForecast() {
  const [fullData, setFullData] = useState({});
  const [today, setToday] = useState({});
  const [temp, setTemp] = useState({});
  const [hourlyData, setHourlyData] = useState({});
  const [forecast, setForecast] = useState({});
  const [loading, setLoading] = useState(true);

  // Fetch data from API
  useEffect(() => {
    const fetchData = async () => {
      const todayData = await fetchTodayData(
        fullData?.locationInput,
        fullData?.selectedCountry
      );
      const hourly = await fetchHourlyData(
        fullData?.locationInput,
        fullData?.selectedCountry
      );
      const forecast16 = await fetchForecastData(
        fullData?.locationInput,
        fullData?.selectedCountry
      );
      setToday(todayData);
      setHourlyData(hourly);
      setForecast(forecast16);
      setLoading(false);
    };
    fetchData();
  }, [fullData]);

  // Filter data based on timestamps
  useEffect(() => {
    const morningData = hourlyData?.data?.find((entry) =>
      entry.timestamp_utc.includes("T07:00:00")
    );
    const afternoonData = hourlyData?.data?.find((entry) =>
      entry.timestamp_utc.includes("T12:00:00")
    );
    const eveningData = hourlyData?.data?.find((entry) =>
      entry.timestamp_utc.includes("T15:00:00")
    );
    const nightData = hourlyData?.data?.find((entry) =>
      entry.timestamp_utc.includes("T20:00:00")
    );

    // Extract temperatures
    const temperatures = {
      morningTemperature: morningData?.temp,
      afternoonTemperature: afternoonData?.temp,
      eveningTemperature: eveningData?.temp,
      nightTemperature: nightData?.temp,
    };

    setTemp(temperatures);
  }, [hourlyData]);

  return (
    <div className="w-full flex justify-center border-r border-gray-20 border-opacity-50">
      <div>
        <div className="flex justify-center mt-6 mx-6">
          <Searchbar setFullData={setFullData} />
        </div>
        <div className="flex flex-col px-8 min-w-full mr-32">
          {!loading && today && Object.keys(today).length > 0 ? (
            <>
              <BigDetail today={today} graphTemp={temp} />
              <GridDetail today={today} />
            </>
          ) : (
            <div className="text-center mt-8 text-2xl text-gray-600">
              {today && Object.keys(today).length > 0
                ? "Loading...."
                : "Please search for a city to display data."}
            </div>
          )}
        </div>
      </div>
      <div className="w-[25%] mr-4">
        {!loading && today && Object.keys(today).length > 0 && (
          <Rightbar forecast={forecast} />
        )}
      </div>
    </div>
  );
}

export default TodayForecast;
