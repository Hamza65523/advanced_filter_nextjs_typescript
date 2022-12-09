import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faSearch } from '@fortawesome/free-solid-svg-icons'
import {NextPage} from 'next'
interface Props{
  handlerChange:any,
  value:string
}
const index:NextPage<Props> = ({handlerChange,value}) => {
  return (
    <div>
      <div className="bg-red-400 flex gap-2 py-2 px-2">
        <div className="w-6 ">
        <FontAwesomeIcon  icon={faSearch}/>
        </div>
        <input type="text" value={value} onChange={handlerChange} className='rounded ' />
      <h4 className='mx-auto my-0 text-xl font-bold font-mono'>Advanced Filter Testing</h4>
      </div>
    </div>
  )
}

export default index