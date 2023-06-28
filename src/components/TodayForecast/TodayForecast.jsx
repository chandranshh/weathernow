"use client";
import { useEffect, useState } from "react";
import Searchbar from "./modules/Searchbar";

function TodayForecast() {
  const [fullData, setFullData] = useState({}); // State for storing the full data

  console.log(fullData);

  return (
    <div className="w-[60%] h-screen border-r border-gray-20 border-opacity-50">
      <div className="mt-12 mx-6">
        <Searchbar setFullData={setFullData} />
      </div>
      <div>Details</div>
    </div>
  );
}

export default TodayForecast;
