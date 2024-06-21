import axios from "axios";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext()


const AuthProvider = ({ children }) => {


    const [logUser, setlogUser] = useState({
        email: "",
        password: ""
    })

    const [isLogged,setIsLogged]=useState(false)
    const [token, setToken] = useState(localStorage.getItem("token"))
    const navigate = useNavigate()

    const handleLogin = async (e) => {
        e.preventDefault()
        try {

            const { data } = await axios.post("https://reqres.in/api/login", logUser)
            localStorage.setItem("token", data.token)
            setToken( localStorage.getItem("token"))
            navigate("/")
            console.log(token);

        } catch (error) {
            console.log(error);
        }
    }

    const handleDashboard=()=>{
        setIsLogged(true)
    }

    const handleHome=()=>{
        setIsLogged(false)
    }

    const handleLogout=()=>{
        localStorage.removeItem("token")
        window.location.reload()
    }
     
    return (
        <AuthContext.Provider value={{ handleLogin,handleHome, handleLogout,handleDashboard,isLogged, logUser, setlogUser,token }}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthProvider }