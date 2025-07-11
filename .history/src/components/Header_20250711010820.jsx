import React from 'react'
import MenuItem from '@/components/MenuItem'
import { AiFillHome } from 'react-icons/ai'
import { BsFillInfoCircleFill } from "react-icons/bs";

export default function Header() {
  return (
    <><div className='flex gap-4'>
      <MenuItem title='home' address='/' Icon={AiFillHome} />
      <MenuItem title='about' address='/about' Icon={BsFillInfoCircleFill} />
    </div>
    <div>
      <span className='px-2 '>IMDb</span>
      <span>Clone</span>
    </div>
    </>
  )
}
