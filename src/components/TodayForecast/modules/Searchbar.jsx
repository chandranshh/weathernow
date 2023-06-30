"use client";
import { useState } from "react";
import LocationSearchingIcon from "@mui/icons-material/LocationSearching";
import { countryData } from "@/constants/countrydata";

function Searchbar({ setFullData }) {
  const [selectedCountry, setSelectedCountry] = useState(""); // State for storing the selected country
  const [locationInput, setLocationInput] = useState(""); // State for storing the location input value

  const handleSearchData = () => {
    setFullData({
      selectedCountry: selectedCountry,
      locationInput: locationInput,
    });
  };

  function handleCountryChange(event) {
    setSelectedCountry(event.target.value); // Update the selected country state
  }

  function handleLocationChange(event) {
    setLocationInput(event.target.value); // Update the location input state
  }

  return (
    <div>
      <div className="h-16 w-[1000px] flex flex-row items-center justify-center gap-4 p-4 border border-gray-200 rounded-full shadow-lg">
        <LocationSearchingIcon />
        <input
          className="w-[70%] p-2 text-lg "
          type="text"
          name="search"
          value={locationInput}
          onChange={handleLocationChange}
          placeholder="Enter city name or zip code"
        />
        <select
          className="w-[20%] p-2 bg-white text-lg"
          onChange={handleCountryChange}
        >
          <option value="">Select a country</option>
          {countryData.map((country) => (
            <option key={country.code} value={country.code}>
              {country.name}
            </option>
          ))}
        </select>
        <button className="text-lg" onClick={handleSearchData}>
          Search
        </button>
      </div>
    </div>
  );
}

export default Searchbar;
