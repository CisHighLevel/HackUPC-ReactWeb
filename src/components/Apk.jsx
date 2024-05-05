import React from "react";
// Icons
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

const Apk = () => {
  return (
    <div id="apk" className="p-8 xl:p-20">

    <div className="p-8 flex flex-col gap-8 bg-gray-100">
      <h1 className="text-[40px] text-center font-black">
        Brazilian Stack
      </h1>
      <div className="flex justify-center gap-4 items-center"> {/*Agregué la clase 'items-center' para centrar verticalmente los elementos*/}
          <span className="text-5xl text-primary">
            <RiDoubleQuotesL />
          </span>
          <div className="flex flex-col"> {/* Envuelve el texto y el enlace en un div para organizarlos verticalmente */}
            <p className="max-w-2xl text-center text-gray-500">
              MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
              MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
              MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
              MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM                   
            </p>
            <a className="text-center text-gray-500">- Micro Wave (1945)</a> {/* Añadí la clase 'text-center' para centrar el texto */}
          </div>
          <span className="text-5xl text-primary">
            <RiDoubleQuotesR />
          </span>
        </div>

      <div className="flex flex-col items-center justify-center gap-8">
        <div className="flex items-center justify-center gap-8 md:gap-12">
          <img
            src="https://yt3.googleusercontent.com/ytc/AIdro_ll2Jdn8mnYyUegcqzDlZritUlF2kFxzv5WRB36xx8q=s900-c-k-c0x00ffffff-no-rj"
            className="w-8 h-8 md:w-14 md:h-14 object-cover rounded-full"
          />
          <img
            src="https://i0.wp.com/junilearning.com/wp-content/uploads/2020/06/python-programming-language.webp?fit=800%2C800&ssl=1"
            className="w-10 h-10 md:w-16 md:h-16 object-cover rounded-full"
          />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_UzNvZT-RNuinmpniVl9WkWJmwfdH_mdoSWGxQWqArQ&s"
            className="w-12 h-12 md:w-20 md:h-20 object-cover rounded-full ring-4 ring-primary p-1 bg-white"
          />
          <img
            src="https://ih1.redbubble.net/image.319783000.5783/st,small,507x507-pad,600x600,f8f8f8.u7.jpg"
            className="w-10 h-10 md:w-16 md:h-16 object-cover rounded-full"
          />
          <img
            src="https://yt3.googleusercontent.com/ytc/AIdro_nqx_sCd8ZIeIcodS0sfeMKJ8rVTslmQHUe_udwGNH2Pg=s900-c-k-c0x00ffffff-no-rj"
            className="w-8 h-8 md:w-14 md:h-14 object-cover rounded-full"
          />
        </div>
        <div>
          <h3 className="text-center text-[24px] font-bold">We are sorry</h3>
          <h5 className="text-center text-[20px] text-gray-500">
            It will happen again
          </h5>
        </div>
      </div>
    </div>
    </div>

  );
};

export default Apk;
