import React from 'react'
import Image from 'next/image'
import { NextPage } from 'next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface Props{
    item:any
}
const index:NextPage<Props> = ({item:{iconValue,price,coverSrc,title,deliveryFee,serviceTime,rating}}) => {
  return (
    <div>
       <div className="border-2 border-gray-50 rounded-md px-2 py-2 shadow-xl">
        <div className="">
          <Image src={coverSrc} alt="" />
        </div>
        <div className="">
          <div className="flex justify-between">
          <span className=''>{title}</span>
          <span className='bg-red-400 rounded-md p-1 w-9 text-white flex items-center justify-evenly'><FontAwesomeIcon className='text-yellow-400 text-xs' icon={iconValue}/><span className=' font-bold'>{rating}</span></span>
          </div>
          <div className="flex justify-between">
            <span className='font-bold pr-1'>{serviceTime}</span>
          </div>
            <span className=''>Delivery Fee ${deliveryFee}</span>
        </div>
          <span className='font-bold'>${price}</span>
      </div>
    </div>
  )
}

export default index