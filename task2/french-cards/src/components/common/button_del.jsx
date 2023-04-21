import React, { useState } from "react";
import styles from "./button_del.css";
import words from "../pages/words_list";


export default function ButtonDelete({...buttonProps}) {

    return(
<button className={styles.btn_del} {...buttonProps}></button>
        )
}