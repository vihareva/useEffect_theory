import React, {useEffect, useState} from 'react';

export default {
    title: 'useEffect/3'
}
//
// export const Clock = () => {
//     let date=new Date();
//     console.log(date)
//     const [fake, setFake] = useState(1)
//
//
//     useEffect(() => {
//         setInterval(() => {
//             setFake(state => state + 1)
//         }, 1000)
//     }, [])
//
//     return <>
//         {date.getHours()+ ':'+ date.getMinutes()+ ':'+ date.getSeconds()}
//     </>
// }

const get2DigitNumber=(numb: number)=>numb<10?'0'+numb:numb;
export const Clock = () => {

    const [date, setDate] = useState(new Date())

    useEffect(() => {
       const intervalID= setInterval(() => {
           console.log('tick')
            setDate(new Date())
        }, 1000)
        return()=>{
            clearInterval(intervalID)
        }
    }, [])

    return <>
        {get2DigitNumber(date.getHours())+ ':'+ get2DigitNumber(date.getMinutes())+ ':'+ get2DigitNumber(date.getSeconds())}
    </>
}