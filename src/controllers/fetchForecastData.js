import axios from "axios";

export const fetchForecastData = async (locationInput, selectedCountry) => {
  let url;
  if (locationInput && selectedCountry) {
    if (!isNaN(locationInput)) {
      // If locationInput is a number, treat it as a zip code
      url = `https://api.weatherbit.io/v2.0/forecast/daily?postal_code=${locationInput}&country=${selectedCountry}&key=${process.env.NEXT_PUBLIC_API_KEY}`;
    } else {
      // Treat locationInput as a city name
      url = `https://api.weatherbit.io/v2.0/forecast/daily?city=${locationInput}&country=${selectedCountry}&key=${process.env.NEXT_PUBLIC_API_KEY}`;
    }
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
  return null;
};
