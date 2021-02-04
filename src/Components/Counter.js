import React, { useEffect, useState } from 'react'

export default function Counter({next,onChangeNext}) {
    const [counter, setCounter] = useState(0)

    useEffect(()=>{
        Counter()
        console.log("hello")
    }, [])
    function Counter(){
        const interval = setInterval(()=>setCounter(value => value+1), 1000 )
        setTimeout(()=>{
            clearInterval(interval)
            var newNext = next + 1
            onChangeNext(newNext)
            setCounter(counter=>counter=0)
            console.log('result')
        }, 11000)
    }
    
    return (
        <div className="hero-body">
            <div class="container has-text-centered">
                <div className="title counter">
                    {counter}
                </div>
            </div>
        </div>
            
    )
}
 