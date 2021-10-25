import React, {useEffect, useState} from 'react';

export default {
    title: 'useEffect/2'
}

export const SetIntervalExample = () => {
    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)
    console.log('SetTimeoutExample')
        //не работает так как setInterval берет counter  из замыкания
        //то есть старый counter из первой перерисовки компоненты
        // useEffect(() => {
        //     setInterval(()=>{
        //         console.log('tick'+ counter)
        //         setCounter(counter+1)
        //     }, 1000)
        // }, [])


    //закидываем в setState не конкретное значение счетчика а функцию
    // которая принимает актуальное значение счетчика(стейта) и прибавляет к нему 1
    //и делает это возвращенное прибавленное значение новым значением стейта
    useEffect(() => {
        setInterval(() => {
            setCounter(state => state + 1)
        }, 1000)
    }, [])

    return <>
        counter: {counter}
        fake: {fake}
    </>
}