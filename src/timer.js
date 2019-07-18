import React from 'react'

function Timer(props) {
    var heure=Math.floor((props.ms/3600000) % 24)
    var minute=Math.floor((props.ms/60000) %60)
    var second=Math.floor((props.ms/1000) %60)
    if(heure < 10)  heure= "0" + heure    
    if(minute < 10) minute= "0" + minute
    if(second < 10) second= "0" + second    
    return (
        <div>
            <h1 className='time hms'>{heure} : {minute} : {second}</h1>
            <h1 className='hms'>Hour Minute Second</h1>
            <div className='btn'>
                <button className='btnsr' type="button">start</button>
                <button className='btnsr' type="reset" >reset</button>
            </div>
        </div>
    )
};

export default Timer;