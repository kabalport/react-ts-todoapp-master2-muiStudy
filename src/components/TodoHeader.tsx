import styles from "../Todo.module.css";
import {
    Container,
    List,
    Paper,
    Grid,
    Button,
    AppBar,
    Toolbar,
    Typography,
} from "@mui/material";

const TodoHeader = () => {
    // navigationBar 추가
    let navigationBar = (
        <AppBar position="static">
            <Toolbar>
                <Grid justifyContent="space-between" container>
                    <Grid item>
                        <Typography variant="h6">오늘의 할일</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="h6">리액트 공부</Typography>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );


  return (
    <div className={styles.header}>
        {navigationBar} {/* 네비게이션 바 렌더링 */}
       {/*<h1>TODO Application</h1>*/}
     </div>
  );
};

export default TodoHeader;
