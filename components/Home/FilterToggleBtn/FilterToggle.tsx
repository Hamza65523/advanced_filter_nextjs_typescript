import React,{memo} from 'react'
import { NextPage } from 'next'
import CheckIcon from '@mui/icons-material/Check';
import ToggleButton from '@mui/material/ToggleButton';
import { ToggleButtonGroup } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
interface Props{
    value:any,
    selectToggle:any,
    options:any,
   
}
const FilterToggle:NextPage<Props> = ({value,selectToggle,options}) => {
  return (
    <div>
         
    <ToggleButtonGroup value={value} onChange={selectToggle} exclusive
    className='flex  flex-wrap'>
    {options.map((items :any)=> (
        <ToggleButton  className='hover:text-black  py-2 px-2 flex justify-center items-center gap-2 bg-black rounded-md text-white' key={items.id} value={items.value}>
          <div className="flex justify-center items-center gap-2 ">
          <FontAwesomeIcon className={`text-${items.color}-400 w-4`} icon={items.iconValue}/> <div className="">
          {items.label}
          </div>
          </div>
        </ToggleButton>
    ))
    }
    </ToggleButtonGroup>
    </div>
  )
}

export default memo(FilterToggle)