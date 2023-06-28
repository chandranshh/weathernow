"use client";
import Image from "next/image";
import Logo from "@/assets/logo.png";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";

function Sidebar() {
  return (
    <div className="w-[20%] h-screen border-r border-gray-20 border-opacity-50">
      <div className="flex flex-col">
        <div className="flex items-center justify-center gap-6 p-6 pb-12 mt-8">
          <Image src={Logo} className="h-[50px] w-[50px]" alt="logo.png" />
          <div className="font-extrabold text-2xl">WeatherNow+</div>
        </div>
        <div className="flex items-center justify-center text-lg">
          <div className="flex flex-col">
            <div className="flex flex-row gap-4 items-center my-8">
              <GridViewOutlinedIcon />
              <div className="font-bold cursor-pointer">Dashboard</div>
            </div>
            <div className="flex flex-col opacity-50">
              <div className="flex flex-row gap-4 items-center my-8">
                <MapOutlinedIcon />
                <div className="font-bold">Map</div>
              </div>
              <div className="flex flex-row gap-4 items-center my-8">
                <BookmarkBorderOutlinedIcon />
                <div className="font-bold">Saved Locations</div>
              </div>
              <div className="flex flex-row gap-4 items-center my-8">
                <CalendarTodayOutlinedIcon />
                <div className="font-bold">Calendar</div>
              </div>
              <div className="flex flex-row gap-4 items-center justify-center my-8">
                <div className="font-bold">Coming soon...</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
