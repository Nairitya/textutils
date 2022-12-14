import React from "react";

function Alert(props) {
    const capitalizeToUpperCase = (word) => {

        let lowerWord = (word).toLowerCase();
        lowerWord = (lowerWord[0].toUpperCase()) + lowerWord.slice(1);
        return lowerWord;

    }
    return (

        <div className="div-alert">{props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            {capitalizeToUpperCase(props.alert.type)}: {props.alert.message}

        </div>}</div>

    );
}

export default Alert;
