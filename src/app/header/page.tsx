"use client"
import React, { useEffect } from 'react'
import { useUser } from '../contexts/UserContext';
import { useAppDispatch, useAppSelector } from '@/hooks/ReduxHook';
import { decrement, increment, incrementByAmount } from '../redux/slice/MyFirstslice';
import { both, increment1, decrement1 } from '../redux/slice/SecoundSlice';
import { toggleMode } from "../redux/slice/ModeSlice"

const Page = () => {
    const { user, setUser } = useUser()
    const count = useAppSelector(mystate => mystate.counterSlice)
    const sec = useAppSelector(secound => secound.SecoundSlice)
    const modeSlice = useAppSelector(mode => mode.ModeSlice)
    const dispatch = useAppDispatch()
    const dispatch1 = useAppDispatch()

    const handleToggle = () => {
        dispatch(toggleMode());
    };

    const mode = useAppSelector(state => state.ModeSlice.value);
    console.log(mode, "mode")
    useEffect(() => {
        document.body.className = mode;
    }, [mode]);



    return (
        <>
            <section className='bg-black dark:bg-white ' >
                <div>
                    <h1 onClick={() => setUser({
                        name: "sahil",
                        class: "2 fail"
                    })} className='text-red-950' >{user.name}</h1>
                </div>
                <div>
                    <h1 className='dark:text-[red]' >{count.value}</h1>
                    <button onClick={() => dispatch(increment())} >++++++</button>
                    <button onClick={() => dispatch(decrement())} >--------</button>
                    <button onClick={() => dispatch(incrementByAmount(5))} >***********</button>
                </div>

                <div>
                    <h1 className='text-[200px] dark:text-[red]' >{sec.value}</h1>
                    <button onClick={() => dispatch1(increment1())} >++++++</button>
                    <button onClick={() => dispatch1(decrement1())} >--------</button>
                    <button onClick={() => dispatch1(both(5))} >***********</button>
                </div>
                <h1>{modeSlice.value}</h1>
                <button className='dark:text-white' onClick={handleToggle}>Dark/ll</button>
            </section>
        </>
    )
}

export default Page 
