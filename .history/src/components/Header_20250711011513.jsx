import React from 'react'
import MenuItem from '@/components/MenuItem'
import { AiFillHome } from 'react-icons/ai'
import { BsFillInfoCircleFill } from "react-icons/bs";

export default function Header() {
  return (
    <>
    <div>
    <div className='flex gap-4'>
      <MenuItem title='home' address='/' Icon={AiFillHome} />
      <MenuItem title='about' address='/about' Icon={BsFillInfoCircleFill} />
    </div>
    <div>
      <span className='px-2  py-1 font-bold bg-amber-500 rounded-lg text-2xl'>IMDb</span>
      <span className=' hidden sm:inline text-'>Clone</span>
    </div>
    </div>
    </>
  )
}
