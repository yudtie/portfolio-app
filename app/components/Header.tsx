import React from 'react'

const Header = () => {
  return (
    <nav className="bg-white sticky top-0 p-5  max-w-[1600px] mx-auto z-20 ">
      <div className="flex items-start justify-between p-5">
        <div className="">
          menu left
        </div>

        <div className="">
          menu right
        </div>
      </div>
    </nav>
  )
}

export default Header