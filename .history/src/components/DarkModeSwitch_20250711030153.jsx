import React from 'react'

export default function DarkModeSwitch() {
  return (
    <div>
      <label htmlFor="toggleB" className="flex items-center cursor-pointer">
        <div className="relative">
          <input id="toggleB" type="checkbox" className="sr-only" />
          <div className="block bg-gray-600 w-14 h-8 rounded-full"></div>
          <div className="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></div>
        </div>
        <span className="ml-3 text-gray-700">Dark Mode</span>
      </label>
    </div>
  )
}
