import React from 'react'
import useTime from '../hooks/useTime'
import Colon from './Colon'
import Digit from './Digit'

function Time() {
    const {hours, minutes, seconds, am_or_pm} = useTime()
  return (
    <div className="flex flex-row items-center justify-center w-full h-full">
        {
            hours && <Digit digit={hours} />
        }
        <Colon/>
        {
            minutes && <Digit digit={minutes} />
        }
        <Colon/>
        {
            seconds && <Digit digit={seconds} />
        }
        <div className="flex flex-row items-center justify-center p-2 font-semibold text-white  text-2xl  ">
            {
                am_or_pm
            }
        </div>
    </div>
  )
}

export default React.memo(Time)