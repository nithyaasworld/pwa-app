import { useRef } from "react";

export default function Query({ setUserInput }) {
    let locationInputRef = useRef();
    let clickHandler = () => {
        setUserInput(locationInputRef.current.value);
    }
    return (
        <div className="query-container">
            <h1>Weather and Pollution Info</h1>
            <div className="location-input-box">
                <label htmlFor="location">Location: </label>
                <input ref={locationInputRef} type="text" id="location" name="location"/>
            </div>      
            <button onClick={clickHandler} id="get-info">Get Info</button>
        </div>
    )
}