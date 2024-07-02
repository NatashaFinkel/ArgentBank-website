import React from "react";

function Button({btnTxt}) {
    return (
        <div>
            <button type="button" className="sign-in-button">{btnTxt}</button>
        </div>
    )
}

export default Button;