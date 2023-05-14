import React, { useState } from "react";
import words from "../words_list";
import styles from "./table-row-add.css";
import ButtonEdit from "../../common/button_edit";
import TableCell from "./table-cell";
import ButtonAdd from "../../common/button_add"

export default function TableRowAdd (props) {
    const {
      arr,
        setArr
    } = props;
  const [english, setEnglish] = useState("");
  const [transcription, setTranscription] = useState("");
  const [translation, setTranslation] = useState("");
  const [theme, setTheme] = useState("");

  const handleAddWord = () => {
    const newWord = {
      id: arr.length + 1,
      word: english,
      transcription: transcription,
      translation: translation,
      theme: theme
    }
		
		/*const newArrWords = [
		  ...arr, 
		  { id: newWordId, word: "", transcription: "", translation: "", theme: ""},
		];*/

		setArr([...arr, newWord]);
    setEnglish("");
	  };

    return (
        <tr className={styles.table__row_add}>
          <TableCell setState={setEnglish}>write</TableCell>
          <TableCell setState={setTranscription}></TableCell>
          <TableCell setState={setTranslation}></TableCell>
          <TableCell setState={setTheme}></TableCell>
          <td><ButtonAdd onClick={() => {handleAddWord()}}></ButtonAdd>
          </td>
        </tr>
      )

}