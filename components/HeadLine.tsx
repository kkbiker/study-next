import React from "react";

export function HeadLine(props) {
    console.log(props);

    return (
        <div>
            <p>{props.title}</p>
            <p>{props.children}</p>
        </div>
    );
}