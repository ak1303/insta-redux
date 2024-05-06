import Login from "./Login"
import { useContext } from "react";
import { AuthContext } from "../../App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./Signup";
import NotFound from "../notfound/NotFound";

const LoginWrapper = ({children}) => {
    const {isLoggedIn} = useContext(AuthContext);
    console.log(isLoggedIn);
    if(!isLoggedIn) return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/login" Component={Login} />
                    <Route path="/" Component={Login} />
                    <Route path="/signup" Component={Signup}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
  return <>{children}</>;
}

export default LoginWrapper