import { BrowserRouter, useLocation } from "react-router-dom";
import PublicLayout from "./layout/PublicLayout";
import PublicRoutes from "./routes/PublicRoutes";
import { AuthContext, AuthProvider } from "./context/AuthContext";
import { useContext, useEffect } from "react";
import AdminRoutes from "./routes/AdminRoutes";
import { UsersProvider } from "./context/UsersContext";

function App() {

  const { isLogged } = useContext(AuthContext)

  const location = useLocation()

  return (
    <div className="App">

      
        {isLogged ? <AdminRoutes /> : <PublicRoutes />}

    </div>
  );
}

export default App;
