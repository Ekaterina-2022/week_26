import React, { useState } from "react";
import styles from "./button_edit.css";


export default function ButtonEdit({...buttonEditProps}) {
    return(
<button className={styles.btn_edit} {...buttonEditProps}>Edit</button>
        )
}