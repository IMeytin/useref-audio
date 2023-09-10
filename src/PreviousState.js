import { useEffect, useRef, useState } from "react"

const PreviousState = () => {
    const [count, setCount] = useState(0);
    const previousCountRef = useRef(0);

    const previousCount = previousCountRef.current

    useEffect(() => {
        previousCountRef.current = count;
    },[count])

    return(
        <div>
            <p>current state: {count}</p>
            <p>previous state: {previousCount}</p>
            <button onClick={() => setCount(count + 1)}>Click here</button>
        </div>
    )
}

export default PreviousState; 