import axios from 'axios'
import React, { useEffect, useState } from 'react'


const Counter = () => {

    const [total, setTotal] = useState(0)

    useEffect(() => {
        console.log("mounting")
    }, [])


    useEffect(() => {

        console.log("updating")

        let interval = setInterval(() => {
            console.log("interval")
        }, 1000)

        return () => {
            console.log("unmount")
            clearInterval(interval)
        }
    }, [total])



    return (
        <div>
            <p> current count:{total}</p>
            <button onClick={() => { setTotal(total + 1) }}>add</button>
        </div>
    )
}

export default Counter