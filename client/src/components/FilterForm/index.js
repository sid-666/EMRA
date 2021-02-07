import React from "react";
import "./style.css";
const FilterForm = props => {
    return (
        <form onSubmit={props.filter}>
            <input
                placeholder="Year"
                value={props.year}
                onChange={props.setYear}
            />
            <input
                placeholder="Month"
                value={props.month}
                onChange={props.setMonth}
            />
            <input
                placeholder="startDate"
                value={props.day}
                onChange={props.setDay}
            >
            </input>
            <input
                placeholder="endDate"
                value={props.day}
                onChange={props.setDay}
            >
            </input>
            <input
                placeholder="Type"
                value={props.type}
                onChange={props.setType}
            />
            <input type="submit" value="Submit" />
        </form>
    )
}
export default FilterForm