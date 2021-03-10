import Slider from '@material-ui/core/Slider';
import React from "react";
import "./CommonStyles/frostedGlass.css"

const TimeSlider = ({startTime, setTime}) => {
    return(
        <div className="container">
            <Slider 
            defaultValue={startTime}
            marks
            step={1}
            min={0}
            max={23}
            style = {{color: "brown"}}
            value={startTime}
            onChange = {(event, value) => {setTime(value)} }
          />
        </div>
    )
}

export default TimeSlider;