import React ,{useContext, useState}from "react"; 
import dig from "object-dig"; 
import {authentication,logout} from "../service/firebase.js";
import { AuthContext } from "../providers/AuthProvider.js"; 
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';



const Header = () => {
    const currentUser = useContext(AuthContext);
    console.log(currentUser);
    const buttonRender = () => {
        let buttonDom
        if(dig(currentUser,"currentUser","uid")){
            buttonDom = <Button  variant="inherit" onClick={logout}>ログアウト</Button>
        }else{
            buttonDom = <Button  variant="inherit" onClick={authentication}>ログイン</Button>
        }
        return buttonDom
    }



    return (
        <AppBar position="static">
        <Toolbar>

        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            ToDoList
        </Typography>
        {buttonRender()}
        </Toolbar>
    </AppBar>
);

}

export default Header;