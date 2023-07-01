# WeatherNow+

## Description

This is a simple weather application built using Next.js and the Weatherbit API. It allows users to fetch and display current weather information for a given location. The application features a responsive user interface and provides various weather details such as the current temperature, weather description, humidity, wind speed, and more. It also includes appropriate weather icons or images based on the weather condition.

## Features

- User-friendly interface
- Fetches weather data from the Weatherbit API
- Allows users to enter a location (city, zip code, etc.) and fetch corresponding weather information
- Displays current temperature, weather description, humidity, wind speed, and other relevant weather information
- Uses weather icons or images to visually represent weather conditions
- Gracefully handles errors and provides meaningful error messages
- Additional features or enhancements that improve the application

## Technologies Used

- Next.js
- Weatherbit API
- TailwindCSS, Chart.js (for chart genereation)

## Local Installation

-If you want to run it with the zip without cloning for GitHub, you can run the development by
a.Installing the packages

```bash
npm install
```

b.Then runing the development server

```bash
npm run dev
```

Open http://localhost:3000 with your browser to see the project.

## GitHub Installation

1. Clone the repository or download the ZIP file.

```bash
git clone https://github.com/chandranshh/weathernow
```

2.Navigate to the project directory.

```bash
cd weathernow
```

3. Install the dependencies.

```bash
npm install
```

## Configuration

1.Sign up for an API key on the Weatherbit website (or any other weather API you choose to use).

2.Create a .env.local file in the root directory of the project.

3.Add your API key to the .env.local file.

```bash
NEXT_PUBLIC_API_KEY=YOUR_API_KEY
```

## Usage

1.Start the development server.

```bash
npm run dev
```

1.Open your browser and navigate to http://localhost:3000 to access the weather application.

2.Enter a location in the provided input field and click the "Search" button to fetch and display weather information.
