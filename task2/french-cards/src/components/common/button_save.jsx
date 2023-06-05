import React, { useState } from "react";
import styles from "./button_save.css";

export default function ButtonSave({ ...buttonSaveProps }) {
	return (
		<button className={styles.btn_save} {...buttonSaveProps}>
			Save
		</button>
	);
}
