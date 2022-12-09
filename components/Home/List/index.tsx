import React from "react";
import Image from "next/image";
const index = () => {
  let dummyData = [
    {
      title:'Nacho cheeseBurger',
      reviews:2,
      time:new Date(),
      price:2500,
      img:require("../../../assets/img/download.png")
    },
    {
      title:'Nacho cheeseBurger',
      reviews:2,
      time:new Date(),
      price:2500,
      img:require("../../../assets/img/download.png")
    },
    {
      title:'Nacho cheeseBurger',
      reviews:2,
      time:new Date(),
      price:2500,
      img:require("../../../assets/img/download.png")
    },
    {
      title:'Nacho cheeseBurger',
      reviews:2,
      time:new Date(),
      price:2500,
      img:require("../../../assets/img/download.png")
    },
    {
      title:'Nacho cheeseBurger',
      reviews:2,
      time:new Date(),
      price:2500,
      img:require("../../../assets/img/download.png")
    },
  ]
  return (
    <div className="flex flex-wrap gap-4">
      {dummyData.map((items)=>(
        <div className="border-2 border-gray-50 rounded-md px-2 py-2 shadow-xl">
        <div className="">
          <Image src={require("../../../assets/img/download.png")} alt="" />
        </div>
        <div className="">
          <span>Nacho cheeseburger</span>
          <span>{"reviews"}</span>
          <div className="">
            <span></span>
            <span>{"$2200"}</span>
          </div>
        </div>
      </div>
      ))}
    </div>
  );
};

export default index;
