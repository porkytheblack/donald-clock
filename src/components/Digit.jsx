import React from 'react'

function Digit({digit}) {
  return (
    <div className="flex flex-row items-center justify-center p-2 font-semibold text-white  text-2xl  ">
        {
            digit
        }
    </div>
  )
}

export default Digit