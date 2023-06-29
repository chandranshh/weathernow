function GridDetail({ today }) {
  const data = today.data[0];

  return (
    <div className="bg-blue-100 text-[#375b9e] mx-12 my-4 rounded-xl p-8">
      <div className="grid grid-cols-2 gap-8">
        <div className="flex justify-between p-6 bg-[#98c5ff5f] rounded-2xl">
          <div className="flex flex-col gap-4">
            <div className="text-3xl font-bold text-black">Wind Direction</div>
            <div className="text-md font-md text-gray-600">
              Todays wind direction
            </div>
          </div>
          <div className="self-center text-3xl font-md text-gray-700">
            {data.wind_cdir}
          </div>
        </div>
        <div className="flex justify-between p-6 bg-[#98c5ff5f] rounded-2xl">
          <div className="flex flex-col gap-4">
            <div className="text-3xl font-bold text-black">Wind Speed</div>
            <div className="text-md font-md text-gray-600">
              Todays wind speed
            </div>
          </div>
          <div className="self-center text-3xl font-md text-gray-700">
            {data.wind_spd} m/s
          </div>
        </div>
        <div className="flex justify-between p-6 bg-[#98c5ff5f] rounded-2xl">
          <div className="flex flex-col gap-4">
            <div className="text-3xl font-bold text-black">UV Index</div>
            <div className="text-md font-md text-gray-600">Todays UV Index</div>
          </div>
          <div className="self-center text-3xl font-md text-gray-700">
            {data.uv}
          </div>
        </div>

        <div className="flex justify-between p-6 bg-[#98c5ff5f] rounded-2xl">
          <div className="flex flex-col gap-4">
            <div className="text-3xl font-bold text-black">Pressure</div>
            <div className="text-md font-md text-gray-600">Todays pressure</div>
          </div>
          <div className="self-center text-3xl font-md text-gray-700">
            {data.pres}
          </div>
        </div>
      </div>
    </div>
  );
}

export default GridDetail;
