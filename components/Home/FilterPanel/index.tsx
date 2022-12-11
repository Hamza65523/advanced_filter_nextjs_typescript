import React, { memo, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faPizzaSlice,
  faFlag,
} from "@fortawesome/free-solid-svg-icons";
import { categoriesList, ratingList } from "../../constants/index";
import FilterToggle from "../FilterToggleBtn/FilterToggle";
import { NextPage } from "next";
import CheckBoxPortion from "../CheckBoxPortion/index";
import SliderPortion from "../SliderPortion/index";

interface Props {
  selectedCategory: any;
  handleSlectCategory: any;
  selectedRating: any;
  handlerselectedRating: any;
  cuision: any;
  changedCheckId: any;
  priceRange: any;
  changePrice: any;
}
const index: NextPage<Props> = ({
  priceRange,
  changePrice,
  changedCheckId,
  cuision,
  selectedCategory,
  handleSlectCategory,
  selectedRating,
  handlerselectedRating,
}) => {
  return (
    <div className="border-2 border-gray-50 px-2 rounded-md  py-2 shadow-xl ">
      <div className="w-72 px-2 py-4">
        <h4 className="font-bold text-xl pb-4">Category</h4>
        <FilterToggle
          value={selectedCategory}
          selectToggle={handleSlectCategory}
          options={categoriesList}
        />
        <h4 className="font-bold py-2 text-xl">Cuisine</h4>
        {cuision.map((items: any) => (
          <CheckBoxPortion
            key={items.id}
            cuision={items}
            changedCheckId={changedCheckId}
          />
        ))}
        <h4 className="font-bold  py-2 text-xl">Price Range</h4>
        <SliderPortion value={priceRange} changePrice={changePrice} />
        <h4 className="font-bold   py-2 text-xl">Star Rating</h4>
        <div className="flex gap-1">
          <FilterToggle
            value={selectedRating}
            selectToggle={handlerselectedRating}
            options={ratingList}
          />
        </div>
      </div>
    </div>
  );
};

export default memo(index);
