import { Carousel } from "@material-tailwind/react";
import React from "react";
import Banner1 from "../../public/img";
export function CarouselDefault() {
  return (
    <div className="../../public/board-5599231.png">
      <Carousel className="bg-primary">
        <img
          src="https://www.canva.com/design/DAGSebDRnJs/zYCZWvXlUtXkDYTdZ6RCkw/edit?utm_content=DAGSebDRnJs&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
          alt=""
          className="h-96 w-full object-cover"
        ></img>
        <img
          src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
          alt="image 2"
          className="h-96 w-full object-cover"
        />
        <img
          src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
          alt="image 3"
          className="h-96 w-full object-cover"
        />
      </Carousel>
    </div>
  );
}
