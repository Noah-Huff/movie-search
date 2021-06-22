import React from 'react'

const Slider = ({ value, switchSlider }) => {
    return (
        <label className="slider-label">
            <input type="checkbox" className="slider" value={value} onClick={switchSlider}></input>
            <span className="slider-span"></span>
        </label>
    )
}

export default Slider
