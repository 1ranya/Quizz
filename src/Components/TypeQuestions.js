import React, { useState, useEffect } from 'react'

export default function Typequestions({handleStartWithTimer,handleStartWithoutTimer,startWithTimer,startWithoutTimer}) {
    useEffect(()=>console.log(startWithTimer))
    return (
            <div >
                {!startWithTimer&&!startWithoutTimer ?
                
                <div class="columns">
                    <div class="card column startWithTimerDiv typeQuestions" onClick={handleStartWithTimer}>
                        Timed out answers 
                        <br/>
                        <ion-icon name="alarm-outline" ></ion-icon>
                    </div>
                    
                    <div className="espacement"> </div>
                    <div class="card column startWithoutTimerDiv typeQuestions" onClick={handleStartWithoutTimer}>
                        I prefere answering without pressure! 
                        <br/>
                        <ion-icon name="body-outline"></ion-icon>
                    </div>
                </div>:
                <div></div>
                }
            </div>
    )
}
