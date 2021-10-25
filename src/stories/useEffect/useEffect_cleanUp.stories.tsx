import React, {useEffect, useState} from 'react';

export default {
    title: 'useEffect/4'
}

export const ResetEffectExample = () => {
    const [counter, setCounter] = useState(1)
    console.log('Component rendered with counter='+ counter)

    useEffect(() => {

        //всякий раз когда меняется значение в стейте показывай актуальное значение счетчика
        console.log('Effect occurred'+ counter)


        //сброс эффекта перед смертью компоненты или перед срабатыванием нового эффекта после того как компонента отрисуется с новым значением
        //(при нажатии на + стейт поменяется должно вызваться log effect occurred 2 но сначала вызовется зачистка старого
        //эффекта то есть reset effect 1
        return ()=>{
            console.log('RESET EFFECT'+ counter)
        }
    }, [counter])

    //counter  в setCounter будет разным так как каждый раз когда будет изменяться counter будет перерисовываться кнопка
    //и будет создаваться новая функция
    // return <>
    //     counter: {counter}
    //     <button onClick={()=>{setCounter(counter+1)}}>+</button>
    // </>

    //даже если функцию поместить в отдельный колбэк он будет пересоздаваться при каждом изменении counter-а то есть
    //при каждом вызове компоненты и ф-я будет всегда иметь актуальный counter
    const increase=()=>{setCounter(counter+1)}
    return <>
        counter: {counter}
        <button onClick={increase}>+</button>
    </>

}

export const KeysTracker = () => {
    const [text, setText] = useState('')
    console.log('Component rendered with '+ text)

    useEffect(() => {
        const handler=(e:  KeyboardEvent)=>{
            console.log(e.key)
            //ф-я каждый раз будет создаваться новая и из замыкания брать актуальное значение текста если в массиве зависимостей ничего нет
            //setText(text=>text+ e.key)
            setText(text+e.key)
        }
        window.addEventListener('keypress', handler)

        //если не сбросить эффект то даже если компонента умрет эффект продолжит работать и
        //в консоли будет выводиться текст то есть в памяти остались фукнции колбэки(eventlisteners) и они продолжают вызываться
        //приводит к утечке памяти

        //или если в массиве зав-тей текст то при каждом изменении  текста
        //срабатывают все старые эффекты

        return ()=>{
            window.removeEventListener('keypress',handler)
        }
    }, [text])

    return <>
        typed text: {text}

    </>

}


export const SetTimeoutWithReset = () => {
    const [text, setText]=useState('')

    console.log('SetTimeoutExample '+ text)

    useEffect(() => {
        const id=setTimeout(()=>{
            console.log('timeout expired')
            setText('3 seconds passed')
        }, 3000)


        //если не сбросить эффект то будет такая ошибка (если выйти из компоненты меньше чем через 3 сек
        //то есть компонента умерла а мы пытается в стейт чтото засетать)
//Warning: Can't perform a React state update on an unmounted component.
// This is a no-op, but it indicates a memory leak in your application.
// To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function.
        return ()=>{
            clearTimeout(id)
        }
    }, [])


    return <>
        {text}
    </>
}