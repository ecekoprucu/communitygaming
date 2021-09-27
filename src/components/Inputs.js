import React from "react";
import '../styles/inputs.scss';

const Input = ({title, type, value, changeVal}) => {
    return (
        <div className="inputWrapper">
            <label htmlFor="tournament_info">{title}</label>
            <input className="tournament_info" onChange={(e) => changeVal(e.target.value, type)}
                   value={value} type="text"/>
        </div>
    )
}

export default Input;
