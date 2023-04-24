import React, { useState } from "react";
import styles from "./button_add.css";


export default function ButtonAdd({...buttonAddProps}) {

    return(
<button className={styles.btn_add} {...buttonAddProps}>Add</button>
        )
}