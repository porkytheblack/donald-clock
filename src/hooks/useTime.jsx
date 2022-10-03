import React, { useState, useEffect } from 'react'

function useTime() {  
    const [time, setTime] = useState(new Date())
    useEffect(() => {
        const interal_ref = setInterval(()=>{
            setTime(()=>new Date())
        }, 1000)
        return () => {
            clearInterval(interal_ref)
        };
    }, []);
  return (
    {
        time,
        hours:  (()=>{
            const hours = new Date(time).getHours()
            var h= hours % 12
            return  h ? h : 12
        })() ,
        minutes: (()=>{
            const mins = new Date(time).getMinutes()
            return mins < 10 ? '0'+mins : mins
        })(),
        seconds: (()=>{
            const secs = new Date(time).getSeconds()
            return secs < 10 ? '0'+secs : secs
        })(),
        am_or_pm: (()=>{
            const hours = new Date(time).getHours()
            var ampm = hours % 12 >= 12 ? 'PM' : 'AM';
            return ampm
        } )() ,
    }
  )
}

export default useTime