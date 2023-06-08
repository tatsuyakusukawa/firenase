import React ,{useState,useEffect,useContext}from 'react';
import dig from "object-dig"; 
import { AuthContext } from "../providers/AuthProvider.js"; 
import {authentication,logout} from "../service/firebase.js";
import *as Api from "../service/api.js";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { ListItem, ListItemAvatar, Avatar, ListItemText ,secondaryAction} from '@mui/material';
import FolderIcon from '@mui/icons-material/Folder';
import { TextField } from '@mui/material';
import Box from '@mui/material/Box';
import {Button} from '@mui/material';
import { Typography } from '@mui/material';
import { AppBar } from '@mui/material';
import { Toolbar } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';


const ToDoList = (props) => {

    const deleteHandle = async(id) => {
        Api.deleteTodo(id);
        props.fetch();
        console.log("hoge");
    }


    const todoList = props.todos.map((todo) => {
    return (
        <ListItem key={todo.id}
        secondaryAction={
            <IconButton edge="end" aria-label="delete" onClick={()=>deleteHandle(todo.id)}>
            <DeleteIcon />
            </IconButton>
        }
        >
        <ListItemText
            primary={todo.content}

        />
        </ListItem>

    );
    });
    return (
    <div>
        <h2>あなたのToDo</h2>
        <ul>{todoList}</ul>
    </div>
    )
};

export default ToDoList;



