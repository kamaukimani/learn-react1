import React,{useState} from 'react'
function Toggle(){
    const [isOn,setIsOn]=useState(false)
    function handleOn(){
        //setIsOn(!isOn)
        setIsOn(isOn=>!isOn)
    }
    const color=isOn ? "red" : "green";
    return <button 
                onClick={handleOn}
                style={{background:color}}>
                {isOn ? "ON" : "OFF"}
            </button>
}

export default Toggle;