import React, { useState } from "react";
import styles from "./table-row.css";
import ButtonDelete from "../common/button_del";
import ButtonSave from "../common/button_save";
import TableCell from "./table-cell";
import ButtonEdit from "../common/button_edit";


function TableRow (words, {handleDelete}){
  //console.log('props obj:', {handleDelete});
    const {
        word,
        transcription,
        translation,
        theme,
    } = words;
    
    return (
      <tr className={styles.table__row} key={word.id}  >
        <TableCell item={word}></TableCell>
        <TableCell item={transcription}></TableCell>
        <TableCell item={translation}></TableCell>
        <TableCell item={theme}></TableCell>
        <td><ButtonDelete onClick={() => handleDelete}>delete</ButtonDelete></td>
      </tr>
    )
  };

  export default TableRow