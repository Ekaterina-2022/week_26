import React, { useState, useEffect } from "react";

import styles from "./table-cell.css";

const TableCell = (props) => {
	const { state, setState, isRecievedWord, isReadOnlyAddedWord } = props;
	const [childState, setChildState] = useState(state || "");
	//const [isDisabled, setIsDisabled] = useState(true);
	const { readOnlyCell } = props;

	const handleChange = (event) => {
		const newState = event.target.value;
		setChildState(newState);
	};

	return (
		<td className={styles.table__cell}>
			<input
				//defaultValue={state}
				value={childState}
				disabled={isRecievedWord ? readOnlyCell : isReadOnlyAddedWord}
				onChange={handleChange}
				type="text"
			/>
		</td>
	);
};

export default TableCell;
