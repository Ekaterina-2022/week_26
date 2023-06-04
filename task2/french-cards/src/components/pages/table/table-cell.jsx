import React, { useState, useEffect } from "react";

import styles from "./table-cell.css";

const TableCell = ({ state, setState }, props) => {
	const [childState, setChildState] = useState(state || " ");
	const [isDisabled, setIsDisabled] = useState(true);
	const { readOnlyCell } = props;

	/*const inputHandles = () => {
    setIsDisabled(!isDisabled);

  };*/
	/*const handleChange = (event) => {
		const newState = event.target.value;
		setChildState(newState);
		setState(newState);
	};*/

	return (
		<td className={styles.table__cell}>
			<input
				defaultValue={childState}
				disabled={readOnlyCell}
				/*onChange={({ target }) => setChildState(target.value)}
				type="text"*/
			/>
		</td>
	);
};

export default TableCell;
