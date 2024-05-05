import React from "react";

const Grafana = () => {
  return (
    <div id="grafana" className="p-8 xl:p-20">
      <div className="mb-8">
        <h1 className="text-[40px] font-black">
          Grafana is a great tool for monitoring
        </h1>
        <p className="text-xl text-gray-500">
          Grafana not only allows ploting and tracking data but also does so with style!
        </p>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        <div className="flex flex-col gap-2">
          <img
            src="/grafana11.jpeg"
            className="w-full h-full object-cover rounded-3xl"
          />
          <p className="text-gray-500">Plot of light levels through time</p>
          <h3 className="text-2xl font-bold">IOT and why you should care</h3>
          <p className="text-gray-500">
            Our lifes can be greatly improved by tracking certain parameters we would not care much in our day to day,
            IOT even if we sometimes don't think much about it has revolutionazed and changed forever our ways and improved
            our quality of life to extents never expected. 
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col gap-4">
            <img
              src="/grafana12.jpeg"
              className="w-full h-full object-cover rounded-3xl"
            />
            <p className="text-gray-500">Last meassurement of light</p>
            <h3 className="text-2xl font-bold">
              Light meassurements can save up energy
            </h3>
          </div>
          <div className="flex flex-col gap-4">
            <img
              src="/grafana13.jpeg"
              className="w-full h-full object-cover rounded-3xl"
            />
            <p className="text-gray-500">Last temperature meassurement</p>
            <h3 className="text-2xl font-bold">
              This could control your AC
            </h3>
          </div>
          <div className="flex flex-col gap-4">
            <img
              src="/grafana14.jpeg"
              className="w-full h-full object-cover rounded-3xl"
            />
            <p className="text-gray-500">Last humidity meassurement</p>
            <h3 className="text-2xl font-bold">
              This could control your humidifier
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grafana;
