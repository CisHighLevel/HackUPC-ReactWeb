import React from "react";

const AboutUs = () => {
  return (
    <div id="aboutUs" className="p-8 xl:p-20">

    <div className="bg-gray-100 p-8 flex flex-col items-center justify-center gap-8 mt-20 xl:mt-0" style={{backgroundImage: `public/fondoWhoweAre.jpeg)`}}>
      <h1 className="text-2xl font-medium text-gray-800 text-center">
        Who are we?
      </h1>
      <div className="flex flex-col items-center justify-center gap-20">
        <div className="flex items-center gap-4">
          <img src="pau.jpeg" className="w-40 rounded-full" alt="Pau" />
          <p>Pau - Backend y embedded</p>
        </div>
        <div className="flex items-center gap-4 flex-row-reverse lg:flex-row">
          <p>Aran - Backend y Grafana</p>
          <img src="aran.jpeg" className="w-40 rounded-full" alt="Aran" />
        </div>
        <div className="flex items-center gap-4">
          <img src="/cristian.jpeg" className="w-40 rounded-full" alt="Cristian" />
          <p>Cristian - Backend y frontend</p>
        </div>
        <div className="flex items-center gap-4 flex-row-reverse lg:flex-row">
          <p>Jose - Backend y embedded</p>
          <img src="/jose.jpeg" className="w-40 rounded-full" alt="Jose" />
        </div>
      </div>
    </div>
    </div>

  );
};

export default AboutUs;
