import React, {useState} from "react"

function Counter() {
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(c => c + 1)
    }

    const decrement = () => {
        setCount(c => c - 1)    // Updater Program Function
    }

    const reset = () => {
        setCount(0)
    }

    return(
        <div className="container">
            <p className="display">{count}</p>
            <button className="btn" onClick={decrement}>Decrement</button>
            <button className="btn" onClick={reset}>Reset</button>
            <button className="btn" onClick={increment}>Increment</button>
        </div>
    )
}

export default Counter