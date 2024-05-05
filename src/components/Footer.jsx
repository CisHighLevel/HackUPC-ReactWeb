import React from "react";
import { RiLinkedinLine, RiGithubLine } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="bg-footer p-8 xl:p-20">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-b border-gray-500 pb-8">
        {/* Logo */}
        <div className="w-1/6">
          <a
            href="#"
            className="text-2xl font-bold relative p-1 bg-footer text-white"
          >
            Nuestras redes<span className="text-primary text-5xl">.</span>{" "}
          </a>
        </div>
        {/* Social media */}
        <nav className="flex items-center gap-4">
          <div className="flex flex-col items-center">
            <a href="https://github.com/orgs/CisHighLevel/repositories" className="block text-white p-4 bg-primary rounded-full">
              {" "}
              <RiGithubLine />
            </a>
            <p className="text-xs text-white">Github</p>
          </div>
          <div className="flex flex-col items-center">
            <a href="https://www.linkedin.com/in/jose-maria-larrinzal-jimenez-3915a6290/" className="block text-white p-4 bg-primary rounded-full">
              {" "}
              <RiLinkedinLine />
            </a>
            <p className="text-xs text-white">Jose</p>
          </div>
          <div className="flex flex-col items-center">
            <a href="https://www.linkedin.com/in/cristian-li%C3%A9bana-sime%C3%B3n-063a21209/" className="block text-white p-4 bg-primary rounded-full">
              {" "}
              <RiLinkedinLine />
            </a>
            <p className="text-xs text-white">Cristian</p>
          </div>
          <div className="flex flex-col items-center">
            <a href="https://www.linkedin.com/in/aran-huarte-domec-6ab9711b8/" className="block text-white p-4 bg-primary rounded-full">
              {" "}
              <RiLinkedinLine />
            </a>
            <p className="text-xs text-white">Aran</p>
          </div>
          <div className="flex flex-col items-center">
            <a href="https://www.linkedin.com/in/paugarcia32/" className="block text-white p-4 bg-primary rounded-full">
              {" "}
              <RiLinkedinLine />
            </a>
            <p className="text-xs text-white">Pau</p>
          </div>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
