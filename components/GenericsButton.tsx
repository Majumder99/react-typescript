import React from 'react'

type ButtonProps<T> = {
    countValue: T;
    countHistory: T[]
}


export default function GenericsButton<T>({countValue, countHistory} : ButtonProps<T>) {
    return (
        <>
            <button>click me!</button>
        </>
  )
}