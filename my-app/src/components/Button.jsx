import React from "react";

function Button({ btnClassName, btnTxt }) {
    return (
        <div>
            <button type="button" className={btnClassName}>{btnTxt}</button>
        </div>
    )
}

export default Button;