import React from "react";
import Slider from "@mui/material/Slider";
import { NextPage } from "next";
interface Props {
  value: any;
  changePrice: any;
}
const index: NextPage<Props> = ({ value, changePrice }) => {
  function valuetext(value: number) {
    return `${value}°C`;
  }
  return (
    <div>
      <Slider
        getAriaLabel={() => "Temperature range"}
        value={value}
        onChange={changePrice}
        valueLabelDisplay="on"
        getAriaValueText={valuetext}
        className="text-red-400"
        min={1000}
        max={5000}
      />
    </div>
  );
};

export default index;
