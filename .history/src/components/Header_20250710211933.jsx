import React from 'react'
import MenuItem from '@/components/MenuItem'
import { AiFillHome } from 'react-icons/ai'

export default function Header() {
  return (
    <div>
      <MenuItem  title='home' address='/' Icon={AiFillHome}/>
      <MenuItem  title='home' address='/' Icon={AiFillHome}/><MenuItem  title='home' address='/' Icon={AiFillHome}/>
    </div>
  )
}
