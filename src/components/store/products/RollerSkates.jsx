import React, { useState } from "react";

import xpider from "@/assets/rollerSkate/xpider.jpg";
import bullet from "@/assets/rollerSkate/bullet.jpg";
import profesionales from "@/assets/rollerSkate/profesionales.jpg";
import chasisUrbanos from "@/assets/rollerSkate/chasisUrbanos.jpg";
import ruedas from "@/assets/rollerSkate/ruedas.jpg";
import chasisProfesionales from "@/assets/rollerSkate/chasisProfesionales.jpg";
import protecciones from "@/assets/rollerSkate/protecciones.jpg";
import xpro from "@/assets/rollerSkate/xpro.jpg";
import recreativos from "@/assets/rollerSkate/recreativos.jpg";
import accesorios from "@/assets/rollerSkate/accesorios.jpg";
import repuestos from "@/assets/rollerSkate/repuestos.jpg";

import PageSegction from "@/components/PageSection";
import StoreNavbar from "@/components/store/StoreNavbar";
import StoreHeroRollerSkates from "@/components/store/hero/StoreHeroRollerSkates";

import Contact from "@/components/Contact";

const RollerSkates = () => {
  const [isMenuShown, setIsMenuShown] = useState(false);

  const portfolios = [
    {
      id: 1,
      src: xpider,
      category: "xpider",
      code: "/xpider.pdf",
    },
    {
      id: 2,
      src: bullet,
      category: "bullet",
      code: "/bullet.pdf",
    },
    {
      id: 3,
      src: profesionales,
      category: "profesionales",
      code: "/profesionales.pdf",
    },
    {
      id: 4,
      src: chasisUrbanos,
      category: "chasis Urbano",
      code: "/chasisUrbano.pdf",
    },
    {
      id: 5,
      src: ruedas,
      category: "ruedas",
      code: "/ruedas.pdf",
    },
    {
      id: 6,
      src: chasisProfesionales,
      category: "chasis Profesional",
      code: "/chasisProfesional.pdf",
    },
    {
      id: 7,
      src: protecciones,
      category: "protecciones",
      code: "/protecciones.pdf",
    },
    {
      id: 8,
      src: xpro,
      category: "xpro",
      code: "/xpro.pdf",
    },
    {
      id: 9,
      src: recreativos,
      category: "recreativos",
      code: "/recreativos.pdf",
    },
    {
      id: 10,
      src: accesorios,
      category: "accesorios",
      code: "/accesorios.pdf",
    },
    {
      id: 11,
      src: repuestos,
      category: "repuestos",
      code: "/repuestos.pdf",
    },
  ];

  return (
    <>
      <StoreNavbar isMenuShown={isMenuShown} setIsMenuShown={setIsMenuShown} />
      <div className="flex flex-col items-center ">
        <PageSegction
          name="/productos/patines"
          title="Productos"
          subtitle={`Recibe la mejor accesoria por patinadores expertos. Conoce el Catalogo de productos Roller.`}
        >
          <div
            name="portfolio"
            className="w-full bg-gradient-to-b from-gray-800 to-black text-white "
          >
            <div className="mx-auto flex h-full w-full max-w-screen-lg flex-col justify-center p-4">
              <div className="grid gap-8 md:px-12 sm:grid-cols-2 sm:px-0 md:grid-cols-3">
                {portfolios.map(({ id, src, code, category }) => (
                  <div
                    key={id}
                    className="rounded-lg shadow-lg shadow-thBlue duration-200 hover:scale-105"
                  >
                    <a href={code} target="_blank" rel="noreferrer">
                      <img
                        src={src}
                        alt=""
                        className="rounded-md duration-200 hover:scale-105 object-cover  "
                      />
                      <div className="flex flex-col items-center justify-center">
                        <p className="m-4 py- uppercase">{category}</p>
                        <p className="m-4 py-">Desde $$$ Hasta $$$$</p>
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </PageSegction>
        <StoreHeroRollerSkates isMenuShown={isMenuShown} />
      </div>
      <Contact />
    </>
  );
};

export default RollerSkates;
