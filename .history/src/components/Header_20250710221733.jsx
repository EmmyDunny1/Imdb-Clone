import React from 'react'
import MenuItem from '@/components/MenuItem'
import { AiFillHome } from 'react-icons/ai'
import { BsFillInfoCircle } from 'react-icons/ai'

export default function Header() {
  return (
    <div>
      <MenuItem  title='home' address='/' Icon={AiFillHome}/>
      <MenuItem  title='about' address='/about' Icon={BsFillInfoCircleFill}/>
    </div>
  )
}
