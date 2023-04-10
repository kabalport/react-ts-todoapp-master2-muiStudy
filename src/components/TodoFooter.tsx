import styles from "../Todo.module.css";
import { useSelector } from "react-redux";
import { TodoState } from "../reducers/todos";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import {Grid} from "@mui/material";

interface Props {
  readonly onClearAll: () => void;
}

const TodoFooter = ({ onClearAll }: Props) => {
  const { todos, nextTodoId } = useSelector((state: TodoState) => ({
    todos: state.todos,
    nextTodoId: state.nextTodoId,
  }));

  const data = {
    todos,
    nextTodoId,
  };

  const onSave = () => {
    localStorage.setItem('todo-app-data', JSON.stringify(data))
  };

  return (
      <div style={{ display: 'flex', justifyContent: 'right', alignItems: 'center' }}>
          <Grid container style={{ marginTop: 20 }}>
              <Grid item style={{ paddingRight: 15, textAlign: 'center' }}>
                  <Button variant="contained" color="error" onClick={onClearAll} fullWidth>
                      모두 삭제
                  </Button>
              </Grid>
              <Grid item style={{ textAlign: 'center' }}>
                  <Button variant="contained" color="success" onClick={onSave} fullWidth>
                      저장
                  </Button>
              </Grid>
          </Grid>
          {/* <div className={styles.footer}>*/}
          {/*  <button onClick={onClearAll}>모두 삭제</button>*/}
          {/*  <button onClick={onSave}>저장</button>*/}
      </div>

  );
};

export default TodoFooter;
