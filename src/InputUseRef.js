import { useRef, useState } from 'react';

const InputUseRef = () => {
    const [city, setCity] = useState("");
    const inputRef = useRef();

    const handleClick = () => {
        inputRef.current.focus();
    };
    return (
        <div>
            <input ref={inputRef} value={city} type="text" onChange={(e) => setCity(e.target.value)}/>
            <p>I want to go to {city}</p>
            <button onClick={handleClick}>useRef to focus on input</button>
        </div>
    );
};

export default InputUseRef;

