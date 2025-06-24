// useEffect() - Perform some code only in certain situations and you can use the clean up code also.
// Mounting is to add the component in the DOM and vice-verse.

import {useState, useEffect} from "react"

function MyComponent() {
    const [count, setCount] = useState(0)
    const [color, setColor] = useState("green")

    useEffect(() => {
        document.title = `Count: ${count} ${color}`
    }, [count, color])

    function addCount() {
        setCount(c => c + 1)
    }

    function subCount() {
        setCount(c => c - 1)
    }

    function changeColor() {
        setColor(c => c === "green" ? "red" : "green")
    }

    return(
        <>
            <p style={{color: color}}>Count: {count}</p>
            <button onClick={addCount}>Add</button>
            <button onClick={subCount}>Subtract</button><br />
            <button onClick={changeColor}>Change Color</button>
        </>
    )
}

export default MyComponent