import React, { useState } from "react";

import PageSegction from "@/components/PageSection";
import StoreNavbar from "@/components/store/StoreNavbar";

import downhill1 from "@/assets/downhillVideo/downhill1.mp4";
import downhill2 from "@/assets/downhillVideo/downhill2.mp4";
import downhill3 from "@/assets/downhillVideo/downhill3.mp4";
import downhill4 from "@/assets/downhillVideo/downhill4.mp4";

import Contact from "@/components/Contact";

const Downhill = () => {
  const [isMenuShown, setIsMenuShown] = useState(false);

  const portfolios = [
    {
      id: 1,
      src: downhill1,
      category: "Downhill",
      code: "https://www.instagram.com/p/CoCknbGAX_X/",
    },
    {
      id: 2,
      src: downhill2,
      category: "Downhill",
      code: "https://www.instagram.com/p/Cahz8Rfl1-S/",
    },
    {
      id: 3,
      src: downhill3,
      category: "Downhill",
      code: "https://www.instagram.com/p/CkqijHnO_jl/",
    },
    {
      id: 4,
      src: downhill4,
      category: "Downhill",
      code: "https://www.instagram.com/p/CTQW4tcJPWg/",
    },
  ];

  return (
    <>
      <StoreNavbar isMenuShown={isMenuShown} setIsMenuShown={setIsMenuShown} />
      <div className="flex flex-col items-center ">
        <PageSegction
          name="/productos/downhill"
          title="Taller Inline Downhill"
          subtitle={`Para los amantes al Inline Downhill y los que quieran algún día vivir la experiencia de descender en patines no se pueden perder este taller.`}
        >
          <div
            name="portfolio"
            className="w-full bg-gradient-to-b from-gray-800 to-black text-white  "
          >
            <div className="mx-auto flex h-full w-full max-w-screen-lg flex-col justify-center p-4">
              <div className="grid gap-20 mt-8 sm:grid-cols-2 sm:px-0 md:grid-cols-2">
                {portfolios.map(({ id, src, code, category }) => (
                  <div
                    key={id}
                    className="rounded-lg shadow-lg shadow-thBlue duration-300 hover:scale-105"
                  >
                    <a href={code} target="_blank" rel="noreferrer">
                      <video
                        src={src}
                        loop
                        type="video/mp4"
                        playsInline
                        autoPlay
                        muted
                        className="rounded-md   object-cover w-full h-[500px]  "
                      />

                      <div className="flex items-center justify-center">
                        <p className="m-4 py-3 uppercase">{category}</p>
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </PageSegction>
      </div>
      <Contact />
    </>
  );
};

export default Downhill;
