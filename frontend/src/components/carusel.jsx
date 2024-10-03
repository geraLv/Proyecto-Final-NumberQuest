import { Carousel } from "@material-tailwind/react";
import React from "react";
// import { Limite } from "";

export function CarouselDefault() {
  return (
    <div className="../../public/board-5599231.png">
      <Carousel className="bg-primary">
        <img
          src="../../public/img/Banner1.svg"
          alt=""
          className="h-100 w-full object-cover"
        ></img>
        <img
          src="../../public/img/Banner2.svg"
          alt="image 2"
          className="h-full w-full object-cover"
        />
        <img
          src="../../public/img/Banner3.svg"
          alt="image 3"
          className="h-full w-auto object-cover"
        />
      </Carousel>
    </div>
  );
}
