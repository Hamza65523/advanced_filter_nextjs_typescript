import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar ,faPizzaSlice ,faFlag} from '@fortawesome/free-solid-svg-icons'
import Slider from '@mui/material/Slider';
import {categoriesList} from '../../constants/index'
import FilterToggle from '../FilterToggleBtn/FilterToggle';
import { NextPage } from 'next';
function valuetext(value: number) {
  return `${value}°C`;
}
interface Props{
  selectedCategory:any
}
const index:NextPage<Props> = ({selectedCategory}) => {
  const [value, setValue] = React.useState<number[]>([20, 37]);
  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };
  const selectToggle = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };
  
  return (
    <div className='border-2 border-gray-50 px-2 rounded-md  py-2 shadow-xl '>
      <div className="w-60 px-2 py-4">
        <h4 className='font-bold text-xl pb-4'>Category</h4>
        <FilterToggle value={value} selectToggle={selectToggle} options={categoriesList}/>
       
        <h4 className='font-bold py-2 text-xl'>Cuisine</h4>
        <div className="flex justify-between">
          <span>American</span>
          <input type="checkbox" />
        </div>
        <div className="flex justify-between">
          <span>Chinese</span>
          <input type="checkbox" />
        </div>
        <div className="flex justify-between">
          <span>Italian</span>
          <input type="checkbox" />
        </div>
        <h4 className='font-bold  py-2 text-xl'>Price Range</h4>
        <Slider
          getAriaLabel={() => 'Temperature range'}
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          getAriaValueText={valuetext}
          className='text-red-400'
        />  
        <h4 className='font-bold   py-2 text-xl'>Star Rating</h4>
        <div className="flex gap-1">
        <span className='py-2 border-[1px] border-black px-2 bg-black rounded-md flex justify-center items-center text-white'>1<FontAwesomeIcon className='w-4 text-yellow-500' icon={faStar}/></span>
        <span className='py-2 border-[1px] border-black px-2 bg-black rounded-md flex justify-center items-center text-white'>2<FontAwesomeIcon className='w-4 text-yellow-500' icon={faStar}/></span>
        <span className='py-2 border-[1px] border-black px-2 bg-black rounded-md flex justify-center items-center text-white'>3<FontAwesomeIcon className='w-4 text-yellow-500' icon={faStar}/></span>
        <span className='py-2 border-[1px] border-black px-2 bg-black rounded-md flex justify-center items-center text-white'>4<FontAwesomeIcon className='w-4 text-yellow-500' icon={faStar}/></span>
        <span className='py-2 border-[1px] border-black px-2 bg-black rounded-md flex justify-center items-center text-white'>5<FontAwesomeIcon className='w-4 text-yellow-500' icon={faStar}/></span>
        </div>
      </div>
    </div>
  )
}

export default index