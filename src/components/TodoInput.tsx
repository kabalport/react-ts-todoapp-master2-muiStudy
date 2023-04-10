import Paper from "@mui/material/Paper";
import React from "react";
import styles from "../Todo.module.css";
import {Button, Grid, TextField} from "@mui/material";

interface Props {
  readonly input: string;
  readonly onInsert: (input: string) => void;
  readonly onChangeInput: (input: string) => void;
}

const TodoInput = ({ input, onInsert, onChangeInput }: Props) => {

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    onInsert(input);
    onChangeInput("");
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => onChangeInput(e.target.value);

  return (


   // <div className={styles.input}>
      <div>
        <form onSubmit={onSubmit}>
        <Grid container style={{ marginTop: 20 }}>
          <Grid xs={11} md={11} item style={{ paddingRight: 16 }}>
            <TextField placeholder="Add Todo here" fullWidth
                       onChange={onChange}
                       value={input}/>
          </Grid>
          <Grid xs={1} md={1} item >
            <Button fullWidth style={{ height: '100%' }} color="secondary" variant="outlined" type="submit">
              +
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>

  );
};

export default TodoInput;
