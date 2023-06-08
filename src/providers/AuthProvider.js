import React ,{useState,useEffect}from "react";
import { auth } from "../service/firebase";

export const AuthContext = React.createContext();

export const AuthProvider = ({children}) => {
    const [currentUser, setcurrentUser] = useState(null);
    useEffect(() => {
        // ここにログイン状態を監視する処理を書く
        auth.onAuthStateChanged(setcurrentUser);
    }, [])
    return (
        <AuthContext.Provider value={{currentUser}}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;