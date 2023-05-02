import styles from "../styles/index.module.css";
import React from "react";

export function HeadLine(props) {
    console.log(props);

    return (
        <div>
            <p className={styles.port}>{props.title}</p>
            <p>{props.children}</p>
        </div>
    );
}