import React, { useState } from "react";
import styles from "./table-header.css"

export default function TableHeader() {
	return (
		<thead>
		<tr className={styles.container}>
			<th>word</th>
			<th>transcription</th>
            <th>translation</th>
            <th>theme</th>
			<th>options</th>
		</tr>
		</thead>
	);
}