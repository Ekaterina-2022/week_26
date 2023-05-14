import React, { useState } from "react";

import styles from "./table-cell.css";


const TableCell = ({ state, setState }) => {
  const [childState, setChildState] = useState(state || " ");
  
  const handleChange = (event) => {
    const newState = event.target.value;
    setChildState(newState);
    setState(newState);
  }

    return (
      <td className={styles.table__cell}>
        <input
          value={childState}
          onChange={({ target }) => setChildState(target.value)}
          type="text" />
      </td>
    )
  }
  
  export default TableCell

  /*const TableCell = ({ item }) => {
    const [state, setState] = useState(item);
  
    return (
      <div className={styles.table__cell}>
        <input
          value={state}
          onChange={({ target }) => setState(target.value)}
          type="text" />
      </div>
    )
  }
  
  export default TableCell*/