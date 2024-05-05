import React from "react";
import { RiCheckboxBlankCircleFill, RiPlayFill, RiStarFill } from "react-icons/ri";

const Presentacion = () => {
  return (
    <section id="home" className="min-h-[90vh] grid grid-cols-1 xl:grid-cols-8">
      <div className="md:col-span-7 flex items-center justify-center p-8 xl:p-16">
        <div className="flex flex-col gap-8 items-center">
          <div className="flex items-center justify-center">
            <div className="flex items-center justify-center">
              <h1 className="text-5xl xl:text-7xl font-bold xl:leading-[7.5rem] text-center">
                C is High Level
              </h1>
              <img src="qrapp.png" alt="C Logo" className="h-80 w-auto ml-10" />
              <img src="logoC.png" alt="C Logo" className="h-80 w-auto ml-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Presentacion;
