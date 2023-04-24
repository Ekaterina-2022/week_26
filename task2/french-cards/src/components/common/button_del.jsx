import React, { useState } from "react";
import styles from "./button_del.css";


export default function ButtonDelete({...buttonProps}) {

    return(
<button className={styles.btn_del} {...buttonProps}></button>
        )
}