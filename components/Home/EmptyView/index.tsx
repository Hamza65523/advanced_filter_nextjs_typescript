import React from "react";
import NotFoutn from "../../../assets/img/download (1).png";
import Image from "next/image";
const index = () => {
  return (
    <div className="flex justify-center items-center w-full">
      <div className="">
        <Image className="w-full h-full" alt="" src={NotFoutn} />
      </div>
    </div>
  );
};

export default index;
