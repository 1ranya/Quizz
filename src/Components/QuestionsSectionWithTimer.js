import React, { useEffect, useState } from 'react'
import Questionssection from './QuestionsSection'
import Counter from "./Counter"
export default function Questionssectionwithtimer(props) {
    
    const [next, setNext] = useState(0)
    const changeQuestion = () =>{ 
        setNext(next=>next+1)
    }

    useEffect(()=>{
        console.log("next QSwithTimer ", next)
    },[])

    const onChangeNext = (newNext) =>{
        setNext((next)=>next = newNext)
    }
    return (
        <>
            <Questionssection next={next} changeQuestion={changeQuestion}/>
            <Counter next={next} onChangeNext={onChangeNext}/>
            hhhh{next}
        </>
    )
}
