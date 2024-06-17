"use client"
import React from 'react'
import { useUser } from '../contexts/UserContext';

const Page = () => {
    const { user } = useUser()


    return (
        <div>
            <h1 className='text-red-950' >{user.name}</h1>
        </div>
    )
}

export default Page         