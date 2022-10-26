import React from "react";
import myStyle from "./Button.module.css";

const Button = (props) => {
    return (
        <button 
        className={myStyle.btn}
        onClick={props.click}
        type={props.type || "button"}
        >
        {props.children}
        </button>
    );
};

export default Button;