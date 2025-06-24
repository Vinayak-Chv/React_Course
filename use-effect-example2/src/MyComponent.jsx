import {useState, useEffect} from "react"

function MyComponent() {
    const [width, setWidth] = useState(window.innerWidth)
    const [height, setHeight] = useState(window.innerHeight)

    // This code says do this and after doing it, remove it right away
    useEffect(() => {
        window.addEventListener("resize", handleResize)
        console.log("EVENT LISTENER ADDED")

        // We have to add this to clean up the code
        return () => {
            window.removeEventListener("resize", handleResize)
            
        }
    }, [])

    // You can use more than one useEffect Functions also
    useEffect(() => {
        document.title = `Size ${width}x${height}`
    })

    function handleResize() {
        setWidth(window.innerWidth)
        setHeight(window.innerHeight)
    }

    return(
        <>
            <p>Window Width: {width}px</p>
            <p>Window Height: {height}px</p>
        </>
    )
}

export default MyComponent