import "./globals.css";
import { Quicksand } from "next/font/google";

const quicksand = Quicksand({ subsets: ["latin"] });

export const metadata = {
  title: "WeatherNow+",
  description:
    "WeatherNow+ is a responsive web application that provides current weather information for any location. Fetching data from a reliable weather API, it displays the current temperature, weather description, humidity, wind speed, and more. Stay informed about the weather conditions with WeatherNow+ - your go-to weather companion.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={quicksand.className}>
        <div className="font-medium">{children}</div>
      </body>
    </html>
  );
}
