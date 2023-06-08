import React ,{useState,useEffect,useContext}from 'react';
import dig from "object-dig"; 
import { AuthContext } from "../providers/AuthProvider.js";
import {Button} from '@mui/material'; 
import {authentication,logout} from "../service/firebase.js";
import *as Api from "../service/api.js";
import ToDoList from "./Todolist.js";
import { TextField } from '@mui/material';
import Box from '@mui/material/Box';

    const Dashboard = () => {
        const currentUser = useContext(AuthContext);
        const [inputName, setInputName] = useState("");
        const [todos, setTodos] = useState([]);
        console.log(inputName);
            console.log(todos);
    
        useEffect(()=>{
        // Todo一覧を取得
        fetch();
        }, [currentUser])
    
        const fetch = async() => {
        if( dig(currentUser, 'currentUser', 'uid') ){
            const data = await Api.initGet(currentUser.currentUser.uid);
            await setTodos(data);
        }
        }
    
        const formRender = () => {
        let dom
        // もしログインしていたら、TODOの入力フォーム
        if( dig(currentUser, 'currentUser', 'uid') ){
            dom = <form>
            <Box       component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: '20px',
                }}
                noValidate
                autoComplete="off">

            <TextField id="outlined-basic" label="Todoを記載" variant="outlined" placeholder="ToDo" value={inputName} onChange={(event) => setInputName(event.currentTarget.value)}/>
            <Button sx={{
                // 背景色を灰色に
                backgroundColor: '#f5f5f5',
                // 文字の色を黒に
                color: '#000000',
                // ホバー時の背景色をグレーに
                '&:hover': {
                backgroundColor: '#f5f5f5',
                },
                // フォーカス時の背景色をグレーに
                '&:focus': {
                backgroundColor: '#f5f5f5',
                },
            }} variant="contained"type="button" onClick={() => post()} >追加</Button>
            </Box>
            </form>
        }else{
        // もしログインしていない場合は、ログインボタン
            dom = <button onClick={authentication}>ログイン</button>
        }
        return dom
        }
    
        const post = async() => {
        await Api.addTodo(inputName, currentUser.currentUser.uid);
        await setInputName("");
        fetch();
        }
    
        return(
        <div>
            {formRender()}
            <Box sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: '20px',
            }}>

            <ToDoList sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',

            }} todos={todos} fetch={fetch} />
            </Box>
            
        </div>
        )
    };
    export default Dashboard;

