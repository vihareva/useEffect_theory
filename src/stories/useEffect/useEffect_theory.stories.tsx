import React, {useEffect, useState} from 'react';

export default {
    title: 'useEffect/1'
}

export const SimpleExample = () => {
    const [fake, setFake]=useState(1)
    const [counter, setCounter] = useState(1)
    console.log('SimpleExample')

    useEffect(() => {
        debugger
        console.log('useEffect every render')
        document.title = counter.toString()
    })
    useEffect(() => {
        debugger
        console.log('useEffect only for first render' +
            '(component did mount<=>for requests to api')
        document.title = counter.toString()
    }, [])
    useEffect(() => {
        debugger
        console.log('useEffect first time and every time ' +
            'when counter have been changed')
        document.title = counter.toString()
    }, [counter])

    return <>
        counter: {counter}
        <button onClick={() => setCounter(counter + 1)}>+</button>
        fake: {fake}
        <button onClick={() => setFake(fake+ 1)}>+</button>
    </>
}