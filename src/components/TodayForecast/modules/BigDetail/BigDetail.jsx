"use client";
import Chart from "chart.js/auto";
import { useEffect, useRef } from "react";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import WindPowerOutlinedIcon from "@mui/icons-material/WindPowerOutlined";
import WaterDropOutlinedIcon from "@mui/icons-material/WaterDropOutlined";
import CloudOutlinedIcon from "@mui/icons-material/CloudOutlined";
import Image from "next/image";

function BigDetail({ today, graphTemp }) {
  const data = today?.data[0];

  //chart generation using chart.js
  const graphRef = useRef(null);
  useEffect(() => {
    const ctx = graphRef.current.getContext("2d");
    let chartInstance;

    if (graphRef.current) {
      chartInstance = new Chart(ctx, {
        type: "line",
        data: {
          labels: ["Morning", "Afternoon", "Evening", "Night"],
          datasets: [
            {
              label: "Temperature (°C)",
              data: [
                graphTemp.morningTemperature,
                graphTemp.afternoonTemperature,
                graphTemp.eveningTemperature,
                graphTemp.nightTemperature,
              ],
              backgroundColor: "rgba(0, 123, 255, 0.2)",
              borderColor: "#375b9e",
              borderWidth: 2,
              pointBackgroundColor: "#375b9e",
              pointRadius: 4,
              pointHoverRadius: 6,
              cubicInterpolationMode: "monotone",
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
              max: 40,
            },
          },
        },
      });
    }

    return () => {
      // Destroy the chart instance before unmounting the component
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, [graphTemp]);

  return (
    <div>
      <div className="bg-blue-100 text-[#375b9e] mx-12 my-8  rounded-xl py-6">
        <div className="flex flex-row  gap-3 p-3 w-full rounded-xl ">
          <div className="flex flex-col justify-between w-[50%] p-1 rounded-xl">
            <div className="flex items-center justify-between">
              <div className="flex gap-4 p-3 items-center">
                <LocationOnOutlinedIcon className="h-[30px] w-[30px]" />
                <div className="text-2xl font-bold">{data.city_name}</div>
              </div>
              <div className="text-xl font-bold self-center p-3">
                today {data.ob_time.split(" ")[1]}
              </div>
            </div>
            <div className="flex flex-col items-center justify-center p-3">
              <div className="text-8xl relative">
                <span>{data.app_temp}</span>
                <span className="absolute top-[5px] right-[-20px] text-4xl">
                  &#xb0;
                </span>
              </div>
              <div className="flex justify-center items-center gap-4 text-lg font-bold mt-6 bg-[#eaecf049] px-3 rounded-full shadow-sm">
                <span className="text-center p-2">
                  {data.weather.description}
                </span>
                <Image
                  height={40}
                  width={40}
                  src={`https://cdn.weatherbit.io/static/img/icons/${data.weather.icon}.png`}
                  alt="img"
                />
              </div>
            </div>
            <div className="flex flex-row justify-around items-center mt-4 py-2">
              <div className="flex gap-2">
                <WindPowerOutlinedIcon />
                <div className="text-md font-bold">{data.wind_spd}m/s</div>
              </div>
              <div className="flex gap-2">
                <WaterDropOutlinedIcon />
                <div className="text-md font-bold">{data.rh}%</div>
              </div>
              <div className="flex gap-2">
                <CloudOutlinedIcon />
                <div className="text-md font-bold">{data.clouds}%</div>
              </div>
            </div>
          </div>
          <div className="w-[50%] p-3 bg-[#98c5ff5f] rounded-xl mx-6">
            <div className="text-xl font-bold p-2">Temperature</div>
            <canvas
              id="temperatureGraph"
              width="140"
              height="90"
              ref={graphRef}
            ></canvas>
          </div>
        </div>
      </div>
    </div>
  );
}
export default BigDetail;
