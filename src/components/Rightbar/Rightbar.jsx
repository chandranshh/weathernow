import Image from "next/image";

function Rightbar({ forecast }) {
  const data = forecast?.data;

  // Helper function to convert date format from 26-06-2023 to 23 June
  const convertDateFormat = (dateString) => {
    const date = new Date(dateString);
    const options = { day: "numeric", month: "long" };
    return date.toLocaleDateString("en-US", options);
  };

  // Helper function to get weekday name
  const getWeekday = (dateString) => {
    const date = new Date(dateString);
    const options = { weekday: "long" };
    return date.toLocaleDateString("en-US", options);
  };

  // Get today's date without time component
  const today = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  return (
    <div className="mt-8 p-2">
      <div className="flex flex-col justify-center">
        <div className="self-center text-3xl font-bold mb-4">
          Forecast 16 days
        </div>
        <div className="overflow-y-scroll h-[850px] scrollbar-hide">
          {data?.map((day) => (
            <div
              className="flex justify-between items-center gap-4 mx-3 py-2"
              key={day.datetime}
            >
              {day.datetime.split(" ")[0] !== today && (
                <div className="flex flex-col my-5 gap-2 w-20">
                  <div className="text-xl">{getWeekday(day.datetime)}</div>
                  <div className="text-gray-500">
                    {convertDateFormat(day.datetime)}
                  </div>
                </div>
              )}
              <div className="text-3xl px-4">{day.temp}°</div>
              <Image
                height={75}
                width={75}
                src={`https://cdn.weatherbit.io/static/img/icons/${day.weather.icon}.png`}
                alt="img"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Rightbar;
