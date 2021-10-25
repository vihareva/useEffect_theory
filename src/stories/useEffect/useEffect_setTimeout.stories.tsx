import React, {useEffect, useState} from 'react';

export default {
    title: 'useEffect/2'
}

export const SetTimeoutExample = () => {
    const [fake, setFake]=useState(1)
    const [counter, setCounter] = useState(1)
    console.log('SetTimeoutExample')

    useEffect(() => {
        setTimeout(()=>{
            console.log('settimeout')
            document.title=counter.toString()
        }, 1000)
    }, [counter])

// setTimeout(()=>{
//     console.log('settimeout')
//     document.title=counter.toString()
// }, 1000)

    return <>
        counter: {counter}
        <button onClick={() => setCounter(counter + 1)}>+</button>
        fake: {fake}
        <button onClick={() => setFake(fake+ 1)}>+</button>
    </>
}