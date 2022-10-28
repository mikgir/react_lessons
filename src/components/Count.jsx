import {useState} from "react";

export const Count = (props) => {
    const [count, setCount] = useState(1)
    const handleClick = () => {
        setCount((prevCount)=>prevCount + 1)
    }
    return <>
        <p>Props name: {props.name}</p>
        <p>Count state: {count}</p>
        <button type={"button"} onClick={handleClick}>click</button>
    </>
}