import { useContext, createContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalState } from "../hooks/useLocalStorage";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [loggedUser, setLoggedUser] = useLocalState('loggedUser', '');

    const navigate = useNavigate();


    const logIn = async (token: string) => {
        if (token) {
            setLoggedUser(token);
            navigate('/');
        }
    };


    const logOut = () => {
        setLoggedUser('');
        navigate('/login');
    }

    const value = useMemo(
        () => ({
            loggedUser,
            logIn,
            logOut,
        }),
        [loggedUser]
    );

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

export const useAuth = () => {
    return useContext(AuthContext);
};