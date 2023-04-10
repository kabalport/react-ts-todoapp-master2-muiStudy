import FormControl from "@mui/material/FormControl";
import React from "react";
import styles from "../Todo.module.css";
import {FormControlLabel, FormLabel, Radio, RadioGroup} from "@mui/material";

interface Props {
  readonly filter: string;
  readonly onChangeFilter: (filter: string) => void;
}

const TodoFilter = ({ filter, onChangeFilter }: Props) => {
  const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) => onChangeFilter(e.target.value);
  
  return (
    <div className={styles.filter}>

        <Radio
            checked={filter === "ALL"}
            onChange={handleFilter}
            value="ALL"
            // name="radio-buttons"
            // inputProps={{ 'aria-label': 'A' }}
        />전체
        <Radio
            checked={filter === "A"}
            onChange={handleFilter}
            value="A"
            // name="radio-buttons"
            // inputProps={{ 'aria-label': 'B' }}
        />미완료
        <Radio
            checked={filter === "B"}
            onChange={handleFilter}
            value="B"

            // name="radio-buttons"
            // inputProps={{ 'aria-label': 'B' }}
        />완료


      {/*<input*/}
      {/*  type="radio"*/}
      {/*  value="ALL"*/}
      {/*  checked={filter === "ALL"}*/}
      {/*  onChange={handleFilter}*/}
      {/*/>*/}
      {/*전체*/}
      {/*<input*/}
      {/*  type="radio"*/}
      {/*  value="A"*/}
      {/*  checked={filter === "A"}*/}
      {/*  onChange={handleFilter}*/}
      {/*/>*/}
      {/*미완료*/}
      {/*<input*/}
      {/*  type="radio"*/}
      {/*  value="B"*/}
      {/*  checked={filter === "B"}*/}
      {/*  onChange={handleFilter}*/}
      {/*/>*/}
      {/*완료*/}
    </div>
  );
};

export default TodoFilter;
